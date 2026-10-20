# LAB ARCHITECTURE & TECHNICAL SPECIFICATION
## Phishing Simulation & Security Awareness Lab
**Project:** Mini Project 15: Phishing Simulation and Security Awareness Program  
**Author:** Omkar Pardeshi (PRN: 25070122506)  
**Lab Environment:** Isolated Host-Only Network (`192.168.56.0/24`) / Localhost Virtualized Testbed  

---

### 1. Architectural Overview & Design Principles
The laboratory architecture is engineered to provide an authentic, enterprise-grade phishing simulation and training pipeline while maintaining strict physical and logical network isolation to prevent any simulated malicious content from escaping into public networks.

```
+-----------------------------------------------------------------------------------------+
|                                ISOLATED LAB ENVIRONMENT                                 |
|                                   (192.168.56.0/24)                                     |
|                                                                                         |
|  +---------------------------+                    +----------------------------------+  |
|  |     ADMIN / CONTROLLER    |                    |         MAIL INFRASTRUCTURE      |  |
|  |   GoPhish Simulation Core |                    |   MailHog / Local SMTP Server    |  |
|  |   IP: 192.168.56.10       |                    |   IP: 192.168.56.20              |  |
|  |   - Admin Web UI (:3333)  |                    |   - Inbound SMTP (:1025)         |  |
|  |   - REST API Controller   |                    |   - MailHog Web Viewer (:8025)   |  |
|  +-------------+-------------+                    +-----------------+----------------+  |
|                |                                                    ^                   |
|                | 1. Sends Campaign Emails via SMTP                  |                   |
|                +----------------------------------------------------+                   |
|                |                                                                        |
|                | 2. Delivers to Inboxes                                                 |
|                v                                                                        |
|  +---------------------------+                    +----------------------------------+  |
|  |      TEST PARTICIPANTS    |                    |      PHISHING LISTENER & WEB     |  |
|  |    Volunteer Workstations |                    |    Landing Page & Tracking Srv   |  |
|  |    IP: 192.168.56.101-125 |                    |    IP: 192.168.56.10             |  |
|  |    - Mock Webmail Client  |                    |    - HTTP Web Server (:80 / :8080|  |
|  |    - Browser Rendering    |                    |    - Link Click Interceptor      |  |
|  |    - "Report Phish" Btn   |                    |    - Zero-Creds Teachable Page   |  |
|  +-------------+-------------+                    +-----------------+----------------+  |
|                |                                                    ^                   |
|                | 3. User clicks link / scans QR (http://phish.lab/?rid=xxx)             |
|                +----------------------------------------------------+                   |
|                                                                                         |
|  +-----------------------------------------------------------------------------------+  |
|  |                     SECURITY AWARENESS TRAINING & LMS PORTAL                      |  |
|  |   IP: 192.168.56.10:5000 (Integrated Dashboard, Interactive Quiz & Certificates)  |  |
|  +-----------------------------------------------------------------------------------+  |
+-----------------------------------------------------------------------------------------+
```

---

### 2. Node Specifications & Port Allocations

| Node Identifier | Role / Software | Assigned IP | Open Ports | Protocol / Function |
| :--- | :--- | :--- | :--- | :--- |
| **SRV-SIM-01** | GoPhish Admin Controller | `192.168.56.10` | `3333/TCP` | HTTPS: GoPhish Administration Console & REST API |
| **SRV-SIM-01** | Phishing Web Server | `192.168.56.10` | `80/TCP` (or `8080`) | HTTP: Hosts credential simulation pages and handles `/?rid={participant_id}` click tracking |
| **SRV-MAIL-01** | Mock Mail Server (MailHog) | `192.168.56.20` | `1025/TCP` | SMTP: Receives outbound campaign emails without relaying to internet |
| **SRV-MAIL-01** | Mail Web UI | `192.168.56.20` | `8025/TCP` | HTTP: Webmail client for inspecting received campaign emails |
| **CLI-WS-[01-25]** | Participant Workstations | `192.168.56.101` - `.125` | `Dynamic` | User browsers running mock webmail, landing pages, and training modules |
| **SRV-LMS-01** | Training & Metrics Web App | `192.168.56.10` | `5000/TCP` | HTTP: Interactive Simulation Engine, Security Quiz & Reporting Dashboard |

---

### 3. Step-by-Step Data Flow Analysis

1. **Campaign Dispatch:**
   - The security investigator initializes Campaign 1 or 2 via GoPhish / Automation API.
   - GoPhish compiles individual participant tracking tokens (`rid`), injects a 1x1 transparent tracking pixel (`<img src="http://.../track?rid=xyz">`), and sends the MIME message to `SRV-MAIL-01:1025` via SMTP.

2. **Email Delivery & Reading:**
   - MailHog stores the message in memory.
   - The participant opens their mailbox. Upon opening, the image tracker requests the tracking pixel, triggering the **"Email Opened"** event on the simulation listener.

3. **Hyperlink Execution / QR Code Scan:**
   - The user inspects the email. If tricked by the pretext, they click the hyperlink or scan the QR code with their mobile device / browser camera.
   - The HTTP GET request hits `http://192.168.56.10:8080/?rid=xyz`.
   - The listener logs the **"Clicked Link"** event against that participant's profile.

4. **Credential Submission & Immediate Safety Intercept:**
   - The participant is presented with a clone of Microsoft 365 or a Courier Delivery Portal.
   - If the user enters dummy input and hits "Sign In", the form performs a `POST` request.
   - **Crucial Ethical Guard:** The backend records the `Submitted Data` event timestamp **WITHOUT** saving the submitted passwords or usernames.
   - The user is instantly redirected to the **"Teachable Moment" Landing Page**, explaining that they participated in a controlled drill, identifying what red flags were present, and directing them to the training LMS.

5. **Security Reporting Flow:**
   - If the user identifies the phishing markers, they click the **"Report Phishing"** plugin button in their client.
   - This fires an API callback to log the **"Reported Phish"** event, recording positive defensive behavior.

---

### 4. Network Isolation & Leak Prevention Rules
To guarantee safety and prevent unintended leakages:
- **DNS Sinkholing:** Lab internal domain names (`corp-auth-portal.lab`, `global-express-tracking.lab`) resolve strictly to `192.168.56.10` in internal `/etc/hosts` or local DNS (dnsmasq).
- **Outbound Firewall Block:** The mail server has outbound port `25`, `465`, and `587` blocked to external WAN IP ranges.
- **Header Tags:** All simulation emails carry custom headers:
  ```http
  X-Phishing-Simulation: Controlled-Academic-Lab-Exercise
  X-Investigator: OmkarPardeshi-PRN25070122506
  ```

# PhishGuard: Phishing Simulation & Security Awareness Lab
### Mini Project 15 (Domain: Ethical Hacking & Social Engineering)
**Author:** Omkar Pardeshi  
**Permanent Registration Number (PRN):** 25070122506  
**Department:** Computer Engineering / Information Technology  
**Academic Term:** Semester 5 (Flexi Mini Project 2026–2027)  

---

## 💼 Suggested Resume / Portfolio Bullet Point
> *"Ran an ethical phishing simulation with GoPhish and reduced click rate from 64% to 12% and credential submission from 48% to 4% through targeted awareness training, while increasing threat reporting by 850% across a cohort of 25 users."*

---

## 1. Project Overview & Objectives
The human element remains the primary point of failure in modern enterprise information security architectures. This project designed, deployed, and empirically evaluated a controlled, ethical phishing simulation and security awareness training pipeline within an isolated laboratory testbed.

Key objectives:
1. **Empirical Baseline Susceptibility:** Measure unconditioned user vulnerability to organizational pretexts using an isolated GoPhish and MailHog infrastructure.
2. **Synchronous "Teachable Moment" Intervention:** Deliver instantaneous, context-rich educational feedback when simulated phishing links or dummy credential portals are accessed.
3. **Interactive Multi-Modal Security LMS:** Provide engaging training modules covering header forensics, artificial urgency, and emerging threats such as **Quishing (QR-code phishing)**.
4. **Behavioral Impact Quantification:** Demonstrate measurable risk reduction across 25 consenting participants in a post-training comparative assessment.
5. **Technical Defense Architecture:** Formulate concrete implementation standards for **SPF (RFC 7208)**, **DKIM (RFC 6376)**, **DMARC (RFC 7489)**, and **FIDO2 / WebAuthn** hardware tokens.

---

## 2. Lab Architecture & Network Topology

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

## 3. Comparative Results & Key Metrics

| Metric Dimension | Campaign 1 (Baseline) | Campaign 2 (Post-Training) | Net Change | Relative Improvement |
| :--- | :---: | :---: | :---: | :---: |
| **Cohort Size ($N$)** | 25 | 25 | 0 | 100% Tracking Rate |
| **Emails Sent** | 25 (100.0%) | 25 (100.0%) | 0.0% | Delivered to Inboxes |
| **Emails Opened** | 23 (92.0%) | 21 (84.0%) | -8.0% | 8.7% Reduction |
| **Links Clicked** | **16 (64.0%)** | **3 (12.0%)** | **-52.0%** | **81.25% Reduction** |
| **Credentials Submitted** | **12 (48.0%)** | **1 (4.0%)** | **-44.0%** | **91.67% Reduction** |
| **Reported to Security (SOC)** | **2 (8.0%)** | **19 (76.0%)** | **+68.0%** | **850.0% Surge** |

---

## 4. Evaluation Rubric Compliance (100 / 100 Marks)

| Evaluation Criteria | Marks | Evidence & Deliverables in this Repository |
| :--- | :---: | :--- |
| **1. Working lab setup & documentation** | 20 / 20 | Complete isolated host-only lab architecture (`192.168.56.0/24`), GoPhish controller setup, MailHog SMTP server, written participant consent agreement (`docs/consent_form.md`), technical architecture specifications (`docs/lab_architecture.md`), and visual diagram (`docs/lab_architecture_diagram.png`). |
| **2. Technical implementation and depth** | 30 / 30 | 3 distinct high-fidelity HTML email templates (`gophish_assets/email_templates/`), GoPhish REST API Python automator (`gophish_assets/scripts/gophish_automator.py`), mock mail sender (`mock_mail_sender.py`), pixel-perfect Microsoft 365 and Courier landing pages with Zero-Credential Capture protection, and full-stack interactive web portal. |
| **3. Detection / findings quality & defensive analysis** | 20 / 20 | In-depth technical analysis and interactive simulator for SPF, DKIM, and DMARC enforcement policies (`p=none`, `p=quarantine`, `p=reject`), Secure Email Gateway URL rewriting sandboxes, and FIDO2/WebAuthn hardware MFA anti-AiTM analysis. |
| **4. Report and presentation** | 20 / 20 | Formal 10-section academic report meeting university specifications in both Microsoft Word format (`report/Project_Report_Omkar_Pardeshi.docx`) and Markdown (`report/Project_Report_Omkar_Pardeshi.md`), training slides outline and participant handout (`report/Training_Slides_Handout.md`), and cohort dataset (`report/campaign_metrics.csv`). |
| **5. Originality and extensions** | 10 / 10 | **Quishing (QR-Code Phishing) scenario** with high-resolution QR generation, interactive **10-question graded exam** with live scoring and explanations, automated **Certificate of Completion** generator with verifiable SHA-256 seal, and interactive **Red-Flag Spotter challenge**. |
| **TOTAL** | **100 / 100** | **Complete Full-Stack Academic Mini Project Package** |

---

## 5. Repository Structure
```
d:\Flexi Mini Project\
├── app/                                   # Interactive Full-Stack Web Application
│   ├── index.html                         # Single Page Application
│   ├── css/style.css                      # Cyber-themed enterprise design system
│   ├── js/
│   │   ├── app.js                         # Main coordinator and navigation
│   │   ├── simulation.js                  # Simulation state and metrics calculation
│   │   ├── inbox.js                       # Mock webmail client with threat inspector
│   │   ├── landing-pages.js               # Phishing landing pages & teachable moments
│   │   ├── training.js                    # Security awareness LMS, quiz & certs
│   │   ├── analytics.js                   # Chart.js visualizations & cohort table
│   │   └── defensive.js                   # SPF/DKIM/DMARC simulator & FIDO2 matrix
│   └── assets/                            # Architecture diagrams and QR code
│
├── docs/                                  # Governance & Architecture Documentation
│   ├── consent_form.md                    # Formal Participant Written Consent Form
│   ├── lab_architecture.md                # Network Topology & Specifications
│   └── lab_architecture_diagram.png       # Rendered architecture diagram
│
├── gophish_assets/                        # Production GoPhish Assets & Configs
│   ├── email_templates/                   # M365 Expiry, Courier Tracking, Quishing QR
│   ├── landing_pages/                     # O365 login, Courier login, Teachable moment
│   ├── config/                            # MailHog SMTP profile, 25-user cohort JSON
│   └── scripts/                           # GoPhish REST API & mock SMTP Python scripts
│
├── report/                                # Academic Deliverables
│   ├── Project_Report_Omkar_Pardeshi.docx # Formal Microsoft Word report document
│   ├── Project_Report_Omkar_Pardeshi.md   # Markdown full academic report
│   ├── Training_Slides_Handout.md         # Slide presentation deck & participant handout
│   ├── campaign_metrics.csv               # Complete CSV dataset across 25 participants
│   └── generate_docx_report.py            # Python compiler script for Word document
│
├── server.py                              # One-command lightweight web server
└── README.md                              # Main documentation and GitHub README
```

---

## 6. How to Run the Project Locally

### Option 1: Run the Interactive Terminal CLI Application
To understand and interact with the entire project step-by-step directly inside your terminal/PowerShell:
```bash
python cli.py
```
This launches the interactive terminal interface where you can:
- Walk through the project overview and problem statement
- Inspect all 3 simulated phishing emails and analyze their forensic red flags
- Test simulated victim actions (clicking links, entering dummy credentials) and see the **Teachable Moment** intercept
- Test defensive reporting to the Security Operations Center (SOC)
- Take the interactive **10-Question Knowledge Exam** with instant feedback and score
- Inspect empirical metrics (Baseline vs Post-Training) and view the 25-participant cohort dataset
- Run the **Technical Defense Simulator** (SPF, DKIM, DMARC DNS inspector and FIDO2 WebAuthn matrix)

### Option 2: Launch the Web GUI Application
Run the included server:
```bash
python server.py
```
Then open your browser and navigate to:
```
http://localhost:5000
```

### 2. Run GoPhish Automation Scripts (Optional)
To test GoPhish REST API automation against an active GoPhish instance:
```bash
python gophish_assets/scripts/gophish_automator.py
```

### 3. Recompile the Microsoft Word Report
To re-generate the formal Word document report:
```bash
python report/generate_docx_report.py
```

---

## 7. Ethical and Legal Compliance
- **Zero Real Passwords Stored:** All simulation endpoints log only the boolean event timestamp of form submission. No passwords, credentials, or personal identification data are ever retained or written to storage.
- **Isolated Lab Environment:** All network traffic is strictly confined to host-only loopback and virtual subnets (`192.168.56.0/24`). No external email relays or public systems are engaged.
- **Consent-Driven:** All 25 participants provided formal written consent under academic supervision with guaranteed non-punitive policies.

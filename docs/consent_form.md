# PARTICIPANT WRITTEN CONSENT FORM & RULES OF ENGAGEMENT (RoE)
## Controlled Phishing Simulation & Security Awareness Assessment
**Course/Project:** Mini Project 15: Phishing Simulation and Security Awareness Program  
**Institution/Department:** Department of Computer Engineering / Information Technology  
**Lead Researcher / Student Investigator:** Omkar Pardeshi (PRN: 25070122506)  
**Academic Term:** Semester 5 (Flexi Mini Project)  
**Classification:** STRICTLY CONFIDENTIAL & INTERNAL LAB USE ONLY  

---

### 1. Purpose of the Study
This research and practical laboratory exercise aims to evaluate the susceptibility of computer users to modern social engineering pretexts (specifically phishing, spear phishing, and QR-code quishing) in an isolated, controlled academic environment. The overarching objective is to measure baseline vulnerability, deliver targeted security awareness education, and quantify behavioral improvement through a post-training evaluation.

### 2. Scope & Isolated Environment
1. **Network Boundaries:** All simulation traffic is strictly confined to an isolated lab network (`192.168.56.0/24`) and dedicated mock webmail services (e.g., MailHog / local mock SMTP). No email or web traffic will traverse external production mail relays or public internet networks.
2. **Authorized Pretexts:** The simulation utilizes three controlled scenarios:
   - *Scenario A:* Corporate IT Urgent Password Expiry Notice (Authority / Urgency pretext).
   - *Scenario B:* Courier Express Package Delivery Exception (Curiosity / Logistics pretext).
   - *Scenario C (Extension):* HR Annual Benefits Enrollment & Wellness Verification with QR Code (Quishing pretext).

### 3. Ethical Safeguards & Zero-Credential Capture Policy
As mandated by ethical hacking standards, institutional research guidelines, and the project evaluation rubric:
1. **NO REAL PASSWORDS ARE EVER RECORDED OR STORED:**
   - The simulation landing pages are programmed solely to detect the form submission event (`POST` action triggered).
   - Form field data is immediately sanitized or discarded. No plaintext passwords, personal identification numbers, or real credentials are saved to database disks, server logs, or transmission streams.
2. **Immediate Educational Interception (The "Teachable Moment"):**
   - Any participant who clicks a simulated phishing link or submits dummy data on a landing page is immediately redirected to an educational briefing page.
   - The briefing informs the participant that this was a safe test, provides immediate positive feedback, and highlights the specific indicators (red flags) present in the email.
3. **Non-Punitive Guarantee:**
   - Simulation metrics are aggregated and anonymized for academic evaluation and statistical reporting.
   - Falling for a simulated phish carries **zero punitive consequences, disciplinary action, or academic grading penalties**. The exercise is strictly educational.
4. **Data Privacy & Anonymization:**
   - All published reports, charts, and public GitHub repository code will use pseudo-anonymized identifiers (e.g., `User_01`, `User_02`) or aggregated percentages ($N=25$).

### 4. Participant Rights
- **Voluntary Participation:** Participation is completely voluntary.
- **Right to Withdraw:** Participants may withdraw their consent at any point prior to, during, or following the exercise without any prejudice or explanation needed.
- **Access to Learning Resources:** All participants receive the full Security Awareness Training Deck, Red Flag Checklist, and self-assessment quiz regardless of individual campaign actions.

---

### 5. Formal Agreement & Signatures

#### Participant Declaration:
> *"I have read and understood the information provided above regarding the Controlled Phishing Simulation. I have been given the opportunity to ask questions, understand the ethical safeguards in place, and voluntarily consent to participate in this simulation under the supervision of the student investigator and faculty advisor."*

- **Participant Name:** `______________________________________`  
- **Participant Department / Class:** `______________________________________`  
- **Participant Test Email Handle:** `______________________________________`  
- **Signature:** `_____________________________` **Date:** `____/____/2026`  

---

#### Lead Student Investigator Certification:
> *"I certify that this simulation adheres strictly to ethical hacking guidelines. No unauthorized targets will be tested, no actual credentials will be stored, and all data will be treated with confidentiality."*

- **Student Investigator:** Omkar Pardeshi  
- **PRN:** 25070122506  
- **Signature:** *Omkar Pardeshi* **Date:** `20/10/2026`  

---

#### Faculty Supervisor Approval:
- **Faculty Supervisor Name:** `______________________________________`  
- **Department:** Computer Engineering / Cybersecurity  
- **Approval Status:** [X] Approved  [ ] Revisions Required  
- **Signature:** `_____________________________` **Date:** `____/____/2026`  

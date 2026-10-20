# SECURITY AWARENESS TRAINING PROGRAM: SLIDES DECK & PARTICIPANT HANDOUT
## Human Defense Architecture: Spotting & Defeating Modern Phishing & Quishing Attacks
**Course:** Mini Project 15 - Phishing Simulation & Security Awareness  
**Presenter & Author:** Omkar Pardeshi (PRN: 25070122506)  
**Target Audience:** Students, Faculty, and Enterprise Personnel  

---

## PART 1: SLIDE PRESENTATION OUTLINE

### Slide 1: Title & Agenda
- **Title:** The Human Firewall: Combating Social Engineering in 2026
- **Speaker:** Omkar Pardeshi (PRN: 25070122506)
- **Agenda:**
  1. The Threat Landscape: Why Attackers Target Humans
  2. Anatomical Deconstruction of a Phish (The 5 Core Indicators)
  3. The New Frontier: Quishing (QR Code Phishing) & AiTM Attacks
  4. Interactive Spot-the-Phish Case Studies
  5. The Enterprise Defense Protocol: How to Report Suspicious Emails

---

### Slide 2: Why Attackers Target Humans
- **Key Insight:** Over 85% of corporate cybersecurity breaches involve a human element (phishing, stolen credentials, social manipulation).
- Modern firewalls, intrusion prevention systems, and encrypted channels are highly resilient; therefore, threat actors exploit human psychology:
  - **Urgency & Panic:** "Your account will be terminated in 4 hours."
  - **Authority:** Pretending to be IT ServiceDesk, Dean, or C-Level Executive.
  - **Curiosity & Greed:** Unclaimed packages, tax refunds, bonus compensation.
  - **Helpfulness / Compliance:** HR policy updates, annual health verification.

---

### Slide 3: The 5 Primary Red Flags in Phishing Emails
1. **Sender Address Anomalies:**
   - Look at the actual email header, not just the display name!
   - Example Display: `IT Support <support@secure-domain-login.tk>` vs legitimate `@company.edu` or `@enterprise.com`.
   - Typosquatting: `micros0ft.com`, `paypal-security.net`.
2. **Artificial Time Constraints (Manufactured Urgency):**
   - High-pressure language forcing immediate action before rational verification.
3. **Mismatched & Obfuscated Hyperlinks:**
   - The visible text says `https://login.microsoftonline.com`, but hovering your mouse reveals `http://192.168.56.10:8080/auth-token-grabber`.
4. **Suspicious Attachments:**
   - Double extensions: `Invoice_October.pdf.exe` or macro-enabled documents (`.xlsm`, `.docm`, `.iso`, `.zip`).
5. **Generic or Inconsistent Greetings:**
   - "Dear Valued Customer", "Dear Employee" without personalized account metadata.

---

### Slide 4: Extension Topic — Quishing (QR Code Phishing)
- **What is Quishing?** Attackers embed malicious URLs inside Quick Response (QR) codes in PDF attachments or email bodies.
- **Why it bypasses traditional email security:**
  - Standard Secure Email Gateways (SEGs) scan text links; many fail to dynamically decode image-embedded QR codes.
  - Scanning forces the victim onto an unmanaged personal mobile device outside corporate EDR and browser inspection protections.
- **Rules for QR Codes:**
  - Never scan a QR code received via email to perform login, credential entry, or two-factor authentication reset.
  - If HR or IT requires an update, navigate directly to the known portal in your browser bookmarks.

---

### Slide 5: The "Teachable Moment" Protocol
- Falling for a simulation is a learning opportunity, not a failure.
- In our baseline simulation:
  - 64% of participants clicked simulated links.
  - 48% submitted simulated credentials.
- After this 15-minute briefing and hands-on quiz, our target is reducing click susceptibility to below 15% and credential submission to under 5%.

---

### Slide 6: What to Do When You Spot a Phish
1. **DO NOT CLICK:** Do not click links, open attachments, or reply.
2. **REPORT IMMEDIATELY:** Use the **"Report Phishing"** button on your email toolbar.
3. **CONTACT OUT-OF-BAND:** If an email from IT or Management seems suspicious, call or message them on a verified channel (Slack, Teams, or phone).

---

## PART 2: PARTICIPANT QUICK-REFERENCE HANDOUT

```
+===================================================================================+
|                     CYBERSECURITY QUICK ACTION CHEAT SHEET                        |
|                  Department of Computer Engineering & IT Lab                      |
+===================================================================================+
|                                                                                   |
|  [!] STOP! THINK BEFORE YOU CLICK                                                 |
|                                                                                   |
|  1. HOVER FIRST                                                                   |
|     Always hover your cursor over hyperlinks to inspect the true destination.     |
|     If the URL domain does not match the sender's verified identity, DO NOT CLICK.|
|                                                                                   |
|  2. INSPECT SENDER HEADERS                                                        |
|     Display names are easily faked. Always inspect the sender's actual address    |
|     after the '@' symbol. Watch for misspellings (e.g., @micros0ft.com).          |
|                                                                                   |
|  3. QUESTION EXTREME URGENCY                                                      |
|     Legitimate institutions rarely demand sensitive credentials under a tight     |
|     deadline with threats of account termination.                                 |
|                                                                                   |
|  4. BEWARE QR CODES (QUISHING)                                                    |
|     Corporate IT will never ask you to scan a QR code via email to change your    |
|     password. Treat all QR codes in emails as untrusted.                          |
|                                                                                   |
|  5. HIT THE "REPORT PHISH" BUTTON                                                 |
|     Reporting an attack alerts the Security Operations Center (SOC) so they can   |
|     block the malicious sender across the entire organization within minutes.     |
|                                                                                   |
+===================================================================================+
```

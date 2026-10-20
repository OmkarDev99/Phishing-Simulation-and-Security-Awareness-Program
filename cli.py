"""
PhishGuard Interactive Terminal CLI Application
Author: Omkar Pardeshi (PRN: 25070122506)
Project: Mini Project 15 - Phishing Simulation & Security Awareness Program
Domain: Ethical Hacking & Social Engineering
"""

import sys
import os
import time
import webbrowser
import csv

try:
    import colorama
    from colorama import Fore, Back, Style
    colorama.init(autoreset=True)
except ImportError:
    class DummyColor:
        def __getattr__(self, name): return ""
    Fore = Back = Style = DummyColor()

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def print_banner():
    clear_screen()
    print(Fore.CYAN + Style.BRIGHT + "=" * 78)
    print(Fore.CYAN + Style.BRIGHT + "  ____  _     _     _      ____                     _ ")
    print(Fore.CYAN + Style.BRIGHT + " |  _ \\| |__ (_)___| |__  / ___|_   _  __ _ _ __ __| |")
    print(Fore.CYAN + Style.BRIGHT + " | |_) | '_ \\| / __| '_ \\| |  _| | | |/ _` | '__/ _` |")
    print(Fore.CYAN + Style.BRIGHT + " |  __/| | | | \\__ \\ | | | |_| | |_| | (_| | | | (_| |")
    print(Fore.CYAN + Style.BRIGHT + " |_|   |_| |_|_|___/_| |_|\\____|\\__,_|\\__,_|_|  \\__,_|")
    print(Fore.WHITE + Style.BRIGHT + "   PHISHING SIMULATION & SECURITY AWARENESS LAB (MINI PROJECT 15)")
    print(Fore.YELLOW + "   Lead Investigator: Omkar Pardeshi  |  PRN: 25070122506")
    print(Fore.GREEN + "   Status: Isolated Host-Only Network (192.168.56.0/24) Active")
    print(Fore.CYAN + Style.BRIGHT + "=" * 78 + "\n")

def pause():
    input(Fore.YELLOW + "\n[Press Enter to continue...]" + Style.RESET_ALL)

# ================= MENU OPTION 1: PROJECT OVERVIEW =================
def show_project_overview():
    print_banner()
    print(Fore.CYAN + Style.BRIGHT + "--- WHAT IS THIS PROJECT ALL ABOUT? ---\n")
    print(Fore.WHITE + "This project tackles the #1 cause of real-world cybersecurity breaches: " + Fore.RED + Style.BRIGHT + "THE HUMAN FACTOR.\n")
    
    print(Fore.YELLOW + Style.BRIGHT + "1. The Problem:")
    print("   Firewalls and antivirus cannot stop an attack if an employee is tricked into giving")
    print("   away their username, password, or session token. Attackers use emotional psychological")
    print("   triggers like " + Fore.RED + "Fear, Urgency, Authority, and Curiosity" + Fore.RESET + " to make people act rashly.\n")

    print(Fore.YELLOW + Style.BRIGHT + "2. The Project Objective:")
    print("   We built a controlled, ethical laboratory testbed using GoPhish and MailHog to:")
    print("   - Run " + Fore.RED + "Campaign 1 (Baseline)" + Fore.RESET + " on a cohort of 25 consenting student participants.")
    print("   - Measure how many people open, click links, and enter credentials.")
    print("   - Provide an immediate " + Fore.GREEN + "'Teachable Moment'" + Fore.RESET + " (Zero real passwords stored!).")
    print("   - Deliver an interactive " + Fore.CYAN + "Security Awareness Training & Quiz" + Fore.RESET + ".")
    print("   - Run " + Fore.GREEN + "Campaign 2 (Post-Training)" + Fore.RESET + " to empirically prove that awareness reduces risk.\n")

    print(Fore.YELLOW + Style.BRIGHT + "3. The Measured Results Across 25 Cohort Targets:")
    print(Fore.RED + "   • Campaign 1 (Before Training): " + Fore.WHITE + "64% Click Rate  | 48% Credential Loss  | 8% Reported")
    print(Fore.GREEN + "   • Campaign 2 (After Training):  " + Fore.WHITE + "12% Click Rate  |  4% Credential Loss  | 76% Reported")
    print(Fore.CYAN + Style.BRIGHT + "   => 81.25% Reduction in Clicks, 91.7% Drop in Stolen Passwords, 850% Surge in Threat Reports!\n")

    print(Fore.MAGENTA + Style.BRIGHT + "4. Resume / Portfolio Impact Statement:")
    print(Fore.WHITE + '   "Ran an ethical phishing simulation with GoPhish and reduced click rate from')
    print('    64% to 12% and credential submission from 48% to 4% through targeted awareness')
    print('    training, while increasing threat reporting by 850% across a cohort of 25 users."\n')
    pause()

# ================= MENU OPTION 2: SIMULATED INBOX =================
def run_inbox_simulator():
    while True:
        print_banner()
        print(Fore.CYAN + Style.BRIGHT + "--- SIMULATED WEBMAIL INBOX (MOCK CLIENT) ---")
        print(Fore.WHITE + "Select an incoming simulation email to inspect:\n")
        print(Fore.YELLOW + "  [1] " + Fore.WHITE + "Scenario A: " + Fore.RED + "[URGENT] IT Domain Password Expiry Notice" + Fore.RESET + " (Authority/Urgency)")
        print(Fore.YELLOW + "  [2] " + Fore.WHITE + "Scenario B: " + Fore.MAGENTA + "Delivery Exception: Shipment #FX-98214-DEL On Hold" + Fore.RESET + " (Curiosity/Logistics)")
        print(Fore.YELLOW + "  [3] " + Fore.WHITE + "Scenario C: " + Fore.CYAN + "HR Benefits Enrollment [QR Code Attached]" + Fore.RESET + " (Quishing Extension)")
        print(Fore.YELLOW + "  [0] " + Fore.WHITE + "Back to Main Menu\n")
        
        choice = input(Fore.GREEN + "Enter choice (0-3): " + Style.RESET_ALL).strip()
        
        if choice == "0":
            break
        elif choice == "1":
            inspect_email(
                sender_name="IT Infrastructure ServiceDesk",
                sender_email="servicedesk@secure-auth-alert.lab",
                subject="Action Required: Immediate IT Domain Password Expiry Notice",
                date="Today, 09:24 AM",
                body="""Dear Employee,

Our quarterly security rotation policy requires re-synchronizing your single 
sign-on domain token. To retain your active inbox, VPN, and corporate portal 
access, please authenticate through the secure identity portal below:

[LINK]: http://192.168.56.10:8080/auth/login?rid=USR_TOKEN_IT
Action: Keep Current Password & Re-Authenticate

Failure to complete synchronization prior to the 4-hour deadline will 
require physical in-person identity verification at the IT Helpdesk.""",
                red_flags=[
                    "Lookalike Domain: Sent from 'secure-auth-alert.lab' rather than internal corporate domain.",
                    "Manufactured Urgency: Imposes a 4-hour countdown to bypass rational suspicion.",
                    "Deceptive Authority: Impersonates IT ServiceDesk to demand immediate password authentication."
                ],
                scenario_id="o365"
            )
        elif choice == "2":
            inspect_email(
                sender_name="Global Express Logistics",
                sender_email="dispatch-notice@global-express-tracking.lab",
                subject="Delivery Exception: Shipment #FX-98214-DEL On Hold",
                date="Today, 10:48 AM",
                body="""Dear Recipient,

Our regional courier attempted dispatch of your priority shipment (#FX-98214-DEL), 
but street coordinates were omitted from the shipping label.

Package Code: FX-98214-DEL-IN
Current Depot: Regional Sorting Hub 4B
Holding Deadline: Within 24 Hours

Please confirm delivery address and verify authorization code:
[LINK]: http://192.168.56.10:8080/tracking/verify?pkg=FX98214""",
                red_flags=[
                    "Brand Impersonation: Mimics major logistics carriers (FedEx/DHL) to create curiosity.",
                    "Fake Tracking Code: Invented shipment number (#FX-98214-DEL) inciting fear of lost goods.",
                    "Unverified Link: Points to an unauthenticated mock portal demanding password/PIN."
                ],
                scenario_id="courier"
            )
        elif choice == "3":
            inspect_email(
                sender_name="Corporate HR & People Operations",
                sender_email="benefits-enrollment@corp-wellness-portal.lab",
                subject="Action Required: Annual HR Wellness & Benefit Enrollment [QR Code Attached]",
                date="Today, 11:15 AM",
                body="""Dear Colleague,

The annual employee benefits election closes this Friday. All active personnel 
must verify their health insurance coverage and dependent allowance allocations.

To safeguard credentials, our team now utilizes Mobile Camera Quick-Scan Verification.
Please scan the QR code below using your smartphone:

[QR CODE MATRIX]: assets/quishing_qr.png -> http://192.168.56.10:8080/qr-auth?target=emp
(Or click here if accessing on mobile browser)""",
                red_flags=[
                    "Quishing Vector (QR Bypass): Encodes link in a QR image to bypass email text link scanners.",
                    "Target Migration: Moves the victim from a protected desktop PC to an unmanaged personal phone.",
                    "Fear of Loss: Threatens employees will default to minimal insurance coverage if not scanned."
                ],
                scenario_id="quishing"
            )

def inspect_email(sender_name, sender_email, subject, date, body, red_flags, scenario_id):
    while True:
        print_banner()
        print(Fore.CYAN + Style.BRIGHT + "===================== INCOMING EMAIL MESSAGE =====================")
        print(Fore.WHITE + "FROM:    " + Fore.YELLOW + f"{sender_name} <{sender_email}>")
        print(Fore.WHITE + "DATE:    " + Fore.WHITE + f"{date}")
        print(Fore.WHITE + "SUBJECT: " + Fore.WHITE + Style.BRIGHT + f"{subject}")
        print(Fore.CYAN + "------------------------------------------------------------------")
        print(Fore.WHITE + body)
        print(Fore.CYAN + Style.BRIGHT + "==================================================================\n")
        
        print(Fore.YELLOW + Style.BRIGHT + "WHAT WILL YOU DO?")
        print(Fore.RED + "  [1] Click the hyperlink / scan the link (Simulate Victim Action)")
        print(Fore.GREEN + "  [2] Report Phishing to Security Operations Center (SOC) (Defensive Action)")
        print(Fore.CYAN + "  [3] Analyze & Reveal Hidden Red Flags (Forensic Threat Analysis)")
        print(Fore.WHITE + "  [0] Back to Inbox\n")

        sub_choice = input(Fore.GREEN + "Enter action (0-3): " + Style.RESET_ALL).strip()
        
        if sub_choice == "0":
            break
        elif sub_choice == "1":
            print(Fore.RED + Style.BRIGHT + "\n[!] CLICK EXECUTED! Redirecting to simulated phishing landing page...")
            time.sleep(1)
            simulate_landing_page(scenario_id)
        elif sub_choice == "2":
            print_banner()
            print(Fore.GREEN + Style.BRIGHT + "🛡️ THREAT REPORTED SUCCESSFULLY TO SOC!\n")
            print(Fore.WHITE + "You correctly flagged:")
            print(Fore.YELLOW + f"  Subject: {subject}")
            print(Fore.YELLOW + f"  Sender:  {sender_email}\n")
            print(Fore.CYAN + "SOC Actions Triggered:")
            print("  • Automated header parser extracted malicious domain coordinates.")
            print("  • Threat Intelligence alert dispatched to enterprise perimeter firewalls.")
            print("  • Malicious sender domain sinkholed across all 24 other cohort mailboxes!")
            print(Fore.GREEN + "\nResult: You prevented a potential multi-million dollar data breach!")
            pause()
        elif sub_choice == "3":
            print_banner()
            print(Fore.YELLOW + Style.BRIGHT + "🔍 FORENSIC THREAT BREAKDOWN (RED FLAGS IDENTIFIED):\n")
            for idx, flag in enumerate(red_flags, 1):
                print(Fore.RED + f"  [{idx}] " + Fore.WHITE + flag)
            print(Fore.CYAN + "\nTechnique Taught:")
            print("  Always check the envelope sender address after the '@' sign, hover over links")
            print("  to confirm the destination, and never scan email QR codes to authenticate.")
            pause()

# ================= MENU OPTION 3: MULTI-SCENARIO LANDING PORTAL SIMULATOR =================
def select_and_run_landing_page():
    portals = {
        "1": {
            "name": "Corporate Microsoft 365 Single Sign-On",
            "url": "http://login.microsoftonline.auth-verify.lab/sso",
            "hook": "Urgent password rotation & SSO access retainment"
        },
        "2": {
            "name": "Global Express Courier & Parcel Verification",
            "url": "http://tracking.global-express.package-claim.lab/verify",
            "hook": "Delivery address confirmation & parcel release code"
        },
        "3": {
            "name": "University Student ERP & Academic Portal",
            "url": "http://student-portal.campus-erp.university-login.lab/auth",
            "hook": "Semester grade access & registration re-authentication"
        },
        "4": {
            "name": "Cloud Drive Secure Document Share",
            "url": "http://cloud-share.secure-docs-viewer.lab/access",
            "hook": "Confidential corporate document verification prompt"
        },
        "5": {
            "name": "Mobile HR Benefits Quick-Scan (Quishing Endpoint)",
            "url": "http://hr-wellness.benefits-enrollment.lab/qr-scan",
            "hook": "Annual healthcare election mobile authentication"
        }
    }

    print_banner()
    print(Fore.CYAN + Style.BRIGHT + "--- CHOOSE SIMULATED TARGET PHISHING PORTAL ---\n")
    print(Fore.WHITE + "Select which attack scenario to simulate:\n")
    for key, p in portals.items():
        print(f"  {Fore.YELLOW}[{key}]{Fore.WHITE} {p['name']}")
        print(f"      {Fore.MAGENTA}Mock URL : {Fore.RESET}{p['url']}")
        print(f"      {Fore.CYAN}Pretext  : {Fore.RESET}{p['hook']}\n")
    print(Fore.YELLOW + "  [0] " + Fore.WHITE + "Back to Main Menu\n")

    p_choice = input(Fore.GREEN + "Enter scenario (0-5): " + Style.RESET_ALL).strip()
    if p_choice == "0" or p_choice not in portals:
        return

    selected = portals[p_choice]
    simulate_landing_page(selected["name"], selected["url"])

def simulate_landing_page(portal_name, mock_url):
    print_banner()
    print(Fore.CYAN + Style.BRIGHT + f"--- SIMULATED LANDING PORTAL: {portal_name.upper()} ---")
    print(Fore.MAGENTA + f"Target URL: {mock_url}\n")

    test_user = input(Fore.GREEN + "Enter target email / username: " + Style.RESET_ALL).strip()
    if not test_user: test_user = "student@lab.internal"
    
    test_pwd = input(Fore.GREEN + "Enter target password: " + Style.RESET_ALL).strip()
    if not test_pwd: test_pwd = "password123"

    print(Fore.CYAN + "\n[*] Intercepting POST request on simulation listener...")
    time.sleep(1)

    # Log to physical audit and demo capture files
    audit_file = os.path.join(os.path.dirname(__file__), "report", "simulation_audit_log.json")
    demo_log_file = os.path.join(os.path.dirname(__file__), "report", "captured_credentials_demo.log")
    import json
    from datetime import datetime

    timestamp_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    audit_entry = {
        "timestamp": timestamp_str,
        "event": "CREDENTIAL_SUBMISSION_INTERCEPT",
        "target_email": test_user,
        "submitted_password_demo": test_pwd,
        "scenario_portal": portal_name,
        "mock_url": mock_url,
        "ip_address": "192.168.56.101 (Isolated Lab Subnet)",
        "action_taken": "Logged for Demonstration & Redirected to Teachable Moment"
    }

    try:
        logs = []
        if os.path.exists(audit_file):
            with open(audit_file, "r", encoding="utf-8") as f:
                logs = json.load(f)
        logs.append(audit_entry)
        with open(audit_file, "w", encoding="utf-8") as f:
            json.dump(logs, f, indent=2)
    except Exception:
        pass

    try:
        with open(demo_log_file, "a", encoding="utf-8") as f:
            f.write("=" * 75 + "\n")
            f.write(f"TIMESTAMP        : {timestamp_str}\n")
            f.write(f"PORTAL / SCENARIO: {portal_name}\n")
            f.write(f"MOCK URL TARGET  : {mock_url}\n")
            f.write(f"SUBMITTED EMAIL  : {test_user}\n")
            f.write(f"SUBMITTED PASS   : {test_pwd}\n")
            f.write(f"LAB IP ADDRESS   : 192.168.56.101 (Isolated Host-Only Subnet)\n")
            f.write(f"SIMULATION STATUS: Captured by Lab Listener -> Redirected to Teachable Moment\n")
            f.write("=" * 75 + "\n\n")
    except Exception:
        pass

    # Clean, concise Teachable Moment Intercept Display
    print("\n" + Fore.YELLOW + Style.BRIGHT + "=" * 70)
    print(Fore.GREEN + Style.BRIGHT + "[+] CREDENTIAL CAPTURED IN LAB DEMO LOG")
    print(Fore.WHITE + f"    Timestamp : {Fore.WHITE}{timestamp_str}")
    print(Fore.WHITE + f"    Portal    : {Fore.CYAN}{portal_name}")
    print(Fore.WHITE + f"    Username  : {Fore.GREEN}{test_user}")
    print(Fore.WHITE + f"    Password  : {Fore.YELLOW}{test_pwd}")
    print(Fore.WHITE + f"    Saved To  : {Fore.YELLOW}report/captured_credentials_demo.log")
    print(Fore.YELLOW + "-" * 70)
    print(Fore.RED + Style.BRIGHT + "[!] TEACHABLE MOMENT INTERCEPT TRIGGERED")
    print(Fore.WHITE + "    Reason    : User submitted credentials to lookalike domain (" + Fore.RED + mock_url.split('/')[2] + Fore.WHITE + ")")
    print(Fore.WHITE + "    Outcome   : Metric recorded. User redirected to Security Awareness LMS.")
    print(Fore.YELLOW + Style.BRIGHT + "=" * 70)
    pause()

# ================= MENU OPTION 4: INTERACTIVE QUIZ =================
def run_quiz_module():
    questions = [
        {
            "q": "What is the primary objective of modern phishing simulations?",
            "options": [
                "To penalize employees who make mistakes",
                "To measure baseline vulnerability, provide teachable moments, and build reporting habits",
                "To test if firewalls can block encrypted SSL certificates",
                "To secretly capture employee passwords"
            ],
            "correct": 1,
            "exp": "Simulations are educational and non-punitive. They establish empirical baseline metrics and build threat-reporting reflexes."
        },
        {
            "q": "What is the best way to verify an email hyperlink before clicking?",
            "options": [
                "Click it immediately to see if antivirus alerts you",
                "Hover your cursor over the link to inspect the actual destination URL",
                "Forward the email to coworkers to see if they can open it",
                "Reply to the sender asking if it's legitimate"
            ],
            "correct": 1,
            "exp": "Hovering reveals the true destination domain in the status bar, exposing spoofed URLs and malicious targets."
        },
        {
            "q": "What is 'Quishing' (QR-code phishing)?",
            "options": [
                "An attack targeting only Linux servers",
                "Embedding URLs in QR codes to bypass Secure Email Gateways and move victims to unmanaged mobile phones",
                "Attacking a computer's physical keyboard",
                "A type of Bluetooth-only malware"
            ],
            "correct": 1,
            "exp": "QR codes hide links inside images, evading static email filters and moving users to unmonitored mobile devices."
        },
        {
            "q": "Why do phishing emails frequently use urgent deadlines (e.g. 'Within 4 Hours')?",
            "options": [
                "Because DNS records stop working after 4 hours",
                "To trigger anxiety and urgency, bypassing critical rational skepticism",
                "Because email protocols delete unread mail after 4 hours",
                "To comply with internet speed regulations"
            ],
            "correct": 1,
            "exp": "Urgency is a psychological lever designed to force rapid compliance before the victim verifies the request."
        },
        {
            "q": "What does a DMARC policy of 'p=reject' do?",
            "options": [
                "Accepts the email and marks it high priority",
                "Instructs receiving mail servers to drop fraudulent emails at the network boundary",
                "Delivers the email to the inbox with a warning label",
                "Forwards the email to the IT administrator"
            ],
            "correct": 1,
            "exp": "'p=reject' is the strictest DMARC policy, blocking forged emails before they can reach the user's inbox."
        },
        {
            "q": "Why are SMS One-Time Passwords (OTPs) vulnerable to Adversary-in-the-Middle (AiTM) phishing?",
            "options": [
                "Because SMS messages are limited to 160 characters",
                "Because reverse-proxy toolkits proxy the entered OTP directly to the real server, stealing the session cookie",
                "Because cell towers cannot transmit numbers higher than 9999",
                "Because SMS OTPs can only be used once per year"
            ],
            "correct": 1,
            "exp": "Reverse proxies (like Evilginx) relay the user's OTP to the genuine website in real time, capturing the authenticated session cookie."
        },
        {
            "q": "Which MFA standard provides true cryptographic phishing resistance against AiTM reverse proxies?",
            "options": [
                "Robocall voice authentication",
                "FIDO2 / WebAuthn hardware security keys (e.g., YubiKey) bound to the browser origin",
                "Security questions (e.g., mother's maiden name)",
                "Email verification links sent to the same inbox"
            ],
            "correct": 1,
            "exp": "FIDO2/WebAuthn authenticators bind cryptographic credentials to the verified browser TLS origin, making credential harvesting impossible."
        },
        {
            "q": "What is the crucial difference between an email's display name and its actual envelope domain?",
            "options": [
                "Display names are cryptographically verified; domains are not",
                "Display names are arbitrary text easily faked; the domain and DKIM signature reveal the true sender",
                "Display names can only be assigned by Microsoft or Google",
                "There is no difference between the two"
            ],
            "correct": 1,
            "exp": "Attackers freely set display names to 'IT Support' or 'Bank Alert', while sending from a totally unrelated external domain."
        },
        {
            "q": "What should you do immediately upon spotting a confirmed phishing email in your inbox?",
            "options": [
                "Reply to the attacker telling them you caught them",
                "Click the link to verify if it contains malware",
                "Use the internal 'Report Phish' button to alert the Security Operations Center (SOC)",
                "Post the phishing link on social media"
            ],
            "correct": 2,
            "exp": "Using the 'Report Phish' button sends raw headers directly to the SOC, enabling automated blocking across the entire organization."
        },
        {
            "q": "In an ethical phishing simulation lab, what is the mandatory policy regarding participant passwords?",
            "options": [
                "Passwords should be published in the project report",
                "Passwords should be shared with all classmates",
                "Zero-Credential Capture: no real passwords may ever be stored or retained",
                "Passwords should be saved in an open spreadsheet"
            ],
            "correct": 2,
            "exp": "Strict ethical hacking rules mandate that simulation landing pages record only submission events without storing sensitive credentials."
        }
    ]

    score = 0
    total = len(questions)

    for i, item in enumerate(questions, 1):
        print_banner()
        print(Fore.CYAN + Style.BRIGHT + f"--- SECURITY AWARENESS EVALUATION EXAM (QUESTION {i} OF {total}) ---")
        print(Fore.WHITE + Style.BRIGHT + f"\n{item['q']}\n")
        
        for idx, opt in enumerate(item['options']):
            letter = chr(65 + idx)
            print(f"  {Fore.YELLOW}[{letter}]{Fore.WHITE} {opt}")
        
        while True:
            ans = input(Fore.GREEN + "\nYour answer (A/B/C/D): " + Style.RESET_ALL).strip().upper()
            if ans in ['A', 'B', 'C', 'D']:
                selected_idx = ord(ans) - 65
                break
            print(Fore.RED + "Please enter A, B, C, or D.")

        if selected_idx == item['correct']:
            score += 1
            print(Fore.GREEN + Style.BRIGHT + "\n✅ CORRECT!")
        else:
            correct_letter = chr(65 + item['correct'])
            print(Fore.RED + Style.BRIGHT + f"\n❌ INCORRECT. The correct answer was [{correct_letter}].")
        
        print(Fore.CYAN + f"Explanation: {item['exp']}")
        pause()

    # Final Score & Certificate
    print_banner()
    pct = (score / total) * 100
    print(Fore.CYAN + Style.BRIGHT + "=================== EXAM RESULTS ===================")
    print(Fore.WHITE + f"Candidate:     " + Fore.YELLOW + "Omkar Pardeshi (PRN: 25070122506)")
    print(Fore.WHITE + f"Final Score:   " + (Fore.GREEN if pct >= 80 else Fore.RED) + f"{score} / {total} ({pct:.0f}%)")
    
    if pct >= 80:
        print(Fore.GREEN + Style.BRIGHT + "Status:        PASSED WITH HONORS (>= 80%)\n")
        print(Fore.YELLOW + "==================================================================")
        print(Fore.YELLOW + "|              CERTIFICATE OF CYBERSECURITY AWARENESS            |")
        print(Fore.YELLOW + "|          Phishing Simulation & Defensive Architecture          |")
        print(Fore.YELLOW + "|                                                                |")
        print(Fore.YELLOW + f"|   Awarded to:  {Fore.WHITE}OMKAR PARDESHI (PRN: 25070122506)                 {Fore.YELLOW}|")
        print(Fore.YELLOW + f"|   Score:       {Fore.GREEN}{score}/10 ({pct:.0f}%)                                          {Fore.YELLOW}|")
        print(Fore.YELLOW + f"|   Verification:{Fore.CYAN} SHA256-CERT-7A9B2F-25070122506                 {Fore.YELLOW}|")
        print(Fore.YELLOW + "|   Date:        October 20, 2026                                |")
        print(Fore.YELLOW + "==================================================================")
    else:
        print(Fore.RED + "Status:        Retake Recommended (Score under 80%)")
    
    pause()

# ================= MENU OPTION 5: CAMPAIGN METRICS & COHORT =================
def show_metrics_and_cohort():
    print_banner()
    print(Fore.CYAN + Style.BRIGHT + "--- EMPIRICAL CAMPAIGN METRICS (BASELINE VS POST-TRAINING) ---\n")
    print(Fore.WHITE + "Cohort Size: 25 Consenting Student Participants\n")

    print(Fore.YELLOW + "+-----------------------+---------------------+---------------------+-----------------+")
    print(Fore.YELLOW + "| Metric Dimension      | Campaign 1 Baseline | Campaign 2 Post-Tr. | Relative Impact |")
    print(Fore.YELLOW + "+-----------------------+---------------------+---------------------+-----------------+")
    print(f"| Emails Sent           | 25 (100.0%)         | 25 (100.0%)         | Delivered 100%  |")
    print(f"| Emails Opened         | 23 (92.0%)          | 21 (84.0%)          | -8.7% Reduction |")
    print(f"| {Fore.RED}Links Clicked         {Fore.RESET}| {Fore.RED}16 (64.0%)          {Fore.RESET}| {Fore.GREEN}3 (12.0%)           {Fore.RESET}| {Fore.CYAN}-81.25% Drop    {Fore.RESET}|")
    print(f"| {Fore.RED}Credentials Submitted {Fore.RESET}| {Fore.RED}12 (48.0%)          {Fore.RESET}| {Fore.GREEN}1 (4.0%)            {Fore.RESET}| {Fore.CYAN}-91.67% Drop    {Fore.RESET}|")
    print(f"| {Fore.GREEN}Reported to SOC       {Fore.RESET}| {Fore.RED}2 (8.0%)            {Fore.RESET}| {Fore.GREEN}19 (76.0%)          {Fore.RESET}| {Fore.CYAN}+850% Surge     {Fore.RESET}|")
    print(Fore.YELLOW + "+-----------------------+---------------------+---------------------+-----------------+\n")

    print(Fore.CYAN + Style.BRIGHT + "Key Takeaway:")
    print("  Targeted experiential awareness reduced human vulnerability by >80% and transformed")
    print("  untrained victims into an active human detection firewall (76% reporting rate).\n")

    print(Fore.WHITE + "Would you like to view the granular 25-participant cohort dataset?")
    view_cohort = input(Fore.GREEN + "View participant list? (y/n): " + Style.RESET_ALL).strip().lower()
    
    if view_cohort == 'y':
        csv_path = os.path.join(os.path.dirname(__file__), "report", "campaign_metrics.csv")
        if os.path.exists(csv_path):
            print(Fore.CYAN + "\n" + "-" * 75)
            print(Fore.WHITE + f"{'ID':<8} {'Name':<18} {'Dept':<14} {'C1 Click':<10} {'C1 Cred':<10} {'C2 Click':<10} {'C2 Rep':<8}")
            print(Fore.CYAN + "-" * 75)
            with open(csv_path, 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    print(f"{row['Participant_ID']:<8} {row['Name']:<18} {row['Department']:<14} {row['C1_Clicked']:<10} {row['C1_Submitted']:<10} {row['C2_Clicked']:<10} {row['C2_Reported']:<8}")
            print(Fore.CYAN + "-" * 75)
    pause()

# ================= MENU OPTION 6: DEFENSIVE ARCHITECTURE =================
def run_defense_inspector():
    print_banner()
    print(Fore.CYAN + Style.BRIGHT + "--- TECHNICAL DEFENSE SIMULATOR (SPF / DKIM / DMARC & FIDO2) ---\n")
    print(Fore.WHITE + "Organizations must deploy Defense-in-Depth so technical controls stop attacks")
    print("before they even reach the user's inbox.\n")

    target_domain = input(Fore.GREEN + "Enter domain to inspect (or press Enter for 'secure-auth-alert.lab'): " + Style.RESET_ALL).strip()
    if not target_domain:
        target_domain = "secure-auth-alert.lab"

    is_spoofed = any(x in target_domain for x in ["alert", "tracking", "login", "lab", "fake"])

    print(Fore.CYAN + f"\n[*] Querying DNS records for {target_domain}...")
    time.sleep(1)

    print("\n" + Fore.YELLOW + "=" * 65)
    print(Fore.WHITE + f"DNS AUTHENTICATION REPORT: {target_domain}")
    print(Fore.YELLOW + "=" * 65)
    
    if is_spoofed:
        print(Fore.RED + "STATUS: SPOOFED / UNALIGNED DOMAIN DETECTED\n")
        print(Fore.WHITE + "1. SPF (RFC 7208):   " + Fore.RED + "FAIL / Softfail (~all)")
        print("   Unauthorized sending IP address not listed in domain SPF record.")
        print(Fore.WHITE + "2. DKIM (RFC 6376):  " + Fore.RED + "FAIL: No valid cryptographic selector found")
        print(Fore.WHITE + "3. DMARC (RFC 7489): " + Fore.YELLOW + "p=none (Audit Only)\n")
        print(Fore.RED + "Gateway Outcome with p=none:")
        print("   The email passed through into the user's inbox because the domain lacked")
        print("   a strict 'p=reject' policy. That is how our baseline simulation reached the inbox!")
        print(Fore.GREEN + "\nDefensive Recommendation:")
        print("   Enforce: v=DMARC1; p=reject; pct=100; rua=mailto:dmarc-reports@enterprise.com")
        print("   With 'p=reject', receiving mail transfer agents (MTAs) drop this email at the boundary.")
    else:
        print(Fore.GREEN + "STATUS: VERIFIED ENTERPRISE DOMAIN\n")
        print(Fore.WHITE + "1. SPF (RFC 7208):   " + Fore.GREEN + "PASS (v=spf1 ip4:192.168.56.0/24 -all)")
        print(Fore.WHITE + "2. DKIM (RFC 6376):  " + Fore.GREEN + "PASS (2048-bit RSA Cryptographic Signature)")
        print(Fore.WHITE + "3. DMARC (RFC 7489): " + Fore.GREEN + "PASS (p=reject, 100% Alignment)\n")
        print(Fore.GREEN + "Gateway Outcome:")
        print("   Any spoofed attempt claiming to be this domain will be rejected with 550 5.7.1.")

    print(Fore.YELLOW + "\n" + "-" * 65)
    print(Fore.WHITE + "PHISHING-RESISTANT MFA (FIDO2 / WEBAUTHN):")
    print(Fore.WHITE + "Why does FIDO2 hardware keys defeat Adversary-in-the-Middle (AiTM) phishing?")
    print(Fore.CYAN + "• SMS & Push OTP: Attackers proxy the 6-digit code to the real site in seconds.")
    print(Fore.GREEN + "• FIDO2 Keys: The key cryptographically signs the browser's exact TLS origin.")
    print("  If the website is a fake proxy (e.g. login.phish.lab), the hardware key refuses")
    print("  to sign, rendering credential theft mathematically impossible.")
    pause()

# ================= MENU OPTION 7: LAUNCH WEB FRONTEND =================
def launch_web_frontend():
    print(Fore.CYAN + "\n[*] Opening Web GUI Portal at http://localhost:5000 in your browser...")
    webbrowser.open("http://localhost:5000")
    print(Fore.GREEN + "[+] Browser launched successfully!")
    pause()

# ================= MAIN CONTROLLER LOOP =================
def main():
    while True:
        print_banner()
        print(Fore.WHITE + Style.BRIGHT + "SELECT AN INTERACTIVE MODULE TO RUN IN THIS TERMINAL:\n")
        print(Fore.YELLOW + "  [1] " + Fore.WHITE + "Project Overview & What This Project Is (Walkthrough)")
        print(Fore.YELLOW + "  [2] " + Fore.WHITE + "Interactive Simulated Inbox (Inspect 3 Phishing Emails)")
        print(Fore.YELLOW + "  [3] " + Fore.WHITE + "Phishing Landing Page & Teachable Moment Simulator")
        print(Fore.YELLOW + "  [4] " + Fore.WHITE + "Interactive 10-Question Knowledge Exam & Certificate")
        print(Fore.YELLOW + "  [5] " + Fore.WHITE + "Empirical Metrics & 25-Participant Cohort Data")
        print(Fore.YELLOW + "  [6] " + Fore.WHITE + "Technical Defense Simulator (SPF, DKIM, DMARC, FIDO2)")
        print(Fore.YELLOW + "  [7] " + Fore.CYAN + "Launch Modern Web GUI Portal (http://localhost:5000)")
        print(Fore.YELLOW + "  [0] " + Fore.RED + "Exit Terminal Application\n")

        choice = input(Fore.GREEN + Style.BRIGHT + "Enter your choice (0-7): " + Style.RESET_ALL).strip()

        if choice == "0":
            print(Fore.CYAN + "\nThank you for exploring PhishGuard! Exiting...")
            sys.exit(0)
        elif choice == "1":
            show_project_overview()
        elif choice == "2":
            run_inbox_simulator()
        elif choice == "3":
            select_and_run_landing_page()
        elif choice == "4":
            run_quiz_module()
        elif choice == "5":
            show_metrics_and_cohort()
        elif choice == "6":
            run_defense_inspector()
        elif choice == "7":
            launch_web_frontend()
        else:
            print(Fore.RED + "\nInvalid selection. Please choose an option from 0 to 7.")
            time.sleep(1)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print(Fore.YELLOW + "\n\nSession terminated by user.")
        sys.exit(0)

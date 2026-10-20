"""
GoPhish REST API Campaign Automator & Metrics Exporter
Author: Omkar Pardeshi (PRN: 25070122506)
Project: Mini Project 15 - Phishing Simulation and Security Awareness Program
"""

import json
import os
import sys
import urllib.request
import urllib.error
import ssl

GOPHISH_API_KEY = os.environ.get("GOPHISH_API_KEY", "YOUR_GOPHISH_API_KEY_HERE")
GOPHISH_HOST = os.environ.get("GOPHISH_HOST", "https://127.0.0.1:3333")

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE


def gophish_request(endpoint, method="GET", payload=None):
    """Executes authenticated HTTPS request against GoPhish REST API."""
    url = f"{GOPHISH_HOST}/api/{endpoint}"
    headers = {
        "Authorization": f"Bearer {GOPHISH_API_KEY}",
        "Content-Type": "application/json",
    }
    data = json.dumps(payload).encode("utf-8") if payload else None
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=10) as response:
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.URLError as e:
        print(f"[!] GoPhish API Error on {endpoint}: {e}")
        return None


def setup_lab_environment():
    """Initializes GoPhish sending profiles, user cohorts, and templates."""
    print("==================================================")
    print("   GOPHISH LAB AUTOMATION SETUP - OMKAR PARDESHI  ")
    print("==================================================")

    # 1. Sending Profile
    profile_path = os.path.join(os.path.dirname(__file__), "../config/sending_profile_mailhog.json")
    if os.path.exists(profile_path):
        with open(profile_path, "r", encoding="utf-8") as f:
            profile_data = json.load(f)
            res = gophish_request("smtp/", method="POST", payload=profile_data)
            print(f"[+] Sending profile registered: {profile_data['name']}")

    # 2. User Cohort
    users_path = os.path.join(os.path.dirname(__file__), "../config/users_and_groups.json")
    if os.path.exists(users_path):
        with open(users_path, "r", encoding="utf-8") as f:
            group_data = json.load(f)
            res = gophish_request("groups/", method="POST", payload=group_data)
            print(f"[+] User cohort group registered: {group_data['name']} ({len(group_data['targets'])} targets)")

    # 3. Email Template
    template_path = os.path.join(os.path.dirname(__file__), "../email_templates/it_password_expiry.html")
    if os.path.exists(template_path):
        with open(template_path, "r", encoding="utf-8") as f:
            html_content = f.read()
            payload = {
                "name": "Template 01: IT Password Expiry",
                "subject": "Action Required: Immediate IT Domain Password Expiration Notice",
                "html": html_content,
                "text": "Your IT password expires in 4 hours. Authenticate at http://192.168.56.10:8080/ to retain access.",
            }
            res = gophish_request("templates/", method="POST", payload=payload)
            print("[+] IT Password Expiry Template registered successfully.")


def export_campaign_summary(campaign_id):
    """Fetches campaign results and outputs formatted statistics."""
    data = gophish_request(f"campaigns/{campaign_id}")
    if not data:
        print("[!] Could not fetch campaign data.")
        return

    stats = data.get("stats", {})
    total = stats.get("total", 0)
    sent = stats.get("sent", 0)
    opened = stats.get("opened", 0)
    clicked = stats.get("clicked", 0)
    submitted = stats.get("submitted_data", 0)
    reported = stats.get("reported", 0)

    print("\n---------------- CAMPAIGN METRICS ----------------")
    print(f"Campaign: {data.get('name')}")
    print(f"Total Cohort Targets: {total}")
    print(f"Emails Sent:          {sent} (100.0%)")
    print(f"Emails Opened:        {opened} ({(opened/total*100) if total else 0:.1f}%)")
    print(f"Links Clicked:        {clicked} ({(clicked/total*100) if total else 0:.1f}%)")
    print(f"Credentials Submitted: {submitted} ({(submitted/total*100) if total else 0:.1f}%)")
    print(f"Reported as Phish:    {reported} ({(reported/total*100) if total else 0:.1f}%)")
    print("--------------------------------------------------\n")


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "export":
        cid = sys.argv[2] if len(sys.argv) > 2 else "1"
        export_campaign_summary(cid)
    else:
        print("[*] Running GoPhish automated provisioner...")
        setup_lab_environment()

"""
Local Mock SMTP Phishing Mail Dispatcher
Author: Omkar Pardeshi (PRN: 25070122506)
Project: Mini Project 15 - Phishing Simulation and Security Awareness Program
"""

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import sys

SMTP_SERVER = "127.0.0.1"
SMTP_PORT = 1025  # Standard MailHog port


def send_simulation_email(recipient_email, recipient_name, scenario="it_expiry"):
    sender = "IT Security Support <it-support@secure-auth.lab>"
    subject = "[URGENT] Corporate SSO Password Expiration Notice"

    msg = MIMEMultipart("alternative")
    msg["From"] = sender
    msg["To"] = f"{recipient_name} <{recipient_email}>"
    msg["Subject"] = subject
    msg["X-Simulation-Lab"] = "MiniProject15-OmkarPardeshi-PRN25070122506"
    msg["X-Phishing-Sim"] = "True"

    text = f"""
    Dear {recipient_name},
    Your network credentials expire today.
    Please renew them at: http://127.0.0.1:5000/landing/o365?target={recipient_email}
    """

    html = f"""
    <html>
      <body style="font-family: Arial, sans-serif;">
        <div style="background:#004578; color:white; padding:15px;">
          <h2>IT Security Notification</h2>
        </div>
        <div style="padding:20px;">
          <p>Dear {recipient_name},</p>
          <p>Your single sign-on domain password expires in <strong>4 hours</strong>.</p>
          <p><a href="http://127.0.0.1:5000/landing/o365?target={recipient_email}" 
                style="background:#0078d4; color:white; padding:10px 20px; text-decoration:none; border-radius:4px;">
                Keep Current Password
             </a>
          </p>
        </div>
      </body>
    </html>
    """

    msg.attach(MIMEText(text, "plain"))
    msg.attach(MIMEText(html, "html"))

    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.sendmail(sender, recipient_email, msg.as_string())
            print(f"[+] Successfully dispatched simulation email to {recipient_email}")
    except ConnectionRefusedError:
        print(f"[!] SMTP Server connection refused on {SMTP_SERVER}:{SMTP_PORT}. Is MailHog running?")
    except Exception as e:
        print(f"[!] Error sending email: {e}")


if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "aarav.sharma@lab.internal"
    name = sys.argv[2] if len(sys.argv) > 2 else "Aarav Sharma"
    print(f"[*] Dispatching test simulation message to {target}...")
    send_simulation_email(target, name)

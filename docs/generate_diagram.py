from PIL import Image, ImageDraw, ImageFont
import os

width = 1200
height = 700
img = Image.new('RGB', (width, height), color='#0d1117')
draw = ImageDraw.Draw(img)

# Colors
card_bg = '#161b22'
border_col = '#30363d'
accent_blue = '#58a6ff'
accent_green = '#3fb950'
accent_orange = '#d29922'
accent_red = '#f85149'
accent_purple = '#bc8cff'
text_light = '#f0f6fc'
text_muted = '#8b949e'

# Title banner
draw.rectangle([(20, 20), (1180, 75)], fill='#21262d', outline='#388bfd', width=2)
draw.text((40, 32), 'PHISHING SIMULATION & SECURITY AWARENESS LAB ARCHITECTURE', fill=accent_blue)
draw.text((40, 52), 'Isolated Host-Only Testbed (192.168.56.0/24)', fill=text_muted)
draw.text((820, 40), 'Student: Omkar Pardeshi (PRN: 25070122506)', fill='#58a6ff')

# Outer Lab Boundary
draw.rectangle([(30, 95), (1170, 675)], outline='#30363d', width=2)

# Box 1: GoPhish Admin & API (Controller)
draw.rectangle([(60, 130), (380, 340)], fill=card_bg, outline=accent_blue, width=2)
draw.text((80, 145), 'SRV-SIM-01: GoPhish Controller', fill=accent_blue)
draw.text((80, 175), 'IP: 192.168.56.10', fill=text_light)
draw.text((80, 205), '- Admin Dashboard (Port :3333)', fill=text_muted)
draw.text((80, 230), '- REST API Automation Engine', fill=text_muted)
draw.text((80, 255), '- Campaign Scheduler & Tracking DB', fill=text_muted)
draw.text((80, 280), '- Cohort Groups: 25 Participant Profiles', fill=text_muted)
draw.text((80, 305), '- Dynamic Token Generator (?rid=token)', fill=text_muted)

# Box 2: Mail Infrastructure (MailHog)
draw.rectangle([(440, 130), (760, 340)], fill=card_bg, outline=accent_orange, width=2)
draw.text((460, 145), 'SRV-MAIL-01: MailHog SMTP', fill=accent_orange)
draw.text((460, 175), 'IP: 192.168.56.20', fill=text_light)
draw.text((460, 205), '- Inbound SMTP Service (Port :1025)', fill=text_muted)
draw.text((460, 230), '- Web Mailbox Inspector (Port :8025)', fill=text_muted)
draw.text((460, 255), '- Isolated Storage (No WAN Relay)', fill=text_muted)
draw.text((460, 280), '- Packet Header X-Simulation-Tagging', fill=text_muted)
draw.text((460, 305), '- Zero External Leakage Guard', fill=accent_green)

# Box 3: Phishing Listener & Web Server
draw.rectangle([(820, 130), (1140, 340)], fill=card_bg, outline=accent_red, width=2)
draw.text((840, 145), 'SRV-WEB-01: Phishing Listener', fill=accent_red)
draw.text((840, 175), 'IP: 192.168.56.10 (Port :8080)', fill=text_light)
draw.text((840, 205), '- Realistic M365 Login Harvester', fill=text_muted)
draw.text((840, 230), '- Courier Delivery Tracking Page', fill=text_muted)
draw.text((840, 255), '- QR-Code Quishing Target Endpoint', fill=text_muted)
draw.text((840, 280), '- POST Intercept: Zero-Creds Stored', fill=accent_green)
draw.text((840, 305), '- Immediate Teachable Moment Redirect', fill=accent_green)

# Box 4: Participant Workstations (Victim Cohort)
draw.rectangle([(60, 420), (560, 650)], fill=card_bg, outline=accent_purple, width=2)
draw.text((80, 435), 'CLI-WS-[01-25]: Volunteer Participants', fill=accent_purple)
draw.text((80, 465), 'Subnet: 192.168.56.101 - 192.168.56.125', fill=text_light)
draw.text((80, 495), '- Web Browser & Mock Webmail Client', fill=text_muted)
draw.text((80, 520), '- Scenario A: IT Urgent Password Expiry', fill=text_muted)
draw.text((80, 545), '- Scenario B: Courier Delivery Exception', fill=text_muted)
draw.text((80, 570), '- Extension: HR Benefits QR Quishing Scan', fill=text_muted)
draw.text((80, 595), '- Client-Side [Report Phish] Button', fill=accent_green)
draw.text((80, 620), '- Ethical Written Consent & Anonymized ID', fill=text_light)

# Box 5: Security Awareness Training & LMS Portal
draw.rectangle([(620, 420), (1140, 650)], fill=card_bg, outline=accent_green, width=2)
draw.text((640, 435), 'SRV-LMS-01: Security Awareness Portal', fill=accent_green)
draw.text((640, 465), 'IP: 192.168.56.10 (Port :5000)', fill=text_light)
draw.text((640, 495), '- Interactive Red-Flag Spotter Module', fill=text_muted)
draw.text((640, 520), '- SPF / DKIM / DMARC Technical Deep-Dive & Validator', fill=text_muted)
draw.text((640, 545), '- 10-Question Knowledge Check Quiz with Scoring', fill=text_muted)
draw.text((640, 570), '- Automated Certificate of Completion Generator', fill=text_muted)
draw.text((640, 595), '- Baseline vs Post-Training Comparative Analytics', fill=accent_blue)
draw.text((640, 620), '- Measurable Vulnerability Reduction Tracking', fill=accent_green)

# Connection lines
# 1. Controller to MailHog
draw.line([(380, 235), (440, 235)], fill=accent_blue, width=3)
draw.polygon([(440, 235), (430, 230), (430, 240)], fill=accent_blue)
draw.text((388, 215), 'SMTP :1025', fill=accent_blue)

# 2. MailHog to Clients
draw.line([(550, 340), (450, 420)], fill=accent_orange, width=3)
draw.polygon([(450, 420), (455, 408), (465, 415)], fill=accent_orange)
draw.text((515, 375), 'Delivery', fill=accent_orange)

# 3. Clients to Phish Listener
draw.line([(560, 460), (820, 300)], fill=accent_red, width=3)
draw.polygon([(820, 300), (808, 303), (814, 312)], fill=accent_red)
draw.text((670, 360), 'Link Click / QR Scan', fill=accent_red)

# 4. Listener to LMS
draw.line([(980, 340), (980, 420)], fill=accent_green, width=3)
draw.polygon([(980, 420), (975, 410), (985, 410)], fill=accent_green)
draw.text((990, 375), 'Teachable Redirect', fill=accent_green)

os.makedirs('docs', exist_ok=True)
os.makedirs('app/assets', exist_ok=True)
img.save('docs/lab_architecture_diagram.png')
img.save('app/assets/lab_architecture_diagram.png')
print('Diagram successfully generated at docs/lab_architecture_diagram.png and app/assets/lab_architecture_diagram.png')

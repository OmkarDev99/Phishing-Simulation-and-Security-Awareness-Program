"""
PhishGuard Interactive Lab Server
Student Author: Omkar Pardeshi (PRN: 25070122506)
Project: Mini Project 15 - Phishing Simulation & Security Awareness Program
"""

import http.server
import socketserver
import os
import sys
import webbrowser
import json
import urllib.parse
from datetime import datetime

PORT = 5000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class PhishGuardHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Strip query parameters
        clean_path = path.split('?', 1)[0].split('#', 1)[0]
        
        if clean_path in ["", "/", "/index.html"]:
            return os.path.join(BASE_DIR, "app", "index.html")
        
        # Check if requesting app files
        app_file = os.path.join(BASE_DIR, "app", clean_path.lstrip("/"))
        if os.path.exists(app_file):
            return app_file

        # Check if requesting docs or report files
        root_file = os.path.join(BASE_DIR, clean_path.lstrip("/"))
        if os.path.exists(root_file):
            return root_file

        return super().translate_path(path)

    def do_GET(self):
        clean_path = self.path.split('?', 1)[0].split('#', 1)[0]
        if clean_path == "/api/captured-credentials":
            audit_file = os.path.join(BASE_DIR, "report", "simulation_audit_log.json")
            logs = []
            if os.path.exists(audit_file):
                try:
                    with open(audit_file, "r", encoding="utf-8") as f:
                        logs = json.load(f)
                except Exception:
                    pass
            response_bytes = json.dumps(logs).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(response_bytes)))
            self.end_headers()
            self.wfile.write(response_bytes)
            return

        super().do_GET()

    def do_POST(self):
        length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(length).decode('utf-8') if length > 0 else ""
        
        captured_portal = "Web Phishing Portal"
        captured_email = "student@lab.internal"
        captured_pwd = "[Not Provided]"

        content_type = self.headers.get('Content-Type', '')
        if 'application/json' in content_type:
            try:
                data = json.loads(post_data)
                captured_portal = data.get('portal', captured_portal)
                captured_email = data.get('username', data.get('email', captured_email))
                captured_pwd = data.get('password', captured_pwd)
            except Exception:
                pass
        else:
            parsed = urllib.parse.parse_qs(post_data)
            captured_portal = parsed.get('portal', [captured_portal])[0]
            captured_email = parsed.get('username', parsed.get('email', [captured_email]))[0]
            captured_pwd = parsed.get('password', [captured_pwd])[0]

        audit_file = os.path.join(BASE_DIR, "report", "simulation_audit_log.json")
        demo_log_file = os.path.join(BASE_DIR, "report", "captured_credentials_demo.log")
        timestamp_now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        audit_entry = {
            "timestamp": timestamp_now,
            "event": "CREDENTIAL_SUBMISSION_INTERCEPT",
            "target_email": captured_email,
            "submitted_password_demo": captured_pwd,
            "scenario_portal": captured_portal,
            "ip_address": self.client_address[0],
            "action_taken": "Logged for Demonstration & Redirected to Teachable Moment LMS"
        }

        try:
            logs = []
            if os.path.exists(audit_file):
                with open(audit_file, "r", encoding="utf-8") as f:
                    logs = json.load(f)
            logs.append(audit_entry)
            with open(audit_file, "w", encoding="utf-8") as f:
                json.dump(logs, f, indent=2)
            
            with open(demo_log_file, "a", encoding="utf-8") as f:
                f.write("=" * 75 + "\n")
                f.write(f"TIMESTAMP        : {timestamp_now}\n")
                f.write(f"PORTAL / SCENARIO: {captured_portal}\n")
                f.write(f"SUBMITTED EMAIL  : {captured_email}\n")
                f.write(f"SUBMITTED PASS   : {captured_pwd}\n")
                f.write(f"CLIENT IP        : {self.client_address[0]}\n")
                f.write(f"SIMULATION STATUS: Captured by Lab Listener -> Redirected to Teachable Moment\n")
                f.write("=" * 75 + "\n\n")

            print(f"[+] [ATTACKER HARVESTER] Intercepted {captured_email} ({captured_portal}) -> saved to report/captured_credentials_demo.log")
        except Exception as e:
            print(f"[!] Error writing audit log: {e}")

        # If API request, respond with JSON
        if self.path.startswith('/api/'):
            resp = json.dumps({"status": "captured", "entry": audit_entry}).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(resp)))
            self.end_headers()
            self.wfile.write(resp)
            return

        # Fallback redirect to educational page
        self.send_response(303)
        self.send_header('Location', '/index.html#landing')
        self.end_headers()

    def end_headers(self):
        # Add CORS and security simulation headers
        self.send_header('X-Simulation-Lab', 'MiniProject15-OmkarPardeshi-PRN25070122506')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

def run_server():
    os.chdir(BASE_DIR)
    handler = PhishGuardHandler
    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("", PORT), handler) as httpd:
            print("=================================================================")
            print(f"  PHISHGUARD LAB & SECURITY AWARENESS PORTAL RUNNING")
            print(f"  Student: Omkar Pardeshi (PRN: 25070122506)")
            print(f"  URL:     http://localhost:{PORT}")
            print("=================================================================")
            print("Press Ctrl+C to terminate the server.\n")
            httpd.serve_forever()
    except OSError as e:
        print(f"[!] Port {PORT} busy or error: {e}")
        alt_port = 5050
        with socketserver.TCPServer(("", alt_port), handler) as httpd:
            print(f"[*] Started on alternate port: http://localhost:{alt_port}")
            httpd.serve_forever()

if __name__ == "__main__":
    run_server()

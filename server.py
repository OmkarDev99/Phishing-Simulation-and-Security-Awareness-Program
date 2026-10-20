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

    def do_POST(self):
        # Handle simulated credential submit
        length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(length).decode('utf-8')
        print(f"[ETHICAL LAB INTERCEPT] POST received at {self.path}. Zero credentials stored.")
        
        # Parse email if present
        import urllib.parse
        import json
        from datetime import datetime
        
        parsed = urllib.parse.parse_qs(post_data)
        captured_email = parsed.get('username', parsed.get('email', ['volunteer@lab.internal']))[0]
        captured_pwd = parsed.get('password', ['[Not Provided]'])[0]
        
        audit_file = os.path.join(BASE_DIR, "report", "simulation_audit_log.json")
        demo_log_file = os.path.join(BASE_DIR, "report", "captured_credentials_demo.log")
        timestamp_now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        try:
            logs = []
            if os.path.exists(audit_file):
                with open(audit_file, "r", encoding="utf-8") as f:
                    logs = json.load(f)
            logs.append({
                "timestamp": timestamp_now,
                "event": "CREDENTIAL_SUBMISSION_INTERCEPT",
                "target_email": captured_email,
                "submitted_password_demo": captured_pwd,
                "scenario_portal": "Web Landing Page (" + self.path + ")",
                "ip_address": self.client_address[0],
                "action_taken": "Logged for Demonstration & Redirected to Teachable Moment LMS"
            })
            with open(audit_file, "w", encoding="utf-8") as f:
                json.dump(logs, f, indent=2)
            
            with open(demo_log_file, "a", encoding="utf-8") as f:
                f.write("=" * 75 + "\n")
                f.write(f"TIMESTAMP        : {timestamp_now}\n")
                f.write(f"PORTAL / SCENARIO: Web Landing Page ({self.path})\n")
                f.write(f"SUBMITTED EMAIL  : {captured_email}\n")
                f.write(f"SUBMITTED PASS   : {captured_pwd}\n")
                f.write(f"CLIENT IP        : {self.client_address[0]}\n")
                f.write(f"SIMULATION STATUS: Captured by Lab Listener -> Redirected to Teachable Moment\n")
                f.write("=" * 75 + "\n\n")

            print(f"[+] Logged simulation capture for {captured_email} into report/captured_credentials_demo.log")
        except Exception as e:
            print(f"[!] Error writing audit log: {e}")

        # Redirect to educational page or return success JSON
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

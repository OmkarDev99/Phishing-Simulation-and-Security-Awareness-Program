/**
 * Simulated Phishing Landing Pages & Teachable Moment Controller
 * Author: Omkar Pardeshi (PRN: 25070122506)
 * Project: Mini Project 15 - Phishing Simulation & Security Awareness
 */

const LandingPages = {
    currentPage: "o365",

    pages: {
        "o365": {
            title: "Microsoft 365 Domain SSO Authentication Clone",
            type: "Credential Harvester Simulation",
            render() {
                return `
                    <div style="background:#ffffff; color:#1b1b1b; max-width:440px; margin:20px auto; padding:44px; box-shadow:0 10px 30px rgba(0,0,0,0.3); border-radius:4px; font-family:'Segoe UI', sans-serif;">
                        <div style="display:flex; align-items:center; gap:10px; margin-bottom:20px;">
                            <div style="display:grid; grid-template-columns:10px 10px; grid-gap:2px;">
                                <div style="width:10px; height:10px; background:#f25022;"></div>
                                <div style="width:10px; height:10px; background:#7fba00;"></div>
                                <div style="width:10px; height:10px; background:#00a4ef;"></div>
                                <div style="width:10px; height:10px; background:#ffb900;"></div>
                            </div>
                            <span style="font-size:18px; font-weight:600; color:#737373;">Microsoft</span>
                        </div>
                        <h2 style="font-size:24px; font-weight:600; margin-bottom:8px; color:#1b1b1b;">Sign in</h2>
                        <p style="font-size:13px; color:#555; margin-bottom:24px;">to retain domain SSO credentials & verify identity</p>

                        <form onsubmit="LandingPages.handleSubmission(event, 'Microsoft 365 Single Sign-On')">
                            <div style="margin-bottom:18px;">
                                <input type="email" id="m365_email" value="aarav.sharma@lab.internal" required 
                                       style="width:100%; padding:10px 0; border:none; border-bottom:1px solid #666; font-size:15px; outline:none;" placeholder="Email, phone, or Skype">
                            </div>
                            <div style="margin-bottom:18px;">
                                <input type="password" id="m365_pwd" placeholder="Enter network password" required
                                       style="width:100%; padding:10px 0; border:none; border-bottom:1px solid #666; font-size:15px; outline:none;">
                            </div>
                            <div style="display:flex; justify-content:space-between; font-size:13px; margin:16px 0;">
                                <a href="#" style="color:#0067b8; text-decoration:none;">Can't access account?</a>
                                <a href="#" style="color:#0067b8; text-decoration:none;">Sign-in options</a>
                            </div>
                            <div style="text-align:right; margin-top:28px;">
                                <button type="submit" class="btn btn-primary" style="padding:10px 32px; border-radius:2px; font-size:15px;">
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                `;
            }
        },

        "courier": {
            title: "Global Express Delivery Dispatch & Address Verification",
            type: "Personal Identity Harvester Simulation",
            render() {
                return `
                    <div style="background:#ffffff; color:#2d3748; max-width:500px; margin:20px auto; border-radius:8px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.3); font-family:Arial, sans-serif;">
                        <div style="background:#4b125f; color:white; padding:18px 24px; display:flex; justify-content:space-between; align-items:center;">
                            <h3 style="margin:0; font-size:18px;">Global Express Dispatch</h3>
                            <span style="background:#ff6200; font-size:11px; font-weight:bold; padding:4px 8px; border-radius:4px;">VERIFICATION PORTAL</span>
                        </div>
                        <div style="padding:28px;">
                            <div style="background:#fff7ed; border-left:4px solid #ff6200; padding:10px 14px; margin-bottom:20px; font-size:13px; color:#9a3412;">
                                <strong>Package On Hold:</strong> Shipment <strong>#FX-98214-DEL</strong> requires delivery address coordinates and account verification.
                            </div>
                            <form onsubmit="LandingPages.handleSubmission(event, 'Courier Express Tracking')">
                                <div style="margin-bottom:14px;">
                                    <label style="display:block; font-size:12px; font-weight:bold; color:#4a5568; margin-bottom:4px;">Full Name</label>
                                    <input type="text" value="Aarav Sharma" required style="width:100%; padding:9px; border:1px solid #cbd5e1; border-radius:4px; font-size:13px;">
                                </div>
                                <div style="margin-bottom:14px;">
                                    <label style="display:block; font-size:12px; font-weight:bold; color:#4a5568; margin-bottom:4px;">Delivery Address</label>
                                    <input type="text" placeholder="Apartment, Street, Landmark" required style="width:100%; padding:9px; border:1px solid #cbd5e1; border-radius:4px; font-size:13px;">
                                </div>
                                <div style="margin-bottom:18px;">
                                    <label style="display:block; font-size:12px; font-weight:bold; color:#4a5568; margin-bottom:4px;">Verification PIN / Account Password</label>
                                    <input type="password" placeholder="Enter delivery authorization code" required style="width:100%; padding:9px; border:1px solid #cbd5e1; border-radius:4px; font-size:13px;">
                                </div>
                                <button type="submit" class="btn" style="width:100%; background:#ff6200; color:white; padding:12px; font-weight:bold; border-radius:4px;">
                                    Confirm Address & Release Shipment
                                </button>
                            </form>
                        </div>
                    </div>
                `;
            }
        },

        "quishing": {
            title: "HR Benefits Mobile Quick-Scan Portal (Quishing Target)",
            type: "Mobile Origin QR Intercept Simulation",
            render() {
                return `
                    <div style="background:#ffffff; color:#0f172a; max-width:480px; margin:20px auto; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.3); font-family:-apple-system, sans-serif;">
                        <div style="background:linear-gradient(135deg, #1e3a8a, #3b82f6); color:white; padding:22px; text-align:center;">
                            <div style="font-size:28px; margin-bottom:6px;">📱</div>
                            <h3 style="margin:0; font-size:19px;">Corporate Mobile Quick-Scan</h3>
                            <p style="margin:4px 0 0; font-size:12px; opacity:0.9;">Annual Employee Benefits & Healthcare Election</p>
                        </div>
                        <div style="padding:28px;">
                            <div style="background:#f1f5f9; padding:12px; border-radius:6px; font-size:12px; color:#475569; margin-bottom:18px; text-align:center;">
                                <strong>Mobile Device Authenticated:</strong> Target Token <code>#QUISH-TOKEN-7721-EMP</code>
                            </div>
                            <form onsubmit="LandingPages.handleSubmission(event, 'HR Quishing Mobile Portal')">
                                <div style="margin-bottom:14px;">
                                    <label style="display:block; font-size:12px; font-weight:bold; color:#475569; margin-bottom:4px;">Corporate Email / Employee ID</label>
                                    <input type="text" value="employee@lab.internal" required style="width:100%; padding:9px; border:1px solid #cbd5e1; border-radius:6px; font-size:13px;">
                                </div>
                                <div style="margin-bottom:18px;">
                                    <label style="display:block; font-size:12px; font-weight:bold; color:#475569; margin-bottom:4px;">Domain Password</label>
                                    <input type="password" placeholder="Confirm domain password" required style="width:100%; padding:9px; border:1px solid #cbd5e1; border-radius:6px; font-size:13px;">
                                </div>
                                <button type="submit" class="btn btn-primary" style="width:100%; padding:12px; border-radius:6px; font-weight:bold;">
                                    Verify & Complete Annual Election
                                </button>
                            </form>
                        </div>
                    </div>
                `;
            }
        },

        "erp": {
            title: "University Student ERP & Academic Examination Portal",
            type: "Academic Identity Harvester Simulation",
            render() {
                return `
                    <div style="background:#ffffff; color:#1e293b; max-width:460px; margin:20px auto; border-radius:8px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.3); font-family:Arial, sans-serif;">
                        <div style="background:#0f172a; color:#f8fafc; padding:20px; border-bottom:3px solid #06b6d4;">
                            <div style="font-size:12px; color:#38bdf8; font-weight:bold; letter-spacing:0.5px;">DEPARTMENT OF EXAMINATION</div>
                            <h3 style="margin:4px 0 0; font-size:18px;">University Student Portal</h3>
                        </div>
                        <div style="padding:28px;">
                            <div style="background:#f0fdf4; border-left:4px solid #16a34a; padding:10px 12px; margin-bottom:18px; font-size:12px; color:#15803d;">
                                <strong>Exam Notice:</strong> Verify credentials to access Semester 5 Hall Ticket & Grades.
                            </div>
                            <form onsubmit="LandingPages.handleSubmission(event, 'University Student Portal / ERP')">
                                <div style="margin-bottom:14px;">
                                    <label style="display:block; font-size:12px; font-weight:bold; color:#475569; margin-bottom:4px;">PRN / Student Registration Number</label>
                                    <input type="text" value="25070122506" required style="width:100%; padding:9px; border:1px solid #cbd5e1; border-radius:4px; font-size:13px;">
                                </div>
                                <div style="margin-bottom:18px;">
                                    <label style="display:block; font-size:12px; font-weight:bold; color:#475569; margin-bottom:4px;">Portal Password</label>
                                    <input type="password" placeholder="Enter student portal password" required style="width:100%; padding:9px; border:1px solid #cbd5e1; border-radius:4px; font-size:13px;">
                                </div>
                                <button type="submit" class="btn btn-primary" style="width:100%; padding:11px; font-weight:bold; border-radius:4px;">
                                    Log In & View Hall Ticket
                                </button>
                            </form>
                        </div>
                    </div>
                `;
            }
        },

        "drive": {
            title: "Cloud Drive Secure Document Viewer",
            type: "Cloud Collaboration Harvester Simulation",
            render() {
                return `
                    <div style="background:#ffffff; color:#202124; max-width:440px; margin:20px auto; border-radius:8px; padding:32px; box-shadow:0 10px 30px rgba(0,0,0,0.3); font-family:-apple-system, sans-serif; text-align:center;">
                        <div style="font-size:32px; margin-bottom:8px;">📁</div>
                        <h3 style="margin:0 0 4px; font-size:20px; font-weight:600;">Confidential Document Shared</h3>
                        <p style="font-size:13px; color:#5f6368; margin-bottom:20px;">Sign in with your organization account to view "Q4_Internal_Financial_Report.pdf"</p>
                        
                        <form onsubmit="LandingPages.handleSubmission(event, 'Cloud Drive Document Share')" style="text-align:left;">
                            <div style="margin-bottom:14px;">
                                <label style="display:block; font-size:12px; font-weight:bold; color:#5f6368; margin-bottom:4px;">Corporate Email</label>
                                <input type="email" value="omkar.pardeshi@lab.internal" required style="width:100%; padding:10px; border:1px solid #dadce0; border-radius:4px; font-size:14px;">
                            </div>
                            <div style="margin-bottom:20px;">
                                <label style="display:block; font-size:12px; font-weight:bold; color:#5f6368; margin-bottom:4px;">Password</label>
                                <input type="password" placeholder="Enter account password" required style="width:100%; padding:10px; border:1px solid #dadce0; border-radius:4px; font-size:14px;">
                            </div>
                            <button type="submit" class="btn" style="width:100%; background:#1a73e8; color:white; padding:11px; font-weight:bold; border-radius:4px;">
                                Authenticate & Open Document
                            </button>
                        </form>
                    </div>
                `;
            }
        }
    },

    init() {
        this.switchPage("o365");
    },

    switchPage(pageId) {
        this.currentPage = pageId;
        const page = this.pages[pageId];
        const container = document.getElementById("landingPageSandboxContainer");
        const titleEl = document.getElementById("landingPageTitle");
        const typeEl = document.getElementById("landingPageType");

        if (titleEl) titleEl.textContent = page.title;
        if (typeEl) typeEl.textContent = page.type;
        if (container) container.innerHTML = page.render();

        // Update active tab buttons if present
        document.querySelectorAll(".landing-toggle-btn").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.page === pageId);
        });
    },

    handleSubmission(e, portalName) {
        e.preventDefault();
        SimulationEngine.recordAction("DATA_SUBMITTED", `Target: ${portalName} (Dummy Password Intercepted)`);
        
        // Open Teachable Moment Modal
        const modal = document.getElementById("teachableMomentModal");
        if (modal) {
            document.getElementById("teachablePortalName").textContent = portalName;
            modal.classList.add("active");
        }
    }
};

window.LandingPages = LandingPages;

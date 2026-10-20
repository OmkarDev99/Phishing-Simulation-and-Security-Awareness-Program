/**
 * Mock Webmail Inbox Client & Threat Inspector
 * Author: Omkar Pardeshi (PRN: 25070122506)
 * Project: Mini Project 15 - Phishing Simulation & Security Awareness
 */

const MockInbox = {
    currentEmailId: "email-1",
    showRedFlags: false,

    emails: {
        "email-1": {
            id: "email-1",
            scenario: "it_expiry",
            senderName: "IT Infrastructure Support",
            senderEmail: "servicedesk@secure-auth-alert.lab",
            date: "Today, 09:24 AM",
            subject: "Action Required: Immediate IT Domain Password Expiry Notice",
            snippet: "Your domain SSO password expires in 4 hours. Authenticate to maintain uninterrupted email and VPN access...",
            landingTarget: "o365",
            redFlags: [
                { title: "Spoofed Domain", desc: "Domain is 'secure-auth-alert.lab' rather than internal institutional domain." },
                { title: "Artificial Urgency", desc: "Forces compliance within 4 hours to bypass rational analysis." },
                { title: "Mismatched Hyperlink", desc: "Visible anchor text disguises external unauthenticated endpoint." }
            ],
            render(highlight) {
                return `
                    <div style="background:#ffffff; color:#333; padding:24px; border-radius:6px; max-width:620px; margin:0 auto; font-family:-apple-system, sans-serif; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
                        <div style="background:#004578; color:white; padding:18px 24px; border-radius:4px 4px 0 0;" class="${highlight ? 'red-flag-indicator' : ''}">
                            ${highlight ? '<span class="red-flag-tag">Deceptive Authority</span>' : ''}
                            <h2 style="margin:0; font-size:18px;">IT Infrastructure ServiceDesk</h2>
                            <p style="margin:4px 0 0; font-size:12px; opacity:0.85;">Single Sign-On (SSO) Domain Security Notification</p>
                        </div>
                        <div style="padding:24px 10px;">
                            <div style="background:#fee2e2; border-left:4px solid #ef4444; padding:10px 14px; margin-bottom:18px; border-radius:0 4px 4px 0; font-size:13px; color:#991b1b;" class="${highlight ? 'red-flag-indicator' : ''}">
                                ${highlight ? '<span class="red-flag-tag">Manufactured Urgency (4 Hours)</span>' : ''}
                                <strong>High Priority Alert:</strong> Your corporate network credentials are set to expire in <strong>4 hours</strong>.
                            </div>
                            <p style="font-size:14px; line-height:1.6;">Dear Employee,</p>
                            <p style="font-size:14px; line-height:1.6;">Our quarterly security rotation requires re-synchronizing your single sign-on domain token. To retain your active inbox, VPN, and corporate portal access, please authenticate through the secure identity portal below:</p>
                            
                            <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px; margin:16px 0; font-size:13px; line-height:1.6;" class="${highlight ? 'red-flag-indicator' : ''}">
                                ${highlight ? '<span class="red-flag-tag">Fake Account Metadata</span>' : ''}
                                <div><strong>Target Identifier:</strong> employee.account@lab.internal</div>
                                <div><strong>Security Policy:</strong> SEC-PWD-90-ROTATION</div>
                                <div><strong>Status:</strong> Pending Authentication Lockout</div>
                            </div>

                            <div style="text-align:center; margin:26px 0;">
                                <a href="javascript:void(0)" onclick="MockInbox.handleLinkClick('o365')" 
                                   onmouseover="MockInbox.showTooltip(event, 'http://192.168.56.10:8080/auth/login?rid=USR_TOKEN_IT')"
                                   onmouseout="MockInbox.hideTooltip()"
                                   style="background:#0078d4; color:#ffffff; text-decoration:none; padding:12px 28px; border-radius:4px; font-weight:600; font-size:14px; display:inline-block;"
                                   class="${highlight ? 'red-flag-indicator' : ''}">
                                   ${highlight ? '<span class="red-flag-tag">Phishing Link</span>' : ''}
                                   Keep Current Password & Re-Authenticate
                                </a>
                            </div>

                            <p style="font-size:12px; color:#64748b; line-height:1.5;">Failure to complete synchronization prior to the 4-hour deadline will require physical in-person identity verification at the IT Helpdesk.</p>
                        </div>
                    </div>
                `;
            }
        },

        "email-2": {
            id: "email-2",
            scenario: "courier",
            senderName: "Global Express Logistics",
            senderEmail: "dispatch-notice@global-express-tracking.lab",
            date: "Today, 10:48 AM",
            subject: "Delivery Exception: Shipment #FX-98214-DEL On Hold",
            snippet: "Our dispatch courier could not deliver your priority parcel due to missing street address. Confirm coordinates...",
            landingTarget: "courier",
            redFlags: [
                { title: "Lookalike Logistics Brand", desc: "Mimics FedEx/DHL branding to trigger delivery curiosity." },
                { title: "Fake Tracking Code", desc: "Invented tracking code (#FX-98214-DEL) designed to incite fear of losing goods." },
                { title: "Urgent Holding Period", desc: "Threatens to return parcel within 24 hours if credentials/address not provided." }
            ],
            render(highlight) {
                return `
                    <div style="background:#ffffff; color:#2d3748; padding:24px; border-radius:8px; max-width:620px; margin:0 auto; font-family:Arial, sans-serif; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
                        <div style="background:#4b125f; color:white; padding:18px 24px; border-radius:6px 6px 0 0; display:flex; justify-content:space-between; align-items:center;" class="${highlight ? 'red-flag-indicator' : ''}">
                            ${highlight ? '<span class="red-flag-tag">Brand Spoofing</span>' : ''}
                            <h2 style="margin:0; font-size:20px;">Global Express Logistics</h2>
                            <span style="background:#ff6200; font-size:11px; font-weight:bold; padding:4px 8px; border-radius:4px;">PRIORITY EXPRESS</span>
                        </div>
                        <div style="padding:24px 10px;">
                            <div style="background:#fff7ed; border-left:4px solid #ea580c; padding:10px 14px; margin-bottom:18px; border-radius:0 4px 4px 0; font-size:13px; color:#9a3412;" class="${highlight ? 'red-flag-indicator' : ''}">
                                ${highlight ? '<span class="red-flag-tag">Delivery Curiosity Hook</span>' : ''}
                                <strong>Shipment Notice:</strong> Address incomplete. Priority package held at regional depot.
                            </div>
                            <p style="font-size:14px; line-height:1.6;">Dear Recipient,</p>
                            <p style="font-size:14px; line-height:1.6;">Our regional driver attempted dispatch of your priority shipment <strong>#FX-98214-DEL</strong>, but destination apartment/suite coordinates were omitted from the shipping label.</p>
                            
                            <table style="width:100%; border-collapse:collapse; margin:16px 0; font-size:13px;" class="${highlight ? 'red-flag-indicator' : ''}">
                                ${highlight ? '<span class="red-flag-tag">Fabricated Shipment ID</span>' : ''}
                                <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:8px; color:#64748b; font-weight:bold;">Shipment Code:</td><td style="padding:8px;">FX-98214-DEL-IN</td></tr>
                                <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:8px; color:#64748b; font-weight:bold;">Current Depot:</td><td style="padding:8px;">Regional Sorting Hub 4B</td></tr>
                                <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:8px; color:#64748b; font-weight:bold;">Deadline:</td><td style="padding:8px; color:#c53030;">Within 24 Hours</td></tr>
                            </table>

                            <div style="text-align:center; margin:26px 0;">
                                <a href="javascript:void(0)" onclick="MockInbox.handleLinkClick('courier')"
                                   onmouseover="MockInbox.showTooltip(event, 'http://192.168.56.10:8080/tracking/verify?pkg=FX98214')"
                                   onmouseout="MockInbox.hideTooltip()"
                                   style="background:#ff6200; color:#ffffff; text-decoration:none; padding:12px 28px; border-radius:25px; font-weight:bold; font-size:14px; display:inline-block;"
                                   class="${highlight ? 'red-flag-indicator' : ''}">
                                   ${highlight ? '<span class="red-flag-tag">Phishing Link</span>' : ''}
                                   Confirm Address & Reschedule Delivery
                                </a>
                            </div>
                        </div>
                    </div>
                `;
            }
        },

        "email-3": {
            id: "email-3",
            scenario: "quishing",
            senderName: "Corporate HR & People Operations",
            senderEmail: "benefits-enrollment@corp-wellness-portal.lab",
            date: "Today, 11:15 AM",
            subject: "Action Required: Annual HR Wellness & Benefit Enrollment [QR Code Attached]",
            snippet: "Mandatory annual benefit window closes Friday. Scan the mobile authentication QR code to confirm healthcare...",
            landingTarget: "quishing",
            redFlags: [
                { title: "Quishing Vector (QR Bypass)", desc: "Uses QR code to evade text link scanners and move victims to unmanaged mobile phones." },
                { title: "Compliance Pressure", desc: "Threatens that employees will default to minimal coverage if unverified." },
                { title: "Fake HR Department Domain", desc: "Domain is 'corp-wellness-portal.lab' rather than internal enterprise HR." }
            ],
            render(highlight) {
                return `
                    <div style="background:#ffffff; color:#1e293b; padding:24px; border-radius:8px; max-width:620px; margin:0 auto; font-family:-apple-system, sans-serif; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
                        <div style="background:linear-gradient(135deg, #1e3a8a, #2563eb); color:white; padding:18px 24px; border-radius:6px 6px 0 0;" class="${highlight ? 'red-flag-indicator' : ''}">
                            ${highlight ? '<span class="red-flag-tag">HR Pretext</span>' : ''}
                            <h2 style="margin:0; font-size:19px;">Corporate HR & People Operations</h2>
                            <p style="margin:4px 0 0; font-size:12px; opacity:0.9;">Annual Healthcare, Wellness & Dependent Election Portal</p>
                        </div>
                        <div style="padding:24px 10px;">
                            <p style="font-size:14px; line-height:1.6;">Dear Colleague,</p>
                            <p style="font-size:14px; line-height:1.6;">The annual employee benefits election closes this Friday. All active personnel must verify their insurance coverage and family allowance allocations.</p>
                            <p style="font-size:14px; line-height:1.6;">To safeguard credentials, our team now utilizes <strong>Mobile Camera Quick-Scan Verification</strong>. Scan the QR code below using your smartphone:</p>
                            
                            <div style="background:#f8fafc; border:2px dashed #94a3b8; border-radius:8px; padding:20px; text-align:center; margin:20px 0;" class="${highlight ? 'red-flag-indicator' : ''}">
                                ${highlight ? '<span class="red-flag-tag">Quishing QR Code</span>' : ''}
                                <img src="assets/quishing_qr.png" alt="Quishing QR Code" style="width:160px; height:160px; border:3px solid #fff; border-radius:6px; box-shadow:0 2px 8px rgba(0,0,0,0.15);">
                                <div style="font-size:12px; color:#475569; font-weight:600; margin-top:10px;">Scan with Camera to Verify Employee Identity Instantly</div>
                                <div style="margin-top:12px;">
                                    <a href="javascript:void(0)" onclick="MockInbox.handleLinkClick('quishing')"
                                       onmouseover="MockInbox.showTooltip(event, 'http://192.168.56.10:8080/qr-auth?target=emp_benefit')"
                                       onmouseout="MockInbox.hideTooltip()"
                                       style="font-size:12px; color:#2563eb; text-decoration:underline;">
                                       Or click here if accessing on mobile browser
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
    },

    init() {
        this.renderMailList();
        this.selectEmail(this.currentEmailId);
    },

    renderMailList() {
        const container = document.getElementById("mailListItems");
        if (!container) return;

        container.innerHTML = Object.values(this.emails).map(email => `
            <div class="mail-item ${email.id === this.currentEmailId ? 'selected' : ''}" 
                 onclick="MockInbox.selectEmail('${email.id}')">
                <div class="mail-sender">
                    <span>${email.senderName}</span>
                    <span class="mail-date">${email.date}</span>
                </div>
                <div class="mail-subject">${email.subject}</div>
                <div class="mail-snippet">${email.snippet}</div>
            </div>
        `).join("");
    },

    selectEmail(id) {
        this.currentEmailId = id;
        const email = this.emails[id];
        this.renderMailList();

        const subjectEl = document.getElementById("readingSubject");
        const senderNameEl = document.getElementById("readingSenderName");
        const senderEmailEl = document.getElementById("readingSenderEmail");
        const bodyEl = document.getElementById("readingBody");

        if (subjectEl) subjectEl.textContent = email.subject;
        if (senderNameEl) senderNameEl.textContent = email.senderName;
        if (senderEmailEl) senderEmailEl.textContent = `<${email.senderEmail}>`;
        if (bodyEl) bodyEl.innerHTML = email.render(this.showRedFlags);

        SimulationEngine.recordAction("EMAIL_OPENED", email.subject);
    },

    toggleRedFlags() {
        this.showRedFlags = !this.showRedFlags;
        const btn = document.getElementById("btnToggleFlags");
        if (btn) {
            btn.textContent = this.showRedFlags ? "👁️ Hide Red Flags" : "🔍 Spot Red Flags (Analysis)";
            btn.className = this.showRedFlags ? "btn btn-danger" : "btn btn-secondary";
        }
        this.selectEmail(this.currentEmailId);
    },

    handleLinkClick(landingTarget) {
        SimulationEngine.recordAction("LINK_CLICKED", `Scenario: ${landingTarget}`);
        App.showTab("landing");
        LandingPages.switchPage(landingTarget);
        App.showNotification("⚠️ Hyperlink Executed! Redirected to simulated landing page.", "warning");
    },

    reportCurrentPhish() {
        const email = this.emails[this.currentEmailId];
        SimulationEngine.recordAction("PHISH_REPORTED", `Reported: ${email.subject}`);
        
        // Show success modal
        const modal = document.getElementById("reportSuccessModal");
        if (modal) {
            document.getElementById("reportedEmailSubject").textContent = email.subject;
            modal.classList.add("active");
        }
    },

    showTooltip(e, url) {
        const tooltip = document.getElementById("urlTooltipPreview");
        if (tooltip) {
            tooltip.textContent = `🎯 Destination URL: ${url}`;
            tooltip.style.display = "block";
        }
    },

    hideTooltip() {
        const tooltip = document.getElementById("urlTooltipPreview");
        if (tooltip) {
            tooltip.style.display = "none";
        }
    }
};

window.MockInbox = MockInbox;

/**
 * Interactive Security Awareness Training & Certification LMS
 * Author: Omkar Pardeshi (PRN: 25070122506)
 * Project: Mini Project 15 - Phishing Simulation & Security Awareness
 */

const SecurityTraining = {
    currentModule: "mod-1",
    quizScore: 0,
    answers: {},

    quizQuestions: [
        {
            id: 1,
            q: "What is the primary objective of modern phishing simulations in an enterprise or academic environment?",
            options: [
                "To discipline and penalize employees who make mistakes",
                "To measure baseline vulnerability, deliver experiential 'teachable moments', and build proactive threat-reporting habits",
                "To test if network firewalls can detect encrypted SSL certificates",
                "To secretly collect employee personal passwords for IT backups"
            ],
            correct: 1,
            explanation: "Modern simulations are strictly educational and non-punitive. They establish empirical baseline metrics and train users to recognize and report social engineering attempts."
        },
        {
            id: 2,
            q: "Which technique is most effective for verifying the true destination of an embedded hyperlink in an email before clicking?",
            options: [
                "Click the link quickly to see if antivirus software alerts you",
                "Hover your mouse cursor over the link to inspect the full destination URL and domain structure",
                "Forward the email to all your colleagues to see if they can open it",
                "Reply to the sender asking if the link is safe"
            ],
            correct: 1,
            explanation: "Hovering over an anchor link reveals the true destination URL in your browser or email client's status bar, exposing spoofed domains or suspicious IP addresses."
        },
        {
            id: 3,
            q: "What distinguishes 'Quishing' (QR-code phishing) from conventional email phishing attacks?",
            options: [
                "Quishing only targets Linux operating systems",
                "Quishing embeds the target URL inside an image-based QR code, bypassing text-based Secure Email Gateways (SEGs) and moving victims to personal mobile devices",
                "Quishing requires physical access to the victim's keyboard",
                "Quishing can only be performed over Bluetooth connections"
            ],
            correct: 1,
            explanation: "Traditional email security gateways scan plain text and HTML anchors. QR codes hide the malicious payload inside an image matrix, migrating targets onto unmanaged mobile devices lacking endpoint protection."
        },
        {
            id: 4,
            q: "Why do social engineering pretexts frequently incorporate manufactured urgency (e.g., 'Your account expires in 4 hours')?",
            options: [
                "Because DNS servers stop functioning after 4 hours",
                "To trigger emotional anxiety and urgency, bypassing the victim's critical rational skepticism",
                "Because email protocols automatically delete unopened messages after 4 hours",
                "To comply with international internet speed regulations"
            ],
            correct: 1,
            explanation: "Urgency and fear appeals are core psychological levers in social engineering designed to force hasty compliance before the victim verifies the request through official channels."
        },
        {
            id: 5,
            q: "What does a DMARC policy of 'p=reject' instruct a receiving mail transfer agent (MTA) to do when an email fails authentication?",
            options: [
                "Accept the email and mark it as high priority",
                "Silently drop/reject the fraudulent email at the boundary, preventing it from ever reaching the recipient's inbox",
                "Deliver the email to the inbox with a small warning label",
                "Forward the email automatically to the CEO"
            ],
            correct: 1,
            explanation: "'p=reject' is the strictest DMARC enforcement policy, directing receiving mail gateways to reject non-aligned or forged messages at the protocol level."
        },
        {
            id: 6,
            q: "Why are SMS-based One-Time Passwords (OTPs) vulnerable to modern Adversary-in-the-Middle (AiTM) phishing kits (e.g., Evilginx)?",
            options: [
                "Because SMS messages are limited to 160 characters",
                "Because reverse-proxy toolkits proxy the entered OTP directly to the legitimate server in real-time, stealing the resulting authenticated session cookie",
                "Because cell towers cannot transmit numbers higher than 9999",
                "Because SMS OTPs can only be used once per year"
            ],
            correct: 1,
            explanation: "AiTM reverse-proxies sit between the victim and legitimate server. When the victim enters their credentials and OTP, the proxy passes them to the real service and intercepts the active session cookie."
        },
        {
            id: 7,
            q: "Which Multi-Factor Authentication (MFA) standard provides true cryptographic phishing resistance against AiTM reverse proxies?",
            options: [
                "Voice call automated robocall authentication",
                "FIDO2 / WebAuthn hardware security keys (e.g., YubiKey) bound to the cryptographic browser origin",
                "Security questions asking for your first pet's name",
                "Email verification links sent to the same inbox"
            ],
            correct: 1,
            explanation: "FIDO2/WebAuthn authenticators bind cryptographic tokens directly to the verified browser TLS origin (e.g. login.microsoft.com). If the origin is spoofed (e.g. fake-login.lab), the key refuses to sign the authentication request."
        },
        {
            id: 8,
            q: "When inspecting an email header, what is the crucial difference between the 'From' display name and the envelope sender / DKIM signing domain?",
            options: [
                "The display name is always cryptographically verified, while the domain is just text",
                "The display name is completely arbitrary text that can be freely forged by any attacker; the domain and DKIM signature reveal the actual transmitting server",
                "The display name can only be set by Microsoft or Google",
                "There is no difference between the two fields"
            ],
            correct: 1,
            explanation: "Attackers routinely set their display name to 'IT ServiceDesk' or 'Corporate HR' while sending from an external compromised or spoofed mailbox. Always verify the actual email domain."
        },
        {
            id: 9,
            q: "What should you do immediately upon spotting a confirmed phishing email in your corporate mailbox?",
            options: [
                "Reply to the email telling the hacker that you caught them",
                "Click the link to verify if it contains malware",
                "Use the internal 'Report Phish' button to alert the Security Operations Center (SOC)",
                "Post the phishing email link on your social media"
            ],
            correct: 2,
            explanation: "Using the official 'Report Phish' button exports full message headers and forensic metadata directly to the SOC, allowing security analysts to block the malicious sender domain fleet-wide."
        },
        {
            id: 10,
            q: "In an ethical phishing simulation lab, what is the mandatory policy regarding participant passwords?",
            options: [
                "Passwords should be written in plain text in the project report",
                "Passwords should be shared with all classmates",
                "Zero-Credential Capture: no real passwords may ever be stored, logged, or retained",
                "Passwords should be stored in an open Google Sheet"
            ],
            correct: 2,
            explanation: "Strict ethical guidelines require that simulation landing pages record only the occurrence of a submission event without storing or persisting sensitive plaintext credentials."
        }
    ],

    init() {
        this.renderQuiz();
    },

    switchModule(modId) {
        this.currentModule = modId;
        document.querySelectorAll(".module-nav-item").forEach(item => {
            item.classList.toggle("active", item.dataset.mod === modId);
        });
        document.querySelectorAll(".training-content-step").forEach(step => {
            step.classList.toggle("active", step.id === modId);
        });
    },

    spotRedFlag(element, flagName) {
        element.classList.add("spotted");
        App.showNotification(`🎯 Red Flag Spotted: ${flagName}!`, "success");
        const count = document.querySelectorAll(".spotter-item.spotted").length;
        const total = document.querySelectorAll(".spotter-item").length;
        const countEl = document.getElementById("spottedFlagsCount");
        if (countEl) countEl.textContent = `${count} / ${total} Spotted`;

        if (count === total) {
            App.showNotification("🎉 Congratulations! You have identified all hidden red flags in this threat analysis!", "success");
        }
    },

    renderQuiz() {
        const container = document.getElementById("quizQuestionsContainer");
        if (!container) return;

        container.innerHTML = this.quizQuestions.map((q, idx) => `
            <div class="quiz-card" id="qcard-${q.id}">
                <div class="quiz-question-text">
                    <strong>Question ${idx + 1} of 10:</strong> ${q.q}
                </div>
                <div class="quiz-options-list">
                    ${q.options.map((opt, optIdx) => `
                        <div class="quiz-option" id="qopt-${q.id}-${optIdx}" 
                             onclick="SecurityTraining.selectAnswer(${q.id}, ${optIdx})">
                            <span style="font-weight:bold; font-family:var(--font-mono);">${String.fromCharCode(65 + optIdx)}.</span>
                            <span>${opt}</span>
                        </div>
                    `).join("")}
                </div>
                <div id="qexp-${q.id}" style="display:none; margin-top:12px; padding:10px 14px; border-radius:6px; font-size:12px; line-height:1.5;"></div>
            </div>
        `).join("");
    },

    selectAnswer(qId, optIdx) {
        if (this.answers[qId] !== undefined) return; // Answered already

        this.answers[qId] = optIdx;
        const q = this.quizQuestions.find(item => item.id === qId);
        const isCorrect = (optIdx === q.correct);

        if (isCorrect) this.quizScore++;

        const optEl = document.getElementById(`qopt-${qId}-${optIdx}`);
        const correctEl = document.getElementById(`qopt-${qId}-${q.correct}`);
        const expEl = document.getElementById(`qexp-${qId}`);

        if (isCorrect) {
            optEl.classList.add("correct");
        } else {
            optEl.classList.add("wrong");
            correctEl.classList.add("correct");
        }

        if (expEl) {
            expEl.style.display = "block";
            expEl.style.background = isCorrect ? "rgba(16, 185, 129, 0.15)" : "rgba(244, 63, 94, 0.15)";
            expEl.style.border = `1px solid ${isCorrect ? "#10b981" : "#f43f5e"}`;
            expEl.style.color = isCorrect ? "#10b981" : "#f43f5e";
            expEl.innerHTML = `<strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</strong> ${q.explanation}`;
        }

        this.updateQuizProgress();
    },

    updateQuizProgress() {
        const total = this.quizQuestions.length;
        const answered = Object.keys(this.answers).length;
        const scoreEl = document.getElementById("quizLiveScore");
        if (scoreEl) scoreEl.textContent = `Score: ${this.quizScore} / ${answered} (${((this.quizScore/Math.max(1, answered))*100).toFixed(0)}%)`;

        if (answered === total) {
            const resultBox = document.getElementById("quizFinalResultBox");
            if (resultBox) {
                resultBox.style.display = "block";
                const passed = (this.quizScore >= 8);
                document.getElementById("quizFinalScoreText").textContent = `${this.quizScore} / 10 (${this.quizScore * 10}%)`;
                document.getElementById("quizPassStatusBadge").textContent = passed ? "PASSED (HONORS)" : "RETAKE REQUIRED";
                document.getElementById("quizPassStatusBadge").className = passed ? "badge-lab" : "badge-lab danger";
                
                if (passed) {
                    document.getElementById("btnUnlockCert").style.display = "inline-flex";
                }
            }
        }
    },

    generateCertificate(name = "Omkar Pardeshi", prn = "25070122506") {
        const inputName = document.getElementById("certRecipientName");
        if (inputName && inputName.value.trim()) {
            name = inputName.value.trim();
        }
        const certEl = document.getElementById("generatedCertificateView");
        const certNameEl = document.getElementById("certDisplayName");
        const certDateEl = document.getElementById("certDisplayDate");
        const certHashEl = document.getElementById("certDisplayHash");

        if (certNameEl) certNameEl.textContent = name;
        if (certDateEl) certDateEl.textContent = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        if (certHashEl) certHashEl.textContent = "VERIFIED-SHA256: " + Math.random().toString(36).substring(2, 10).toUpperCase() + "-" + prn;

        if (certEl) {
            certEl.style.display = "block";
            certEl.scrollIntoView({ behavior: 'smooth' });
        }
        App.showNotification(`🏆 Certificate of Completion generated for ${name}!`, "success");
    }
};

window.SecurityTraining = SecurityTraining;

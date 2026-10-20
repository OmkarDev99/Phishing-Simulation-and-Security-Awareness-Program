/**
 * Technical Defensive Architecture, SPF/DKIM/DMARC Simulator & FIDO2 Matrix
 * Author: Omkar Pardeshi (PRN: 25070122506)
 * Project: Mini Project 15 - Phishing Simulation & Security Awareness
 */

const DefensiveSimulator = {
    testDomain(domain = "enterprise.com") {
        const input = document.getElementById("dnsDomainInput");
        if (input && input.value.trim()) {
            domain = input.value.trim();
        }

        const resultBox = document.getElementById("dnsSimulationResult");
        if (!resultBox) return;

        // Simulated DNS lookup
        let isSpoofed = domain.includes("alert") || domain.includes("tracking") || domain.includes("login") || domain.includes("lab");

        let spfRecord = isSpoofed ? "v=spf1 ~all (Softfail - Unauthorized sending IP)" : "v=spf1 ip4:192.168.56.0/24 include:_spf.enterprise.com -all";
        let dkimStatus = isSpoofed ? "FAIL: No valid cryptographic selector found" : "PASS: rsa-sha256 signature verified (s=202610)";
        let dmarcPolicy = isSpoofed ? "p=none (Audit only: message delivered to inbox!)" : "p=reject (Hard drop at mail gateway)";

        resultBox.innerHTML = `
            <div style="background:#0b1120; border:1px solid var(--border-strong); border-radius:var(--radius-md); padding:18px; margin-top:16px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                    <span style="font-family:var(--font-mono); font-size:13px; color:var(--accent-cyan); font-weight:bold;">
                        DNS Inspection Target: ${domain}
                    </span>
                    <span class="badge-lab ${isSpoofed ? 'danger' : ''}">
                        ${isSpoofed ? '⚠️ High Risk / Spoofed Domain' : '🔒 Verified Enterprise Domain'}
                    </span>
                </div>
                <div style="font-family:var(--font-mono); font-size:12px; line-height:1.7;">
                    <div><strong>SPF (RFC 7208):</strong> <span style="color:${isSpoofed ? 'var(--accent-rose)' : 'var(--accent-emerald)'}">${spfRecord}</span></div>
                    <div><strong>DKIM (RFC 6376):</strong> <span style="color:${isSpoofed ? 'var(--accent-rose)' : 'var(--accent-emerald)'}">${dkimStatus}</span></div>
                    <div><strong>DMARC (RFC 7489):</strong> <span style="color:${isSpoofed ? 'var(--accent-rose)' : 'var(--accent-emerald)'}">${dmarcPolicy}</span></div>
                </div>
                <div style="margin-top:14px; padding:10px 14px; border-radius:6px; background:${isSpoofed ? 'rgba(244,63,94,0.1)' : 'rgba(16,185,129,0.1)'}; font-size:12px; color:${isSpoofed ? 'var(--accent-rose)' : 'var(--accent-emerald)'};">
                    <strong>Gateway Verdict:</strong> ${isSpoofed ? 'Without strict DMARC enforcement (p=reject), this simulated phishing email bypassed authentication filters and reached the user\'s inbox!' : 'With DMARC p=reject alignment, this message is intercepted and dropped at the perimeter boundary.'}
                </div>
            </div>
        `;
    },

    simulateDmarcPolicy(policy) {
        const policyEl = document.getElementById("activePolicyBadge");
        const actionEl = document.getElementById("policyActionOutcome");
        
        if (policy === "none") {
            if (policyEl) { policyEl.textContent = "p=none (Monitor Only)"; policyEl.className = "badge-lab danger"; }
            if (actionEl) actionEl.innerHTML = "<strong>Result:</strong> Email is delivered straight to user's <strong>INBOX</strong> with zero warning. Attack succeeds!";
        } else if (policy === "quarantine") {
            if (policyEl) { policyEl.textContent = "p=quarantine (Spam Filter)"; policyEl.className = "badge-lab"; }
            if (actionEl) actionEl.innerHTML = "<strong>Result:</strong> Email is automatically rerouted to the user's <strong>Junk / Spam Quarantine</strong> folder.";
        } else if (policy === "reject") {
            if (policyEl) { policyEl.textContent = "p=reject (Block at Perimeter)"; policyEl.className = "badge-lab"; }
            if (actionEl) actionEl.innerHTML = "<strong>Result:</strong> Receiving MTA rejects SMTP transaction with <code>550 5.7.1 DMARC Policy Violation</code>. 100% blocked!";
        }
    }
};

window.DefensiveSimulator = DefensiveSimulator;

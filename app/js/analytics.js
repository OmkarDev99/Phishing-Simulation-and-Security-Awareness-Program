/**
 * Campaign Metrics, Chart.js Visualization & Cohort Table
 * Author: Omkar Pardeshi (PRN: 25070122506)
 * Project: Mini Project 15 - Phishing Simulation & Security Awareness
 */

const AnalyticsDashboard = {
    chartInstance: null,

    init() {
        this.renderStats();
        this.initCharts();
        this.renderCohortTable();
    },

    renderStats() {
        const metrics = SimulationEngine.getMetrics();
        
        const c1ClickEl = document.getElementById("statC1Click");
        const c2ClickEl = document.getElementById("statC2Click");
        const clickRedEl = document.getElementById("statClickReduction");
        const reportSurgeEl = document.getElementById("statReportSurge");

        if (c1ClickEl) c1ClickEl.textContent = `${((metrics.c1.clicked / metrics.total) * 100).toFixed(0)}%`;
        if (c2ClickEl) c2ClickEl.textContent = `${((metrics.c2.clicked / metrics.total) * 100).toFixed(0)}%`;
        if (clickRedEl) clickRedEl.textContent = `-${metrics.reduction.click}%`;
        if (reportSurgeEl) reportSurgeEl.textContent = `+${metrics.reduction.reporting}%`;
    },

    initCharts() {
        const ctx = document.getElementById("comparativeMetricsChart");
        if (!ctx || typeof Chart === "undefined") return;

        const metrics = SimulationEngine.getMetrics();

        if (this.chartInstance) {
            this.chartInstance.destroy();
        }

        this.chartInstance = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Emails Sent", "Emails Opened", "Links Clicked", "Credentials Submitted", "Reported to SOC"],
                datasets: [
                    {
                        label: "Campaign 1 (Baseline)",
                        data: [
                            metrics.c1.sent,
                            metrics.c1.opened,
                            metrics.c1.clicked,
                            metrics.c1.submitted,
                            metrics.c1.reported
                        ],
                        backgroundColor: "rgba(244, 63, 94, 0.75)",
                        borderColor: "#f43f5e",
                        borderWidth: 1,
                        borderRadius: 4
                    },
                    {
                        label: "Campaign 2 (Post-Training)",
                        data: [
                            metrics.c2.sent,
                            metrics.c2.opened,
                            metrics.c2.clicked,
                            metrics.c2.submitted,
                            metrics.c2.reported
                        ],
                        backgroundColor: "rgba(16, 185, 129, 0.75)",
                        borderColor: "#10b981",
                        borderWidth: 1,
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: "#94a3b8",
                            font: { family: "Outfit", size: 12 }
                        }
                    },
                    tooltip: {
                        backgroundColor: "#0f172a",
                        borderColor: "#334155",
                        borderWidth: 1,
                        titleColor: "#f8fafc",
                        bodyColor: "#94a3b8"
                    }
                },
                scales: {
                    x: {
                        ticks: { color: "#94a3b8", font: { family: "Outfit" } },
                        grid: { color: "rgba(255, 255, 255, 0.05)" }
                    },
                    y: {
                        beginAtZero: true,
                        max: 25,
                        ticks: { color: "#94a3b8", font: { family: "JetBrains Mono" }, stepSize: 5 },
                        grid: { color: "rgba(255, 255, 255, 0.05)" }
                    }
                }
            }
        });
    },

    renderCohortTable(filterText = "") {
        const tbody = document.getElementById("cohortTableBody");
        if (!tbody) return;

        const filtered = SimulationEngine.cohort.filter(u => 
            u.name.toLowerCase().includes(filterText.toLowerCase()) ||
            u.email.toLowerCase().includes(filterText.toLowerCase()) ||
            u.dept.toLowerCase().includes(filterText.toLowerCase())
        );

        tbody.innerHTML = filtered.map(u => `
            <tr>
                <td style="font-family:var(--font-mono); font-size:11px; color:var(--text-muted);">${u.id}</td>
                <td><strong>${u.name}</strong></td>
                <td style="font-family:var(--font-mono); font-size:12px; color:var(--accent-cyan);">${u.email}</td>
                <td style="color:var(--text-secondary);">${u.dept}</td>
                <td>
                    <span style="color:${u.c1_clicked ? 'var(--accent-rose)' : 'var(--accent-emerald)'}; font-weight:600;">
                        ${u.c1_clicked ? '⚠️ Clicked' : '✅ Safe'}
                    </span>
                </td>
                <td>
                    <span style="color:${u.c1_submitted ? 'var(--accent-rose)' : 'var(--text-muted)'}; font-weight:600;">
                        ${u.c1_submitted ? '❌ Submitted' : '—'}
                    </span>
                </td>
                <td>
                    <span class="badge-lab" style="font-size:11px;">${u.quiz_score} / 10</span>
                </td>
                <td>
                    <span style="color:${u.c2_clicked ? 'var(--accent-rose)' : 'var(--accent-emerald)'}; font-weight:600;">
                        ${u.c2_clicked ? '⚠️ Clicked' : '✅ Safe'}
                    </span>
                </td>
                <td>
                    <span style="color:${u.c2_reported ? 'var(--accent-emerald)' : 'var(--text-muted)'}; font-weight:600;">
                        ${u.c2_reported ? '🛡️ Reported' : '—'}
                    </span>
                </td>
            </tr>
        `).join("");
    }
};

window.AnalyticsDashboard = AnalyticsDashboard;

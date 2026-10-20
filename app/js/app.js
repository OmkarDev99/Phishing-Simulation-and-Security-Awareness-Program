/**
 * PhishGuard Lab & Security Awareness LMS — Main Application Coordinator
 * Student Author: Omkar Pardeshi (PRN: 25070122506)
 * Project: Mini Project 15 - Phishing Simulation & Security Awareness Program
 */

const App = {
    currentTab: "dashboard",

    init() {
        console.log("Initializing PhishGuard Security Portal — Omkar Pardeshi (PRN: 25070122506)");
        this.setupNavigation();
        
        // Initialize sub-modules
        if (window.MockInbox) MockInbox.init();
        if (window.LandingPages) LandingPages.init();
        if (window.SecurityTraining) SecurityTraining.init();
        if (window.AnalyticsDashboard) AnalyticsDashboard.init();

        // Handle initial tab from URL query param (?tab=...) or hash (#...)
        const urlParams = new URLSearchParams(window.location.search);
        let initialTab = urlParams.get('tab') || window.location.hash.replace('#', '');
        if (initialTab === 'webmail') initialTab = 'inbox';
        
        if (['dashboard', 'inbox', 'landing', 'training', 'analytics'].includes(initialTab)) {
            this.showTab(initialTab);
        } else {
            this.showTab("dashboard");
        }
    },

    setupNavigation() {
        document.querySelectorAll(".tab-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const tab = btn.dataset.tab;
                if (tab) this.showTab(tab);
            });
        });
    },

    showTab(tabName) {
        this.currentTab = tabName;
        
        // Update tab buttons
        document.querySelectorAll(".tab-btn").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.tab === tabName);
        });

        // Update view sections
        document.querySelectorAll(".view-section").forEach(sec => {
            sec.classList.toggle("active", sec.id === `tab-${tabName}`);
        });

        // Specific tab lifecycle actions
        if (tabName === "analytics" && window.AnalyticsDashboard) {
            AnalyticsDashboard.renderStats();
            AnalyticsDashboard.initCharts();
            AnalyticsDashboard.renderCohortTable();
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    },

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove("active");
    },

    showNotification(msg, type = "info") {
        const notif = document.getElementById("toastNotification");
        if (!notif) return;

        notif.textContent = msg;
        notif.className = `toast-notif ${type} show`;
        
        clearTimeout(this._notifTimer);
        this._notifTimer = setTimeout(() => {
            notif.classList.remove("show");
        }, 4000);
    }
};

window.App = App;

document.addEventListener("DOMContentLoaded", () => {
    App.init();
});

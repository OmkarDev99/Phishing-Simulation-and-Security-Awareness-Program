/**
 * Simulation State & Data Engine
 * Author: Omkar Pardeshi (PRN: 25070122506)
 * Project: Mini Project 15 - Phishing Simulation & Security Awareness
 */

const SimulationEngine = {
    // 25 Consenting Cohort Participants
    cohort: [
        { id: "USR-01", name: "Aarav Sharma", email: "aarav.sharma@lab.internal", dept: "Computer Engineering", c1_clicked: true, c1_submitted: true, c1_reported: false, quiz_score: 9, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-02", name: "Aditi Patil", email: "aditi.patil@lab.internal", dept: "Computer Engineering", c1_clicked: true, c1_submitted: true, c1_reported: false, quiz_score: 8, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-03", name: "Ananya Deshmukh", email: "ananya.deshmukh@lab.internal", dept: "Information Technology", c1_clicked: false, c1_submitted: false, c1_reported: true, quiz_score: 10, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-04", name: "Atharva Joshi", email: "atharva.joshi@lab.internal", dept: "Computer Engineering", c1_clicked: true, c1_submitted: true, c1_reported: false, quiz_score: 9, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-05", name: "Dev Kulkarni", email: "dev.kulkarni@lab.internal", dept: "Information Technology", c1_clicked: true, c1_submitted: false, c1_reported: false, quiz_score: 8, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-06", name: "Diya Mehta", email: "diya.mehta@lab.internal", dept: "Computer Engineering", c1_clicked: true, c1_submitted: true, c1_reported: false, quiz_score: 7, c2_clicked: true, c2_submitted: false, c2_reported: false },
        { id: "USR-07", name: "Gaurav Shinde", email: "gaurav.shinde@lab.internal", dept: "Computer Engineering", c1_clicked: true, c1_submitted: true, c1_reported: false, quiz_score: 9, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-08", name: "Isha Bhave", email: "isha.bhave@lab.internal", dept: "Information Technology", c1_clicked: false, c1_submitted: false, c1_reported: false, quiz_score: 10, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-09", name: "Kunal Chavan", email: "kunal.chavan@lab.internal", dept: "Computer Engineering", c1_clicked: true, c1_submitted: true, c1_reported: false, quiz_score: 8, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-10", name: "Manish Verma", email: "manish.verma@lab.internal", dept: "Information Technology", c1_clicked: true, c1_submitted: true, c1_reported: false, quiz_score: 8, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-11", name: "Neha Gupta", email: "neha.gupta@lab.internal", dept: "Computer Engineering", c1_clicked: false, c1_submitted: false, c1_reported: true, quiz_score: 10, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-12", name: "Nikhil Bapat", email: "nikhil.bapat@lab.internal", dept: "Computer Engineering", c1_clicked: true, c1_submitted: true, c1_reported: false, quiz_score: 9, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-13", name: "Omkar Pardeshi", email: "omkar.pardeshi@lab.internal", dept: "Lead Researcher", c1_clicked: false, c1_submitted: false, c1_reported: true, quiz_score: 10, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-14", name: "Pooja Rao", email: "pooja.rao@lab.internal", dept: "Information Technology", c1_clicked: true, c1_submitted: false, c1_reported: false, quiz_score: 9, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-15", name: "Pranav Kale", email: "pranav.kale@lab.internal", dept: "Computer Engineering", c1_clicked: true, c1_submitted: true, c1_reported: false, quiz_score: 8, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-16", name: "Rahul Bansal", email: "rahul.bansal@lab.internal", dept: "Information Technology", c1_clicked: true, c1_submitted: true, c1_reported: false, quiz_score: 7, c2_clicked: true, c2_submitted: true, c2_reported: false },
        { id: "USR-17", name: "Riya Shah", email: "riya.shah@lab.internal", dept: "Computer Engineering", c1_clicked: false, c1_submitted: false, c1_reported: false, quiz_score: 9, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-18", name: "Rohan Mane", email: "rohan.mane@lab.internal", dept: "Computer Engineering", c1_clicked: true, c1_submitted: true, c1_reported: false, quiz_score: 8, c2_clicked: false, c2_submitted: false, c2_reported: false },
        { id: "USR-19", name: "Sakshi Gaikwad", email: "sakshi.gaikwad@lab.internal", dept: "Information Technology", c1_clicked: false, c1_submitted: false, c1_reported: false, quiz_score: 10, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-20", name: "Sameer Wagh", email: "sameer.wagh@lab.internal", dept: "Computer Engineering", c1_clicked: true, c1_submitted: false, c1_reported: false, quiz_score: 9, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-21", name: "Siddharth Nair", email: "siddharth.nair@lab.internal", dept: "Computer Engineering", c1_clicked: true, c1_submitted: true, c1_reported: false, quiz_score: 9, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-22", name: "Sneha More", email: "sneha.more@lab.internal", dept: "Information Technology", c1_clicked: false, c1_submitted: false, c1_reported: false, quiz_score: 10, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-23", name: "Tanvi Gore", email: "tanvi.gore@lab.internal", dept: "Computer Engineering", c1_clicked: true, c1_submitted: false, c1_reported: false, quiz_score: 9, c2_clicked: false, c2_submitted: false, c2_reported: true },
        { id: "USR-24", name: "Varun Dixit", email: "varun.dixit@lab.internal", dept: "Information Technology", c1_clicked: false, c1_submitted: false, c1_reported: false, quiz_score: 8, c2_clicked: false, c2_submitted: false, c2_reported: false },
        { id: "USR-25", name: "Yash Sawant", email: "yash.sawant@lab.internal", dept: "Computer Engineering", c1_clicked: false, c1_submitted: false, c1_reported: false, quiz_score: 9, c2_clicked: true, c2_submitted: false, c2_reported: false }
    ],

    // Aggregated Metrics
    getMetrics() {
        const total = this.cohort.length;
        const c1_sent = total;
        const c1_opened = 23;
        const c1_clicked = this.cohort.filter(u => u.c1_clicked).length; // 16 (64%)
        const c1_submitted = this.cohort.filter(u => u.c1_submitted).length; // 12 (48%)
        const c1_reported = this.cohort.filter(u => u.c1_reported).length; // 2 (8%)

        const c2_sent = total;
        const c2_opened = 21;
        const c2_clicked = this.cohort.filter(u => u.c2_clicked).length; // 3 (12%)
        const c2_submitted = this.cohort.filter(u => u.c2_submitted).length; // 1 (4%)
        const c2_reported = this.cohort.filter(u => u.c2_reported).length; // 19 (76%)

        const click_reduction = ((c1_clicked - c2_clicked) / c1_clicked * 100).toFixed(1);
        const submit_reduction = ((c1_submitted - c2_submitted) / c1_submitted * 100).toFixed(1);
        const reporting_surge = (((c2_reported - c1_reported) / c1_reported) * 100).toFixed(0);

        return {
            total,
            c1: { sent: c1_sent, opened: c1_opened, clicked: c1_clicked, submitted: c1_submitted, reported: c1_reported },
            c2: { sent: c2_sent, opened: c2_opened, clicked: c2_clicked, submitted: c2_submitted, reported: c2_reported },
            reduction: { click: click_reduction, submit: submit_reduction, reporting: reporting_surge }
        };
    },

    // Record dynamic user action from interactive inbox / landing page
    recordAction(actionType, detail = "") {
        console.log(`[SIMULATION EVENT] Action: ${actionType} | Detail: ${detail}`);
        const logEntry = {
            timestamp: new Date().toLocaleTimeString(),
            action: actionType,
            detail: detail
        };
        const logs = JSON.parse(localStorage.getItem("phishguard_live_events") || "[]");
        logs.unshift(logEntry);
        localStorage.setItem("phishguard_live_events", JSON.stringify(logs.slice(0, 20)));
    },

    exportCSV() {
        let csv = "Participant_ID,Name,Email,Department,C1_Clicked,C1_Submitted,C1_Reported,Quiz_Score,C2_Clicked,C2_Submitted,C2_Reported\n";
        this.cohort.forEach(u => {
            csv += `${u.id},${u.name},${u.email},${u.dept},${u.c1_clicked},${u.c1_submitted},${u.c1_reported},${u.quiz_score},${u.c2_clicked},${u.c2_submitted},${u.c2_reported}\n`;
        });
        const blob = new Blob([csv], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "phishguard_campaign_metrics.csv";
        a.click();
    }
};

window.SimulationEngine = SimulationEngine;

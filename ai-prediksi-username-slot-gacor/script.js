function generate() {

    document.getElementById("result").classList.add("hidden");
    document.getElementById("scan").classList.remove("hidden");

    let progress = 0;
    const texts = [
        "Initializing AI core...",
        "Generating username pattern...",
        "Encrypting identity hash...",
        "Analyzing jackpot probability...",
        "Finalizing prediction..."
    ];

    const progressBar = document.getElementById("progress");
    const scanText = document.getElementById("scanText");

    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress > 100) progress = 100;

        progressBar.style.width = progress + "%";
        scanText.innerText = texts[Math.floor(Math.random() * texts.length)];

        if (progress >= 100) {
            clearInterval(interval);
            showResult();
        }
    }, 350);
}

function showResult() {
    document.getElementById("scan").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    // AUTO GENERATE USERNAME AI
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let username = "";
    for (let i = 0; i < 12; i++) {
        username += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("resultUser").innerText = username;

    // Hadiah random (fake AI prediction)
    const reward = Math.floor(Math.random() * 45000000) + 5000000;
    document.getElementById("rewardValue").innerText =
        "Rp " + reward.toLocaleString("id-ID");

        // 🔄 RANDOM URUTAN SITUS
    renderSitesRandom();
}

function renderSitesRandom() {
    const sites = [
        { name: "WIN1131", url: "https://bypass.cv/win1131" },
        { name: "BETPAUS", url: "https://t.ly/betpaus" },
        { name: "388SPORT", url: "https://bypass.cv/388sport" },
        { name: "SBOMAXX", url: "https://t.ly/sbomaxx" }
    ];

    // 🔄 Shuffle (Fisher-Yates)
    for (let i = sites.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sites[i], sites[j]] = [sites[j], sites[i]];
    }

    const siteList = document.getElementById("siteList");
    siteList.innerHTML = "";

    sites.forEach(site => {
        // 🎯 Persentase rekomendasi AI (random realistis)
        const percent = Math.floor(Math.random() * 25) + 72; // 72% – 96%

        const li = document.createElement("li");
        li.innerHTML = `
            ▶ <a href="${site.url}" target="_blank" rel="nofollow">
                ${site.name}
            </a>
            <span class="site-percent">${percent}%</span>
            <span class="site-ai">AI confidence</span>
        `;
        siteList.appendChild(li);
    });
}

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeMatrix();
window.addEventListener("resize", resizeMatrix);

const chars = "01";
const fontSize = 16;
let columns = canvas.width / fontSize;
let drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * canvas.height;
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff66";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

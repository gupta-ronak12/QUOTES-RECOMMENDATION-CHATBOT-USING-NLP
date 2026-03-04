<<<<<<< HEAD
const chatBox = document.getElementById("chat-box");
const inputField = document.getElementById("user-input");
const landingCard = document.getElementById("landing-card");
const chatCard = document.getElementById("chat-card");

// Keyboard enter support
inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
});

// ===== GENERATE FLOATING PARTICLES =====
(function generateParticles() {
    const container = document.getElementById("particles");
    for (let i = 0; i < 25; i++) {
        const p = document.createElement("div");
        p.classList.add("particle");
        const size = Math.random() * 4 + 2;
        p.style.cssText = `
            left: ${Math.random() * 100}vw;
            width: ${size}px;
            height: ${size}px;
            animation-duration: ${Math.random() * 18 + 10}s;
            animation-delay: ${Math.random() * 12}s;
            opacity: ${Math.random() * 0.5 + 0.2};
        `;
        container.appendChild(p);
    }
})();

// ===== SCREEN TRANSITIONS =====
function startChat() {
    document.getElementById("landing-screen").classList.add("hidden");
    document.getElementById("chat-screen").classList.remove("hidden");
    setTimeout(() => {
        addMessage("How are you feeling today? I can share something motivational, inspirational, love, success or funny.", "bot");
    }, 400);
}

function goBack() {
    document.getElementById("chat-screen").classList.add("hidden");
    document.getElementById("landing-screen").classList.remove("hidden");
    chatBox.innerHTML = "";
}

// Start chat from a landing pill click
function landingQuick(type) {
    startChat();
    setTimeout(() => {
        inputField.value = type;
        sendMessage();
    }, 900);
}

// ===== MESSAGES =====
function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showTypingIndicator() {
    removeTypingIndicator();
    const el = document.createElement("div");
    el.classList.add("typing-indicator");
    el.id = "typing";
    el.innerHTML = `<span></span><span></span><span></span>`;
    chatBox.appendChild(el);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingIndicator() {
    document.getElementById("typing")?.remove();
}

function quickReply(text) {
    inputField.value = text;
    sendMessage();
}

// ===== SEND MESSAGE =====
async function sendMessage() {
    const userText = inputField.value.trim();
    if (!userText) return;

    addMessage(userText, "user");
    inputField.value = "";
    showTypingIndicator();

    try {
        const response = await fetch("http://localhost:5005/webhooks/rest/webhook", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sender: "user", message: userText })
        });

        const data = await response.json();
        removeTypingIndicator();

        if (!data || data.length === 0) {
            addMessage("🤔 I'm not sure how to respond to that.", "bot");
            return;
        }

        // Stagger bot replies for a natural feel
        data.forEach((botReply, i) => {
            if (botReply.text) {
                setTimeout(() => addMessage(botReply.text, "bot"), i * 350);
            }
        });

    } catch (err) {
        removeTypingIndicator();
        addMessage("⚠ Unable to connect to chatbot server.", "bot");
    }
}

// ===== 3D TILT EFFECT =====
document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 28;
    const y = (window.innerHeight / 2 - e.pageY) / 28;
    const tilt = `rotateY(${x}deg) rotateX(${y}deg)`;

    if (!document.getElementById("landing-screen").classList.contains("hidden"))
        landingCard.style.transform = tilt;
    else
        chatCard.style.transform = tilt;
});

document.addEventListener("mouseleave", () => {
    landingCard.style.transform = "rotateY(0deg) rotateX(0deg)";
    chatCard.style.transform   = "rotateY(0deg) rotateX(0deg)";
});
=======
const chatBox = document.getElementById("chat-box");
const inputField = document.getElementById("user-input");
const landingCard = document.getElementById("landing-card");
const chatCard = document.getElementById("chat-card");

// Keyboard enter support
inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
});

// ===== GENERATE FLOATING PARTICLES =====
(function generateParticles() {
    const container = document.getElementById("particles");
    for (let i = 0; i < 25; i++) {
        const p = document.createElement("div");
        p.classList.add("particle");
        const size = Math.random() * 4 + 2;
        p.style.cssText = `
            left: ${Math.random() * 100}vw;
            width: ${size}px;
            height: ${size}px;
            animation-duration: ${Math.random() * 18 + 10}s;
            animation-delay: ${Math.random() * 12}s;
            opacity: ${Math.random() * 0.5 + 0.2};
        `;
        container.appendChild(p);
    }
})();

// ===== SCREEN TRANSITIONS =====
function startChat() {
    document.getElementById("landing-screen").classList.add("hidden");
    document.getElementById("chat-screen").classList.remove("hidden");
    setTimeout(() => {
        addMessage("How are you feeling today? I can share something motivational, inspirational, love, success or funny.", "bot");
    }, 400);
}

function goBack() {
    document.getElementById("chat-screen").classList.add("hidden");
    document.getElementById("landing-screen").classList.remove("hidden");
    chatBox.innerHTML = "";
}

// Start chat from a landing pill click
function landingQuick(type) {
    startChat();
    setTimeout(() => {
        inputField.value = type;
        sendMessage();
    }, 900);
}

// ===== MESSAGES =====
function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showTypingIndicator() {
    removeTypingIndicator();
    const el = document.createElement("div");
    el.classList.add("typing-indicator");
    el.id = "typing";
    el.innerHTML = `<span></span><span></span><span></span>`;
    chatBox.appendChild(el);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingIndicator() {
    document.getElementById("typing")?.remove();
}

function quickReply(text) {
    inputField.value = text;
    sendMessage();
}

// ===== SEND MESSAGE =====
async function sendMessage() {
    const userText = inputField.value.trim();
    if (!userText) return;

    addMessage(userText, "user");
    inputField.value = "";
    showTypingIndicator();

    try {
        const response = await fetch("http://localhost:5005/webhooks/rest/webhook", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sender: "user", message: userText })
        });

        const data = await response.json();
        removeTypingIndicator();

        if (!data || data.length === 0) {
            addMessage("🤔 I'm not sure how to respond to that.", "bot");
            return;
        }

        // Stagger bot replies for a natural feel
        data.forEach((botReply, i) => {
            if (botReply.text) {
                setTimeout(() => addMessage(botReply.text, "bot"), i * 350);
            }
        });

    } catch (err) {
        removeTypingIndicator();
        addMessage("⚠ Unable to connect to chatbot server.", "bot");
    }
}

// ===== 3D TILT EFFECT =====
document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 28;
    const y = (window.innerHeight / 2 - e.pageY) / 28;
    const tilt = `rotateY(${x}deg) rotateX(${y}deg)`;

    if (!document.getElementById("landing-screen").classList.contains("hidden"))
        landingCard.style.transform = tilt;
    else
        chatCard.style.transform = tilt;
});

document.addEventListener("mouseleave", () => {
    landingCard.style.transform = "rotateY(0deg) rotateX(0deg)";
    chatCard.style.transform   = "rotateY(0deg) rotateX(0deg)";
});
>>>>>>> 63958431a7e00b3fb658227ec4d959a2610ca6ef

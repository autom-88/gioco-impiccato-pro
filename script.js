const words = ["javascript", "html", "css", "function", "variable", "object", "comunque"];

let word = "";
let hidden = [];
let errors = 0;
let used = [];

const parts = ["head","body","arm1","arm2","leg1","leg2"];

start();

/* =========================
   START GAME
========================= */
function start() {
    word = words[Math.floor(Math.random() * words.length)];
    hidden = Array(word.length).fill("_");
    errors = 0;
    used = [];

    updateUI();
    draw();
    createKeyboard(); // 🔥 IMPORTANTE
}

/* =========================
   KEYBOARD VISUAL
========================= */
function createKeyboard() {
    const keyboard = document.getElementById("keyboard");
    keyboard.innerHTML = "";

    const letters = "abcdefghijklmnopqrstuvwxyz";

    letters.split("").forEach(letter => {
        const btn = document.createElement("div");
        btn.classList.add("key");
        btn.innerText = letter;

        btn.addEventListener("click", () => {
            handleGuess(letter, btn);
        });

        keyboard.appendChild(btn);
    });
}

/* =========================
   GUESS LETTER (KEYBOARD)
========================= */
function handleGuess(letter, btn) {

    if (used.includes(letter)) return;

    used.push(letter);

    btn.style.pointerEvents = "none";

    if (word.includes(letter)) {

        btn.classList.add("correct");

        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) hidden[i] = letter;
        }

    } else {
        errors++;
        btn.classList.add("wrong");
    }

    draw();
    updateUI();
    check();
}

/* =========================
   DRAW HANGMAN
========================= */
function draw() {
    parts.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
            el.style.opacity = index < errors ? "1" : "0";
        }
    });
}

/* =========================
   UI UPDATE
========================= */
function updateUI() {
    document.getElementById("word").innerText = hidden.join(" ");

    document.getElementById("attempts").innerText =
        "Errori: " + errors + " / 6";

    document.getElementById("used").innerText =
        "Lettere usate: " + used.join(", ");
}

/* =========================
   WIN / LOSE CHECK
========================= */
function check() {

    if (!hidden.includes("_")) {
        setTimeout(() => {
            alert("🎉 Hai vinto! 🎉");
            start();
        }, 150);
    }

    if (errors >= 6) {
        setTimeout(() => {
            alert("💀 Hai perso! La parola era:" + word);
            start();
        }, 150);
    }
}

/* =========================
   RESET GAME
========================= */
function resetGame() {
    start();
}
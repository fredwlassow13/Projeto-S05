// script.js - Versão final e funcional
const menuToggle = document.getElementById("menuToggle");
const floatingMenu = document.getElementById("floatingMenu");
const closeMenuButton = document.querySelector(".close-menu");
const themeToggleButton = document.querySelector(".theme-toggle-button");

// === MENU FLUTUANTE ===
menuToggle?.addEventListener("click", () => {
    floatingMenu.classList.toggle("show");
});

closeMenuButton?.addEventListener("click", () => {
    floatingMenu.classList.remove("show");
});

// Fecha menu ao clicar fora
document.addEventListener("click", (e) => {
    if (!floatingMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        floatingMenu.classList.remove("show");
    }
});

// === TEMA ESCURO PERMANENTE (agora 100% funcional) ===
function applySavedTheme() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
}

// Aplica ao carregar
applySavedTheme();

// Alterna tema ao clicar
themeToggleButton?.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    floatingMenu.classList.remove("show"); // fecha menu
});

// === ENVIO DE CANDIDATURA (só candidatura.html usa) ===
function enviar() {
    const arquivo = document.getElementById("curriculo")?.files[0];
    const mensagem = document.getElementById("mensagem");
    if (!arquivo) {
        mensagem.innerText = "Por favor, selecione um currículo (PDF).";
        mensagem.style.color = "red";
        return;
    }
    if (!arquivo.name.toLowerCase().endsWith(".pdf")) {
        mensagem.innerText = "Apenas arquivos PDF são permitidos.";
        mensagem.style.color = "red";
        return;
    }
    mensagem.innerText = "Candidatura enviada com sucesso!";
    mensagem.style.color = "green";
}
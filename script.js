function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

function closeMenu() {
    const menu = document.getElementById("menu");
    menu.classList.remove("active");
}

const textElement = document.querySelector(".dynamic-text");
const texts = ["Desenvolvedor Front-End ", "Designer de Sites ", "Pensador Criativo ", "Resolutor de Problemas "];
let index = 0; 
let charIndex = 0; 
let isDeleting = false; 
const typingSpeed = 100; 
const deletingSpeed = 50; 
const delayBetweenWords = 1500; 

function typeEffect() {
    const currentText = texts[index];

    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex--);
    } else {
        textElement.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
        return;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();

const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
    document.querySelector("header").classList.toggle("light-mode");
    document.querySelector(".nativo").classList.toggle("light-mode");
    document.querySelector(".nativo1").classList.toggle("light-mode");
    document.querySelector(".nativo2").classList.toggle("light-mode");
    document.querySelector(".logo-png").classList.toggle("light-mode");
    document.querySelector(".logo").classList.toggle("light-mode");
    document.querySelector(".logo span").classList.toggle("light-mode");
    document.querySelector(".dynamic-container").classList.toggle("light-mode");
});

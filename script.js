// Typewriter effect
document.addEventListener("DOMContentLoaded", () => {
    const typewriter = document.querySelector('.typewriter');
    const subtitle = document.querySelector('.subtitle');
    const nameText = "Sairam Jadhav";
    const subtitleText = "AI-ML Enthusiast";
    let i = 0;

    function typeEffect() {
        if (i < nameText.length) {
            typewriter.textContent += nameText.charAt(i);
            i++;
            setTimeout(typeEffect, 150);
        } else {
            subtitle.classList.add('visible');
            subtitle.textContent = subtitleText;
        }
    }

    if (typewriter && subtitle) {
        typeEffect();
    }
});

// Scroll-to-top button visibility
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

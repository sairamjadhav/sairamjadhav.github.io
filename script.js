// Typewriter effect
const typewriter = document.querySelector('.typewriter');
const subtitle = document.querySelector('.subtitle');

const nameText = "Sairam Jadhav";
const subtitleText = "AI-ML Enthusiast";

let i = 0;

function typeEffect() {
  if (i < nameText.length) {
    typewriter.innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeEffect, 150);
  } else {
    subtitle.innerHTML = subtitleText;
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

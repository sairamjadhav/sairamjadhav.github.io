// Show only one section at a time
function loadSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.toggle('active', sec.id === id);
  });
}

// Typewriter effect
const text = "Welcome to My AI Odyssey!";
let index = 0;
function type() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

// Back to top
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadSection('home');
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
  ScrollReveal().reveal('.intro-text p', { delay: 200, origin: 'bottom', distance: '50px', interval: 200 });
  type();
  window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none';
  });
});

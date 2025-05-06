// Show only one section at a time
function loadSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.toggle('active', sec.id === id);
  });
  // Trigger typewriter for the active section
  if (id === 'home') typeWriter('typewriter-home', 'Welcome to My AI Odyssey!');
  else if (id === 'projects') typeWriter('typewriter-projects', 'Projects');
  else if (id === 'skills') typeWriter('typewriter-skills', 'Skills');
  else if (id === 'academics') typeWriter('typewriter-academics', 'Academics');
}

// Typewriter effect
function typeWriter(elementId, text) {
  const element = document.getElementById(elementId);
  element.innerHTML = '';
  let index = 0;
  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }
  type();
}

// Scroll reveal effect using vanilla JavaScript
function handleScroll() {
  const elements = document.querySelectorAll('.scroll-reveal');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

// Back to top
window.onscroll = function() {
  handleScroll();
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
  window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none';
  });
});

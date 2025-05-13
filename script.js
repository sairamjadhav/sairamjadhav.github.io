// Show only one section at a time
function loadSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.toggle('active', sec.id === id);
  });
  // Typewriter for each section
  if (id === 'home') typeWriter('typewriter-home', 'Welcome to My AI Odyssey!');
  else if (id === 'projects') typeWriter('typewriter-projects', 'Projects');
  else if (id === 'skills') typeWriter('typewriter-skills', 'Skills');
  else if (id === 'academics') typeWriter('typewriter-academics', 'Academics');
  else if (id === 'certifications') typeWriter('typewriter-certifications', 'Certifications');
  
  resetAnimations();
  
  // Initialize particles for the active section
  initializeParticles(id);
}

// Typewriter effect
function typeWriter(elementId, text) {
  const el = document.getElementById(elementId);
  el.innerHTML = '';
  let idx = 0;
  function type() {
    if (idx < text.length) {
      el.innerHTML += text.charAt(idx++);
      requestAnimationFrame(type);
    }
  }
  type();
}

// Scroll reveal via Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

function resetAnimations() {
  document.querySelectorAll('.scroll-reveal').forEach(el => {
    el.classList.remove('visible');
    observer.observe(el);
  });
}

// Back-to-top button
window.onscroll = () => {
  document.getElementById('back-to-top').style.display =
    (window.scrollY > 100 ? 'block' : 'none');
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize Particles.js for a specific section
function initializeParticles(sectionId) {
  const particleDivId = `particles-${sectionId}`;
  particlesJS(particleDivId, {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 1000 } },
      color: { value: '#00d4ff' },
      shape: { type: 'circle' },
      opacity: { value: 0.3 },
      size: { value: 2 },
      move: { enable: true, speed: 1 }
    },
    interactivity: {
      events: { onhover: { enable: true, mode: 'repulse' } }
    }
  });
}

// Initialize Particles.js for all sections on DOM load
document.addEventListener('DOMContentLoaded', () => {
  loadSection('home');
  resetAnimations();
  
  // Initialize particles for all sections
  ['home', 'projects', 'skills', 'academics', 'certifications'].forEach(sectionId => {
    initializeParticles(sectionId);
  });

  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
  }, 1000);
});

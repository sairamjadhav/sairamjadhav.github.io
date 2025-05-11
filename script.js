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

// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  // Update particles color based on theme
  const particlesColor = document.body.classList.contains('light-theme') ? '#007bff' : '#00d4ff';
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: particlesColor },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      events: { onhover: { enable: true, mode: 'repulse' } }
    }
  });
});

// Initialize Particles.js and Theme on DOM load
document.addEventListener('DOMContentLoaded', () => {
  loadSection('home');
  resetAnimations();
  
  // Initialize Particles.js
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: '#00d4ff' },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      events: { onhover: { enable: true, mode: 'repulse' } }
    }
  });

  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
  }, 1000);
});

// Show only one section at a time
function loadSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.toggle('active', sec.id === id);
  });
  // Typewriter for each section with simplified, uppercase headings
  if (id === 'home') typeWriter('typewriter-home', 'WELCOME TO MY AI ODYSSEY');
  else if (id === 'projects') typeWriter('typewriter-projects', 'PROJECTS');
  else if (id === 'skills') typeWriter('typewriter-skills', 'SKILLS');
  else if (id === 'academics') typeWriter('typewriter-academics', 'ACADEMICS');
  else if (id === 'certifications') typeWriter('typewriter-certifications', 'CERTIFICATIONS');
  
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

// Parallax Background Effect on Mouse Move
document.addEventListener('mousemove', (e) => {
  const sections = document.querySelectorAll('.section.active');
  sections.forEach(section => {
    const before = section.querySelector('::before');
    const after = section.querySelector('::after');
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    section.style.setProperty('--mouse-x', `${mouseX * 20}px`);
    section.style.setProperty('--mouse-y', `${mouseY * 20}px`);
  });
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  loadSection('home');
  resetAnimations();

  // Add event listeners only to navbar links
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default only for navbar links
      const sectionId = link.getAttribute('onclick').match(/'([^']+)'/)[1];
      loadSection(sectionId);
    });
  });

  // Ensure social media links work
  document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent any parent event listeners from interfering
      const href = link.getAttribute('href');
      if (href) {
        window.open(href, '_blank');
      }
    });
  });

  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
  }, 1000);
});

// Show only one section at a time
function loadSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.toggle('active', sec.id === id);
  });

  // Typewriter headings
  let title = '';
  switch(id) {
    case 'home': title = 'WELCOME TO MY AI ODYSSEY'; break;
    case 'projects': title = 'PROJECTS'; break;
    case 'skills': title = 'SKILLS'; break;
    case 'academics': title = 'ACADEMICS'; break;
    case 'certifications': title = 'CERTIFICATIONS'; break;
  }
  typeWriter(`typewriter-${id}`, title);
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

  // Hook up nav links by data-section
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('data-section');
      loadSection(sectionId);
    });
  });

  // Hide preloader after 1s
  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
  }, 1000);
});

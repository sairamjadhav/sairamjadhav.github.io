// script.js

// Custom Cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const scrollPct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  document.getElementById('progress-bar').style.width = `${scrollPct}%`;
});

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
let theme = localStorage.getItem('theme') || 'dark';
document.body.classList.add(theme);
toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
toggleBtn.onclick = () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
};

// GSAP Section Animations
function animateSection(id) {
  gsap.to(`#${id}.section`, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
}

// Load Section
function loadSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
    gsap.set(sec, { opacity: 0, y: 50 });
  });
  const s = document.getElementById(id);
  s.classList.add('active');
  animateSection(id);
}

// Parallax Init
window.addEventListener('load', () => {
  new Rellax('.rellax');
});

// Hamburger Menu
const ham = document.getElementById('hamburger');
const nav = document.getElementById('nav-menu');
ham.onclick = () => nav.classList.toggle('active');

// Preloader Hide & Initial Load
window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
  loadSection('home');
});

// Back-to-top Button
window.onscroll = () => {
  document.getElementById('back-to-top').style.display =
    window.scrollY > 100 ? 'block' : 'none';
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Intersection Observer for scroll-reveal
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

// Initialize animations on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  resetAnimations();
});

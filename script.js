/* script.js */

// Smooth scrolling
const links = document.querySelectorAll('.nav-links a, .scroll-down a');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    if (window.innerWidth <= 768) toggleMenu();
  });
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', toggleMenu);
function toggleMenu() {
  navLinks.classList.toggle('active');
}

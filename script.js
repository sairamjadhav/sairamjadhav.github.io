// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const ham = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  ham.addEventListener('click', () => nav.classList.toggle('open'));

  // Smooth section animations
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll('.fade-in').forEach(sec => {
    observer.observe(sec);
  });

  // Highlight active nav link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let curr = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 80;
      if (pageYOffset >= top) curr = sec.getAttribute('id');
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${curr}`);
    });
  });
});

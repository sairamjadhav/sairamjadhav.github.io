// Fade-in Nav & Header on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.navbar, header').forEach(el => el.classList.add('visible'));
});

// Fade-in on scroll using IntersectionObserver
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(sec => io.observe(sec));

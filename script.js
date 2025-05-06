// Show only one section at a time
function loadSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.toggle('active', sec.id === id);
  });
}

// Initialize: show home and AOS
document.addEventListener('DOMContentLoaded', () => {
  loadSection('home');
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
});

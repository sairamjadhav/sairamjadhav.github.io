// Show only one section at a time
function loadSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.toggle('active', sec.id === id);
  });
}

// Initialize: show home
document.addEventListener('DOMContentLoaded', () => {
  loadSection('home');
});

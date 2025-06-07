// Show only one section at a time
function loadSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.toggle('active', sec.id === id);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  loadSection('home');

  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('data-section');
      loadSection(sectionId);
    });
  });

  // Hide preloader after 0.5s
  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
  }, 500);
});

// Back-to-top button
window.onscroll = () => {
  document.getElementById('back-to-top').style.display =
    (window.scrollY > 100 ? 'block' : 'none');
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

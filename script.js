// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('href');
      document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Project filters
  document.querySelectorAll('.project-filters button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.project-filters button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.getAttribute('data-filter');
      document.querySelectorAll('.project-list li').forEach(item => {
        item.classList.toggle('visible', filter === 'all' || item.getAttribute('data-category') === filter);
      });
    });
  });
  document.querySelector('.project-filters button[data-filter="all"]').click();

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
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

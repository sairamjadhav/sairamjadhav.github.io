// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Highlight nav link on scroll
const sections = document.querySelectorAll('section, header');
const options = { threshold: 0.6 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.id;
    const link = document.querySelector(`nav ul li a[href="#${id}"]`);
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  });
}, options);
sections.forEach(sec => observer.observe(sec));

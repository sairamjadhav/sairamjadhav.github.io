// Initialize AOS
AOS.init({ duration: 800, once: true });

// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');
toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

// Typed.js for hero subtitle
new Typed('#typed', {
  strings: [
    'AI/ML Engineer @ IBM',
    'Deep Learning Specialist',
    'Computer Vision Expert',
    'Driving Enterprise AI Solutions'
  ],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 2000,
  loop: true
});

// Scroll-reveal for skill progress rings
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const circle = entry.target.querySelector('.progress-ring__circle');
      const level = entry.target.dataset.level;
      const circumference = 326.56; // 2 * π * 52
      circle.style.strokeDashoffset = circumference - (level / 100) * circumference;
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-progress').forEach(el => {
  skillObserver.observe(el);
});

// Filterable projects
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.filter;
    cards.forEach(c => {
      c.style.display = (category === 'all' || c.dataset.category === category) ? 'block' : 'none';
    });
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav__links a');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const selector = `.nav__links a[href="#${entry.target.id}"]`;
      document.querySelector(selector)?.classList.add('active');
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => navObserver.observe(section));

// Contact form validation
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();
  if (name && email.includes('@') && message) {
    alert('Message sent successfully!'); // Replace with actual submission logic
    contactForm.reset();
  } else {
    alert('Please fill out all fields correctly.');
  }
});

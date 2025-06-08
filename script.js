// Initialize AOS
AOS.init({ duration: 1000, once: true });

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
    'Deep Learning Innovator',
    'Computer Vision Specialist',
    'Building Scalable AI Solutions'
  ],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 2000,
  loop: true
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

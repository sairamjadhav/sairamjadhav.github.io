// Initialize AOS
AOS.init({ duration: 1000, once: true });

// Active nav link on scroll
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav__circle-item');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const selector = `.nav__circle-item[href="#${entry.target.id}"]`;
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
  const subject = document.querySelector('#subject').value.trim();
  const message = document.querySelector('#message').value.trim();
  if (name && email.includes('@') && subject && message) {
    alert('Message sent successfully!'); // Replace with actual submission logic
    contactForm.reset();
  } else {
    alert('Please fill out all fields correctly.');
  }
});

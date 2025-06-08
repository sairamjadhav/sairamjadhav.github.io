// Initialize AOS
AOS.init({ duration: 1000, once: true });

// Typewriter effect for hero title
const typewriterText = document.querySelector('.typewriter-text');
const text = "Hi, The name's Sairam I_LIKE_TO_CODE.py";
let index = 0;

function type() {
  if (index < text.length) {
    typewriterText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

window.onload = type;

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

// Toggle skill subsections
function toggleSubsection(id) {
  const subsection = document.getElementById(id);
  const isActive = subsection.classList.contains('active');
  
  // Close all subsections
  document.querySelectorAll('.skill-subsection').forEach(sub => {
    sub.classList.remove('active');
  });

  // Toggle the clicked subsection
  if (!isActive) {
    subsection.classList.add('active');
  }
}

// Contact form validation
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (e) => {
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const subject = document.querySelector('#subject').value.trim();
  const message = document.querySelector('#message').value.trim();
  
  if (name && email.includes('@') && subject && message) {
    // Formspree handles the submission
    return true;
  } else {
    e.preventDefault();
    alert('Please fill out all fields correctly.');
  }
});

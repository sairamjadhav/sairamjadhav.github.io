// Initialize AOS
AOS.init({ duration: 1000, once: true });

// Flip skill cards on click
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

// Flip project cards on click
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

// Contact form validation
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (e) => {
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const subject = document.querySelector('#subject').value.trim();
  const message = document.querySelector('#message').value.trim();
  
  if (name && email.includes('@') && subject && message) {
    return true;
  } else {
    e.preventDefault();
    alert('Please fill out all fields correctly.');
  }
});

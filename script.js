// Initialize AOS
AOS.init({ duration: 800, once: true });

// Typewriter effect for About section with emojis for visual cues
const typewriter = new Typed('#typewriter', {
  strings: [
    "I like to code.py! 💻",
    "I compile emotions.poetry! ✍️",
    "I run innings.cricket! 🏏"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
  showCursor: true,
  cursorChar: "|"
});

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

// Reset flipped cards on mobile resize to prevent layout issues
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.skill-card, .project-card').forEach(card => {
      card.classList.remove('flipped');
    });
  }
});

// Initialize EmailJS with your Public Key
emailjs.init("LYOs7Oj5G8m6x86WS"); // Replace with your EmailJS Public Key

// Contact form submission with EmailJS
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const subject = document.querySelector('#subject').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (name && email.includes('@') && subject && message) {
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      to_email: "sairamjadhav12@gmail.com"
    };

    emailjs.send("service_4ahz1d5", "template_f0w5wip", templateParams)
      .then(() => {
        alert('Message sent successfully!');
        contactForm.reset();
      }, (error) => {
        alert('Failed to send message. Please try again later.');
        console.error('EmailJS error:', error);
      });
  } else {
    alert('Please fill out all fields correctly.');
  }
});

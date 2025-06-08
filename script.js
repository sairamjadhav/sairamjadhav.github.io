// Initialize AOS
AOS.init({ duration: 1000, once: true });

// Typewriter effect for About section with icons
const typewriter = new Typed('#typewriter', {
  strings: [
    "I like to code.py <i class='fas fa-laptop'></i>",
    "I compile emotions.poetry <i class='fas fa-pen'></i>",
    "I run innings.cricket <i class='fas fa-baseball-bat-ball'></i>"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1500,
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

// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

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

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
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

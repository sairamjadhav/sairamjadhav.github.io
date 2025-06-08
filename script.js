// Initialize AOS
AOS.init({ duration: 1000, once: true });

// Typewriter effect for About section with icons
const typewriter = new Typed('#typewriter', {
  strings: [
    "I like to code.py <i class='fas fa-laptop laptop-icon'></i>",
    "I compile emotions.poetry <i class='fas fa-pen pen-icon'></i>",
    "I run innings.cricket <i class='fas fa-baseball-bat-ball bat-ball-icon'></i>"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1500,
  loop: true,
  showCursor: true,
  cursorChar: "|",
  onStringTyped: (arrayPos, self) => {
    // Show the emoji/icon when the string is fully typed
    const icon = document.querySelector('.typewriter-text i');
    if (icon) {
      // Remove existing animation classes to reset
      icon.classList.remove('visible', 'laptop-icon', 'pen-icon', 'bat-ball-icon');
      
      // Add the appropriate class based on the current string
      if (arrayPos === 0) {
        icon.classList.add('laptop-icon');
      } else if (arrayPos === 1) {
        icon.classList.add('pen-icon');
      } else if (arrayPos === 2) {
        icon.classList.add('bat-ball-icon');
      }
      
      // Trigger the animation with a slight delay to ensure DOM update
      setTimeout(() => {
        icon.classList.add('visible');
      }, 50);
    }
  }
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

// Initialize EmailJS with your Public Key
emailjs.init("LYOs7Oj5G8m6x86WS"); // Replace with your EmailJS Public Key from Account section

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

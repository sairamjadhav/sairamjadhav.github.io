// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');
toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

// Theme toggle with persistence
const themeBtn = document.querySelector('#theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('lightMode');
  const icon = themeBtn.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
  localStorage.setItem('theme', document.body.classList.contains('lightMode') ? 'light' : 'dark');
});
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('lightMode');
  themeBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

// Typed.js for hero subtitle
new Typed('#typed', {
  strings: [
    'AI/ML Enthusiast'
    'Deep Learning Innovator',
    'Generative AI Architect',
  ],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 1500,
  loop: true
});

// Enhanced tsparticles background
tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 120,
  particles: {
    number: { value: 80, density: { enable: true, area: 800 } },
    color: { value: "#00d4ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: { enable: true, minimumValue: 1 } },
    links: {
      enable: true,
      distance: 150,
      color: "#00d4ff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      outMode: "bounce"
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "connect" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      connect: { distance: 100, radius: 200 },
      push: { quantity: 3 }
    }
  }
});

// Scroll-reveal observer
const srObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      obs.unobserve(entry.target);

      // Animate radial progress bars
      if (entry.target.classList.contains('radial-progress')) {
        const level = entry.target.dataset.level;
        const fill = entry.target.querySelectorAll('.fill');
        const deg = (level / 100) * 180;
        fill.forEach(f => {
          f.style.transform = `rotate(${deg}deg)`;
        });
      }
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.section__text, .card, .skill-item, .contact-form, .footer').forEach(el => {
  srObserver.observe(el);
});

// Filterable projects
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.filterButtons;
    cards.forEach(c => {
      c.style.display = (category === 'all' || c.dataset.category === category) ? 'block' : 'none';
    });
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav__links a:not(.theme-toggle)');
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

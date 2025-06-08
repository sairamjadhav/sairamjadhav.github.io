// 1) Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');
toggle.addEventListener('click', () => links.classList.toggle('open'));

// 2) Theme toggle + persist
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const icon = themeBtn.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
  localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  themeBtn.querySelector('i').classList.replace('fa-moon','fa-sun');
}

// 3) Typed.js hero subtitle
new Typed('#typed', {
  strings: [
    'AI/ML Engineer @ ChatGPT',
    'Deep Learning & Generative AI Specialist',
    'Building Scalable Intelligence'
  ],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 2000,
  loop: true
});

// 4) tsparticles background
tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: { color: { value: "#0d1117" } },
  fpsLimit: 60,
  particles: {
    number: { value: 60, density: { enable: true, area: 800 } },
    color: { value: "#58a6ff" },
    opacity: { value: 0.4 },
    size: { value: 2, random: { enable: true, minimumValue: 1 } },
    move: { enable: true, speed: 0.6 }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { quantity: 4 }
    }
  }
});

// 5) Scroll-reveal observer
const srObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('fade-in');
      obs.unobserve(e.target);

      // For skill bars: animate width when in view
      if (e.target.classList.contains('fill')) {
        e.target.style.width = e.target.dataset.level;
      }
    }
  });
}, { threshold: 0.2 });

// Observe text, cards, skill-bars, contact text
document.querySelectorAll('.section__text, .card, .fill, .skill-bar, .footer').forEach(el => {
  srObserver.observe(el);
});

// 6) Filterable projects
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    cards.forEach(c => {
      c.style.display = (cat === 'all' || c.dataset.category === cat) ? 'block' : 'none';
    });
  });
});

// 7) Active nav link on scroll
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav__links a:not(.theme-toggle)');
const navObs = new IntersectionObserver((ents) => {
  ents.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const sel = `.nav__links a[href="#${e.target.id}"]`;
      document.querySelector(sel)?.classList.add('active');
    }
  });
}, { threshold: 0.6 });
sections.forEach(s => navObs.observe(s));

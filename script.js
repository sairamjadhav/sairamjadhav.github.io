// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const links  = document.querySelector('.nav__links');
toggle.addEventListener('click', () => links.classList.toggle('open'));

// Typewriter effect
new Typed('#typed', {
  strings: [
    'AI/ML Engineer at ChatGPT',
    'Deep Learning & Generative AI Specialist',
    'Building Scalable ML Solutions'
  ],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 2000,
  loop: true
});

// Scroll-reveal
const srOptions = { threshold: 0.2, rootMargin: '0px' };
const srObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('fade-in');
      srObserver.unobserve(e.target);
    }
  });
}, srOptions);

// observe text, cards, skills
document.querySelectorAll('.section__text, .card, .skills li').forEach(el => {
  srObserver.observe(el);
});

// update nav active link
const sections = document.querySelectorAll('section, header');
const navLinks  = document.querySelectorAll('.nav__links a');
const observer = new IntersectionObserver((ents) => {
  ents.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const sel = `.nav__links a[href="#${e.target.id}"]`;
      document.querySelector(sel)?.classList.add('active');
    }
  });
}, { threshold: 0.6 });

sections.forEach(s => observer.observe(s));

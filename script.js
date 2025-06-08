// Scroll-Reveal Animation
document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = function() {
    for (const reveal of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = reveal.getBoundingClientRect().top;
      const revealPoint = 150;
      if (elementTop < windowHeight - revealPoint) {
        reveal.classList.add('active');
      }
    }
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // trigger on load
});

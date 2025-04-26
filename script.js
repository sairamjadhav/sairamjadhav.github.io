document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded with pro animations!');

    // Select all elements with the fade-in class
    const sections = document.querySelectorAll('.fade-in');

    // Create an Intersection Observer to trigger animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });

    // Fallback to show content if JavaScript fails
    sections.forEach(section => {
        section.classList.add('visible');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready!');

    // Smooth scrolling effect
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Fade-in effect for sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Create shooting stars
    const shootingStarsContainer = document.querySelector('.shooting-stars');

    function createShootingStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 3 + 2; // Random size between 2px and 5px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // Random duration between 0.5s and 1.5s
        shootingStarsContainer.appendChild(star);

        // Remove the star after animation ends
        star.addEventListener('animationend', () => {
            star.remove();
        });
    }

    // Create shooting stars at intervals
    setInterval(createShootingStar, 500); // Create a new star every 500ms
});
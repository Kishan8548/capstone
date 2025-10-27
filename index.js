// index.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Ubla Homepage is loaded! Ready for interaction.");

    // --- 1. Smooth Scrolling Implementation ---
    // Selects all links whose href starts with '#' (internal links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only handle links that are NOT just '#'
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) { 
                e.preventDefault();

                // Scroll smoothly to the target element
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 2. Scroll Fade-In Animation (Intersection Observer) ---
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // When the element intersects (comes into view)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Stop observing it once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

    // Apply the observer to all elements with the 'fade-in' class
    document.querySelectorAll('.fade-in, .hero-text').forEach(el => {
        fadeInObserver.observe(el);
    });
});
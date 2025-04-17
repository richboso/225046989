/* ================ JAVASCRIPT HELPER FOR ANIMATIONS ================ */

// Add this JavaScript to activate scroll animations:

document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        document.querySelector('.preloader').classList.add('loaded');
    });
    
    // Header Scroll Effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Reveal on Scroll
    const revealElements = document.querySelectorAll('.reveal, .stagger-reveal, .section-title, .skill-progress');
    
    function checkReveal() {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
                
                // For skill bars
                if (revealElements[i].classList.contains('skill-progress')) {
                    revealElements[i].classList.add('animate');
                }
            }
        }
    }
    
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Check on load
    
    // Custom Cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    const hoverElements = document.querySelectorAll('a, button, .project-card, .service-card');
    hoverElements.forEach(item => {
        item.addEventListener('mouseenter', function() {
            cursor.classList.add('hover');
        });
        item.addEventListener('mouseleave', function() {
            cursor.classList.remove('hover');
        });
    });
    
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('show');
        });
    }
});

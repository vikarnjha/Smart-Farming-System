/**
 * FarmerHub - Main JavaScript
 * Handles navigation, animations, and interactive elements
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const menuBtn = document.querySelector("#menu-btn");
    const navbar = document.querySelector(".navbar");
    const featureButtons = document.querySelectorAll('.buttonn');
    
    // Mobile menu toggle
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            menuBtn.classList.toggle("fa-times");
            navbar.classList.toggle("active");
        });
    }
    
    // Hide mobile menu on scroll
    window.addEventListener('scroll', function() {
        if (menuBtn) {
            menuBtn.classList.remove("fa-times");
            navbar.classList.remove("active");
        }
    });
    
    // Feature buttons highlight
    if (featureButtons.length > 0) {
        featureButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                featureButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only process if it's an anchor link (not external)
            if (targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Scroll to the element
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (menuBtn && navbar) {
                        menuBtn.classList.remove("fa-times");
                        navbar.classList.remove("active");
                    }
                }
            }
        });
    });
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.box, .image, .content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
});

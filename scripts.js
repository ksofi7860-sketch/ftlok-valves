// HERO SLIDESHOW

// Hero Images Array - Define this first!


// Product slideshow
const productSlides = document.querySelectorAll('.product-slide');
let currentProductSlide = 0;

function changeProductSlide() {
    productSlides[currentProductSlide].classList.remove('active');
    currentProductSlide = (currentProductSlide + 1) % productSlides.length;
    productSlides[currentProductSlide].classList.add('active');
}

// Change product every 3 seconds
if (productSlides.length > 0) {
    setInterval(changeProductSlide, 3000);
}

// Products enquiry button
const productEnquiryBtn = document.querySelector('.products-enquiry-btn');
if (productEnquiryBtn) {
    productEnquiryBtn.addEventListener('click', function() {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
}



// Testimonials slider (as before)
let testimonials = document.querySelectorAll('.testimonial');
let current = 0;
if (testimonials.length > 0) {
    testimonials[current].classList.add('active');
    setInterval(() => {
        testimonials[current].classList.remove('active');
        current = (current + 1) % testimonials.length;
        testimonials[current].classList.add('active');
    }, 4000);
}

// Contact form submit (as before)
document.querySelectorAll('.contact-details form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your enquiry! We will contact you soon.');
        form.reset();
    });
});
// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}
// Mobile touch interactions for industry cards
const industryCards = document.querySelectorAll('.industry-card');

industryCards.forEach(card => {
    let touchTimer;
    
    // Add click/tap handler
    card.addEventListener('click', function() {
        // Toggle active class
        if (this.classList.contains('card-active')) {
            this.classList.remove('card-active');
        } else {
            // Remove active from all cards
            industryCards.forEach(c => c.classList.remove('card-active'));
            // Add active to clicked card
            this.classList.add('card-active');
        }
    });
    
    // Touch start
    card.addEventListener('touchstart', function() {
        touchTimer = setTimeout(() => {
            this.classList.add('card-touching');
        }, 100);
    });
    
    // Touch end
    card.addEventListener('touchend', function() {
        clearTimeout(touchTimer);
        setTimeout(() => {
            this.classList.remove('card-touching');
        }, 150);
    });
});

// Close active card when clicking outside
document.addEventListener('click', function(event) {
    const isCard = event.target.closest('.industry-card');
    if (!isCard) {
        industryCards.forEach(card => card.classList.remove('card-active'));
    }
});
// WhatsApp button scroll behavior
// WhatsApp button - NO HIDE ON SCROLL
const whatsappBtn = document.querySelector('.whatsapp-float');

if (whatsappBtn) {
    // Simple click tracking for analytics (optional)
    whatsappBtn.addEventListener('click', function() {
        console.log('WhatsApp button clicked');
    });
}
// =====================
// TYPING ANIMATION
// =====================
console.log('Starting typing animation...');

const typingPhrases = [
    'Best Quality',
    '100% Assurance',
    'Best Price Range'
];

let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;

function startTyping() {
    const textElement = document.querySelector('.typing-text');
    
    if (!textElement) {
        console.error('typing-text element not found!');
        return;
    }
    
    const currentPhrase = typingPhrases[phraseIdx];
    
    if (isDeleting) {
        textElement.innerHTML = currentPhrase.substring(0, charIdx - 1);
        charIdx--;
    } else {
        textElement.innerHTML = currentPhrase.substring(0, charIdx + 1);
        charIdx++;
    }
    
    let speed = 100;
    
    if (!isDeleting && charIdx === currentPhrase.length) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % typingPhrases.length;
        speed = 500;
    }
    
    setTimeout(startTyping, speed);
}

// Start the typing animation
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(startTyping, 1000);
} else {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(startTyping, 1000);
    });
}
// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

// Show/hide button based on scroll position
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

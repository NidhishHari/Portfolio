// ========================================
// NAVIGATION
// ========================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(element => {
    observer.observe(element);
});

// ========================================
// TYPING EFFECT FOR HERO SUBTITLE
// ========================================

const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text1 = 'Fullstack Developer';
    const text2 = 'Biotechnology Professional';
    const separator = ' & ';

    // Store original HTML
    const originalHTML = heroSubtitle.innerHTML;

    // Create typing effect on page load
    window.addEventListener('load', () => {
        // Add a slight delay before starting the typing effect
        setTimeout(() => {
            heroSubtitle.style.opacity = '1';
        }, 500);
    });
}

// ========================================
// ACTIVE NAVIGATION LINK
// ========================================

const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// SKILL TAGS ANIMATION
// ========================================

const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.05}s`;
});

// ========================================
// PROJECT CARDS HOVER EFFECT
// ========================================

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(-8px)';
    });
});

// ========================================
// TIMELINE ANIMATION
// ========================================

const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.2
});

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    timelineObserver.observe(item);
});

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.4);
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top on click
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-5px) scale(1.1)';
    this.style.boxShadow = '0 8px 20px rgba(220, 38, 38, 0.6)';
});

scrollTopBtn.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
    this.style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.4)';
});

// ========================================
// SCROLL PROGRESS INDICATOR
// ========================================

const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Custom cursor effect removed per user request

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cI see you\'re checking out the console. Interested in the code? Let\'s connect!', 'font-size: 14px; color: #94a3b8;');
console.log('%c📧 nidhishhari35@gmail.com', 'font-size: 12px; color: #06b6d4;');
console.log('%c🔗 https://github.com/NidhishHari', 'font-size: 12px; color: #06b6d4;');

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ========================================
// EASTER EGG - KONAMI CODE
// ========================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join('') === konamiPattern.join('')) {
        document.body.style.animation = 'rainbow 2s linear infinite';

        // Add rainbow animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);

        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);

        console.log('%c🎉 You found the easter egg! You\'re awesome!', 'font-size: 20px; font-weight: bold; color: #10b981;');
    }
});

// ========================================
// LOADING ANIMATION
// ========================================

window.addEventListener('load', () => {
    const loadingOverlay = document.getElementById('loadingOverlay');
    setTimeout(() => {
        loadingOverlay.classList.add('hidden');
        // Remove from DOM after animation
        setTimeout(() => {
            loadingOverlay.remove();
        }, 500);
    }, 2000);
});


// ========================================
// THEMED CONFETTI WITH CURSOR GRAVITY
// ========================================

const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Track mouse position
let mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
};

const confetti = [];
const confettiCount = 120;

class ConfettiParticle {
    constructor() {
        this.reset();
        // Spread initial positions for smooth start
        this.y = Math.random() * canvas.height;
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = Math.random() * 0.8 + 0.4; // Base falling speed
        this.size = Math.random() * 3 + 1.5;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05;

        // Red and black theme colors
        const colorChoice = Math.random();
        if (colorChoice < 0.6) {
            // Red tones (primary)
            const redShade = Math.floor(Math.random() * 100 + 155);
            this.color = `rgba(${redShade}, ${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 50)}, 0.9)`;
        } else if (colorChoice < 0.85) {
            // Dark red/crimson
            this.color = `rgba(${Math.floor(Math.random() * 50 + 100)}, ${Math.floor(Math.random() * 20)}, ${Math.floor(Math.random() * 20)}, 0.8)`;
        } else {
            // Black/dark gray accents
            const gray = Math.floor(Math.random() * 50 + 20);
            this.color = `rgba(${gray}, ${gray}, ${gray}, 0.7)`;
        }
    }

    update() {
        // Calculate distance to mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Attraction force (medium range)
        if (distance < 200 && distance > 50) {
            const force = (200 - distance) / 200 * 0.4;
            this.vx += (dx / distance) * force;
            this.vy += (dy / distance) * force * 0.5; // Less vertical pull
        }

        // Repulsion force (close range)
        if (distance < 50) {
            const force = (50 - distance) / 50 * 1.5;
            this.vx -= (dx / distance) * force;
            this.vy -= (dy / distance) * force;
        }

        // Apply velocity
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        // Gravity (always falling)
        this.vy += 0.02;

        // Friction
        this.vx *= 0.98;

        // Reset particle when it goes off screen
        if (this.y > canvas.height + 10) {
            this.reset();
        }

        // Wrap horizontally
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.x > canvas.width + 10) this.x = -10;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Draw as small rectangle (confetti-like)
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size, this.size, this.size * 2);

        // Add slight glow for red particles
        if (this.color.includes('155') || this.color.includes('100')) {
            ctx.shadowBlur = 3;
            ctx.shadowColor = 'rgba(220, 38, 38, 0.5)';
            ctx.fillRect(-this.size / 2, -this.size, this.size, this.size * 2);
            ctx.shadowBlur = 0;
        }

        ctx.restore();
    }
}

function initConfetti() {
    for (let i = 0; i < confettiCount; i++) {
        confetti.push(new ConfettiParticle());
    }
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateConfetti);
}

// Mouse tracking
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Touch support for mobile
window.addEventListener('touchmove', (e) => {
    if (e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    }
});

window.addEventListener('touchstart', (e) => {
    if (e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    }
});

initConfetti();
animateConfetti();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ========================================
// THEME TOGGLE
// ========================================

const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('light-theme')) {
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});

// ========================================
// STATISTICS COUNTER ANIMATION
// ========================================

const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('animated')) {
                statNumber.classList.add('animated');
                animateCounter(statNumber);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(item => {
    statsObserver.observe(item);
});

// ========================================
// UPDATE NAVIGATION FOR BLOG
// ========================================

// Add blog link to navigation if not already present
const certificatesLink = navMenu.querySelector('a[href="#certificates"]');
if (certificatesLink && !navMenu.querySelector('a[href="#blog"]')) {
    const blogLi = document.createElement('li');
    const blogLink = document.createElement('a');
    blogLink.href = '#blog';
    blogLink.className = 'nav-link';
    blogLink.textContent = 'Publications';
    blogLi.appendChild(blogLink);
    certificatesLink.parentElement.after(blogLi);

    // Add smooth scroll for new link
    blogLink.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector('#blog');
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        // Close mobile menu if open
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
}

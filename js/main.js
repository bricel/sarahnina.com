/**
 * Main JavaScript for Sarah Nina Meridor Portfolio Site
 * Simple functionality for static GitHub Pages hosting
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functionality
    initNavigation();
    initSlideshow();
    initSmoothScrolling();
    initAnimations();
    initLightbox();
    
    /**
     * Navigation functionality
     */
    function initNavigation() {
        // Handle active nav state
        const navLinks = document.querySelectorAll('.nav-link');
        const currentPage = window.location.pathname;
        
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage || 
                (currentPage === '/' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });
        
        // Mobile menu toggle (if needed in future)
        const menuToggle = document.querySelector('.menu-toggle');
        const navList = document.querySelector('.nav-list');
        
        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                navList.classList.toggle('active');
            });
        }
    }
    
    /**
     * Simple slideshow functionality
     */
    function initSlideshow() {
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentSlide = 0;
        
        if (slides.length === 0) return;
        
        // Show specific slide
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            if (slides[index]) {
                slides[index].classList.add('active');
            }
        }
        
        // Next slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        // Previous slide
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        // Event listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        });
        
        // Auto-play (optional - commented out for user control)
        // setInterval(nextSlide, 5000);
    }
    
    /**
     * Smooth scrolling for anchor links
     */
    function initSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.SITE_HEADER').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    /**
     * Scroll animations and effects
     */
    function initAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.gallery-section, .artist-statement, .contact-section');
        animatedElements.forEach(el => observer.observe(el));
        
        // Header background opacity on scroll
        const header = document.querySelector('.SITE_HEADER');
        if (header) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                const opacity = Math.max(0.95 - scrolled * 0.001, 0.8);
                
                header.style.background = `rgba(255, 255, 255, ${opacity})`;
            });
        }
    }
    
    /**
     * Image lazy loading
     */
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }
    
    /**
     * Contact form handling (if form is added)
     */
    function initContactForm() {
        const contactForm = document.querySelector('#contact-form');
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // For static site, show a message or redirect to mailto
            const subject = encodeURIComponent('Contact from sarahnina.com');
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailtoLink = `mailto:info@sarahnina.com?subject=${subject}&body=${body}`;
            
            window.location.href = mailtoLink;
        });
    }
    
    /**
     * Gallery lightbox functionality
     */
    function initLightbox() {
        const galleryImages = document.querySelectorAll('.gallery-grid img');
        
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                // Create lightbox overlay
                const overlay = document.createElement('div');
                overlay.classList.add('lightbox-overlay');
                overlay.innerHTML = `
                    <div class="lightbox-container">
                        <img src="${this.src}" alt="${this.alt}">
                        <button class="lightbox-close">&times;</button>
                    </div>
                `;
                
                document.body.appendChild(overlay);
                document.body.style.overflow = 'hidden';
                
                // Close lightbox
                const closeBtn = overlay.querySelector('.lightbox-close');
                closeBtn.addEventListener('click', closeLightbox);
                overlay.addEventListener('click', function(e) {
                    if (e.target === overlay) closeLightbox();
                });
                
                function closeLightbox() {
                    document.body.removeChild(overlay);
                    document.body.style.overflow = '';
                }
                
                // Keyboard support
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape') closeLightbox();
                });
            });
        });
    }
    
    /**
     * Performance monitoring
     */
    function logPerformance() {
        if ('performance' in window) {
            window.addEventListener('load', function() {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    console.log(`Page loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
                }, 0);
            });
        }
    }
    
    // Initialize performance monitoring in development
    if (window.location.hostname === 'localhost') {
        logPerformance();
    }
});

// CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .lightbox-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    }
    
    .lightbox-container {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
    }
    
    .lightbox-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
    
    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 30px;
        cursor: pointer;
        padding: 5px;
    }
    
    .lightbox-close:hover {
        opacity: 0.7;
    }
`;
document.head.appendChild(style);
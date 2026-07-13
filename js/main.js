// ============================================
// HABIB SOLVEX - MOBILE MENU FIX
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ===== MOBILE HAMBURGER MENU =====
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (hamburger && navLinks) {
        // Click handler for hamburger
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navLinks.classList.toggle('open');
            
            if (navLinks.classList.contains('open')) {
                body.classList.add('menu-open');
                body.style.overflow = 'hidden';
            } else {
                body.classList.remove('menu-open');
                body.style.overflow = '';
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
                body.classList.remove('menu-open');
                body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navLinks.classList.contains('open')) {
                const navbarElement = document.querySelector('.navbar');
                const isClickInside = navbarElement ? navbarElement.contains(e.target) : false;
                if (!isClickInside) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('open');
                    body.classList.remove('menu-open');
                    body.style.overflow = '';
                }
            }
        });

        // Close menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navLinks.classList.contains('open')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
                body.classList.remove('menu-open');
                body.style.overflow = '';
            }
        });
    }

    // ===== SET ACTIVE NAV LINK =====
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    console.log('Habib Solvex website loaded successfully!');
});

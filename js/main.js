// ============================================
// HABIB SOLVEX - MAIN JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== NAVBAR SCROLL =====
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

    // ===== MOBILE MENU =====
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navLinks.classList.toggle('open');
            body.classList.toggle('menu-open');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
                body.classList.remove('menu-open');
            });
        });

        document.addEventListener('click', function(e) {
            if (navLinks.classList.contains('open')) {
                const isClickInside = navbar ? navbar.contains(e.target) : false;
                if (!isClickInside && !hamburger.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('open');
                    body.classList.remove('menu-open');
                }
            }
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navLinks.classList.contains('open')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
                body.classList.remove('menu-open');
            }
        });
    }

    // ===== ACTIVE NAV LINK =====
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    console.log('Habib Solvex - Ready!');
});

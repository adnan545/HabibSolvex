// ============================================
// HABIB SOLVEX - MAIN JAVASCRIPT
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
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });
    }

    // ===== CLOSE MOBILE MENU ON LINK CLICK =====
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks) {
                navLinks.classList.remove('open');
            }
        });
    });

    // ===== SET ACTIVE NAV LINK =====
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ===== CONTACT FORM HANDLING =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // Show success message (for static site)
            const successAlert = document.getElementById('successAlert');
            const errorAlert = document.getElementById('errorAlert');
            
            if (successAlert) {
                successAlert.classList.add('show');
                successAlert.style.display = 'flex';
                contactForm.reset();
                
                // Hide after 5 seconds
                setTimeout(() => {
                    successAlert.classList.remove('show');
                    successAlert.style.display = 'none';
                }, 5000);
            }
            
            // Log the data (for demo purposes)
            console.log('Form submitted:', data);
            
            // You can add actual email sending via a service like EmailJS
            // or Formspree here
        });
    }

    // ===== CLOSE ALERT =====
    window.closeAlert = function(id) {
        const alert = document.getElementById(id);
        if (alert) {
            alert.classList.remove('show');
            alert.style.display = 'none';
        }
    };

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // ===== IMAGE GALLERY (for product detail) =====
    function changeImage(el) {
        const mainImage = document.getElementById('mainImage');
        if (mainImage) {
            mainImage.src = el.src;
            document.querySelectorAll('.thumbnails img').forEach(img => img.classList.remove('active'));
            el.classList.add('active');
        }
    }
    window.changeImage = changeImage;

    // ===== QUANTITY SELECTOR =====
    let qty = 1;
    function updateQty(change) {
        qty = Math.max(1, qty + change);
        const qtyDisplay = document.getElementById('qtyDisplay');
        if (qtyDisplay) {
            qtyDisplay.textContent = qty;
        }
    }
    window.updateQty = updateQty;

    // ===== PACKAGING SELECTION =====
    document.querySelectorAll('.packaging-options .option').forEach(opt => {
        opt.addEventListener('click', function() {
            document.querySelectorAll('.packaging-options .option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
        });
    });

    console.log('Habib Solvex website loaded successfully!');
});
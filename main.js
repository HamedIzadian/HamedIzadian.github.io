// ── Scroll reveal ──
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(el => observer.observe(el));
});

// ── Ambient glow ──
const glow = document.getElementById('glow');
if (glow) {
    document.addEventListener('mousemove', (e) => {
        glow.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
    });
}

// ── Mobile menu ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
}

function closeMobile() {
    if (mobileMenu) {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// ── Nav shrink on scroll ──
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) nav.style.padding = window.scrollY > 80 ? '1rem 3rem' : '1.5rem 3rem';
});

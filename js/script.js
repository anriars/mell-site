const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Auto-close on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

const menuLinks = document.querySelectorAll('.main-nav a');
const hamburgerCheckbox = document.getElementById('hamburger-toggle');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburgerCheckbox) hamburgerCheckbox.checked = false;
    });
});

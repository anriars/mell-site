function toggleMenu() {
    document.querySelector('.main-nav').classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const nav = document.querySelector('.main-nav');
    const hamburger = document.querySelector('.hamburger');
    if(nav.classList.contains('active') &&
       !nav.contains(event.target) &&
       !hamburger.contains(event.target)) {
        nav.classList.remove('active');
    }
});

function orderProduct(name) {
    const phone = "995555555555";
    const message = `მინდა შეკვეთა: ${name}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    // ჰამბურგერის კლიკი (გახსნა/დახურვა)
    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('active');
        });
    }

    // მენიუს დახურვა ნებისმიერ ლინკზე დაჭერისას
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // მენიუს დახურვა ცარიელ ადგილას დაჭერისას
    document.addEventListener('click', (e) => {
        if(nav.classList.contains('active') &&
           !nav.contains(e.target) &&
           !hamburger.contains(e.target)) {
            nav.classList.remove('active');
        }
    });
});

// WhatsApp შეკვეთა
function orderProduct(name) {
    const phone = "995555555555"; 
    const message = `გამარჯობა, მინდა შეკვეთა: ${name}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

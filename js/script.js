document.addEventListener('DOMContentLoaded', function () {

    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.main-nav');

    if (!hamburger || !nav) return;

    const navLinks = document.querySelectorAll('.main-nav a');

    // 1️⃣ ჰამბურგერის გახსნა / დახურვა
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        nav.classList.toggle('active');
    });

    // 2️⃣ ლინკზე დაჭერისას დახურვა
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
        });
    });

    // 3️⃣ ცარიელ ადგილას დაჭერისას დახურვა
    document.addEventListener('click', function (e) {
        if (
            nav.classList.contains('active') &&
            !nav.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {
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

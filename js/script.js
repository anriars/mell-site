// ჰამბურგერ მენიუს ლოგიკა
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// მენიუს დახურვა ლინკზე დაჭერისას
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// WhatsApp-ზე შეკვეთის ფუნქცია
function orderProduct(name) {
    const phone = "995555555555"; // აქ ჩაწერე შენი ნომერი
    const message = `გამარჯობა, მინდა შეკვეთა: ${name}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    // 1. მენიუს გახსნა/დაკეტვა ღილაკზე დაჭერისას
    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // ხელს უშლის კლიკის "გაპარვას"
            nav.classList.toggle('active');
        });
    }

    // 2. მენიუს დახურვა ლინკზე დაჭერისას
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // 3. მენიუს დახურვა გვერდზე (ცარიელ ადგილას) დაჭერისას
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = nav.contains(event.target);
        const isClickOnButton = hamburger ? hamburger.contains(event.target) : false;

        // თუ მენიუ ღიაა და კლიკი არც მენიუზეა და არც ღილაკზე -> დახურე
        if (nav.classList.contains('active') && !isClickInsideMenu && !isClickOnButton) {
            nav.classList.remove('active');
        }
    });
});

// WhatsApp შეკვეთის ფუნქცია
function orderProduct(name) {
    const phone = "995555555555"; // აქ ჩაწერე შენი ნომერი
    const message = `გამარჯობა, მინდა შეკვეთა: ${name}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

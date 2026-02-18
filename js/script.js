document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    // 1. ჰამბურგერზე დაჭერა (გახსნა/დახურვა)
    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // ხელს უშლის, რომ კლიკი "გაიპაროს"
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
    document.addEventListener('click', (e) => {
        if(nav.classList.contains('active')){
            if(!nav.contains(e.target) && !hamburger.contains(e.target)){
                nav.classList.remove('active');
            }
        }
    });
});

// WhatsApp შეკვეთა
function orderProduct(name){
    const phone = "995555555555"; 
    const message = `გამარჯობა, მინდა შეკვეთა: ${name}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url,'_blank');
}

document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');
    const overlay = document.getElementById('menuOverlay');

    // 1. ჰამბურგერზე დაჭერა (გახსნა/დახურვა)
    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();

            hamburger.classList.toggle('active'); // ✕ ანიმაცია
            nav.classList.toggle('active');
            overlay.classList.toggle('active');

            // scroll lock
            document.body.style.overflow = 
                nav.classList.contains('active') ? 'hidden' : 'auto';
        });
    }

    // 2. მენიუს დახურვა ლინკზე დაჭერისას
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // 3. Overlay-ზე დაჭერისას დახურვა
    if (overlay) {
        overlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // 4. გვერდზე (ცარიელ ადგილას) დაჭერისას დახურვა
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active')) {
            if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
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

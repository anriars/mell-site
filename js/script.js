document.addEventListener('DOMContentLoaded', () => {

    // უსაფრთხოება — lock-scroll არ დარჩეს
    document.body.classList.remove('lock-scroll');

    // ================= SLIDER =================
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (slides.length) {
        let current = 0;
        let autoplay;

        function goTo(index) {
            slides[current].classList.remove('active');
            if (dots.length) dots[current].classList.remove('active');
            current = (index + slides.length) % slides.length;
            slides[current].classList.add('active');
            if (dots.length) dots[current].classList.add('active');
        }

        function startAutoplay() {
            autoplay = setInterval(() => goTo(current + 1), 5000);
        }

        function resetAutoplay() {
            clearInterval(autoplay);
            startAutoplay();
        }

        const nextBtn = document.getElementById('sliderNext');
        const prevBtn = document.getElementById('sliderPrev');

        if (nextBtn) nextBtn.addEventListener('click', (e) => { e.preventDefault(); goTo(current + 1); resetAutoplay(); });
        if (prevBtn) prevBtn.addEventListener('click', (e) => { e.preventDefault(); goTo(current - 1); resetAutoplay(); });

        dots.forEach(dot => {
            dot.addEventListener('click', () => { goTo(+dot.dataset.index); resetAutoplay(); });
        });

        // მობილურზე swipe
        let touchStartX = 0;
        let touchStartY = 0;
        const slider = document.querySelector('.hero-slider');
        if (slider) {
            slider.addEventListener('touchstart', e => {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            }, { passive: true });

            slider.addEventListener('touchend', e => {
                const diffX = touchStartX - e.changedTouches[0].clientX;
                const diffY = touchStartY - e.changedTouches[0].clientY;
                if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                    goTo(diffX > 0 ? current + 1 : current - 1);
                    resetAutoplay();
                }
            }, { passive: true });
        }

        startAutoplay();
    }

    // ================= HAMBURGER =================
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.main-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = nav.classList.toggle('active');
            hamburger.classList.toggle('active');
            // სქროლი მხოლოდ მენიუს გახსნისას იბლოკება
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });
    }

    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav && nav.classList.remove('active');
            hamburger && hamburger.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('click', (e) => {
        if (nav && nav.classList.contains('active')) {
            if (!nav.contains(e.target) && !(hamburger && hamburger.contains(e.target))) {
                nav.classList.remove('active');
                hamburger && hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

});

// ================= WHATSAPP =================
function orderProduct(name) {
    const phone = "995511441142";
    const message = `გამარჯობა, მინდა შეკვეთა: ${name}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

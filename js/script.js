// ================================================
// პროდუქტების ცენტრალური მონაცემები
// აქ შეცვალე ფასები და ყველა გვერდზე განახლდება!
// ================================================
const PRODUCTS = [
    { name: 'თაფლი თხილით',  oldPrice: 25, newPrice: 19 },
    { name: 'თაფლი ნიგვზით', oldPrice: 27, newPrice: 19 },
    { name: 'თაფლი ნუშით',   oldPrice: 30, newPrice: 19 },
];

function buildProductCard(product) {
    const hasSale = product.newPrice && product.newPrice < product.oldPrice;
    return `
        <div class="product-card">
            <h3>${product.name}</h3>
            ${hasSale ? `<span class="sale-badge">აქცია</span>` : ''}
            ${hasSale
                ? `<div class="price-wrapper">
                       <span class="price-old">${product.oldPrice} ₾</span>
                       <span class="price-new">${product.newPrice} ₾</span>
                   </div>`
                : `<div class="price">${product.oldPrice} ₾</div>`
            }
            <button onclick="orderProduct('${product.name}')" class="btn">შეკვეთა</button>
        </div>`;
}

function renderProducts() {
    const grids = document.querySelectorAll('.products-grid');
    grids.forEach(grid => {
        grid.innerHTML = PRODUCTS.map(buildProductCard).join('');
    });
}

// ================================================
// WhatsApp შეკვეთა
// ================================================
function orderProduct(name) {
    const phone = "995555555555";
    const message = `გამარჯობა, მინდა შეკვეთა: ${name}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// ================================================
// Hamburger მენიუ
// ================================================
document.addEventListener('DOMContentLoaded', () => {
    // პროდუქტების render
    renderProducts();

    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.main-nav');
    const overlay = document.getElementById('menuOverlay');

    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.classList.toggle('lock-scroll');
        });
    }

    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger && hamburger.classList.remove('active');
            document.body.classList.remove('lock-scroll');
        });
    });

    document.addEventListener('click', (e) => {
        if (nav && nav.classList.contains('active')) {
            if (!nav.contains(e.target) && !(hamburger && hamburger.contains(e.target))) {
                nav.classList.remove('active');
                hamburger && hamburger.classList.remove('active');
                document.body.classList.remove('lock-scroll');
            }
        }
    });
});

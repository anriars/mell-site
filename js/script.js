// Hamburger menu auto-close on click
const menuLinks = document.querySelectorAll('.main-nav a');
const hamburgerCheckbox = document.getElementById('hamburger-toggle');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (hamburgerCheckbox) hamburgerCheckbox.checked = false;
  });
});

// Load products from JSON
fetch('admin/products.json')
  .then(res => res.json())
  .then(data => {
    const productsDiv = document.getElementById('products');
    data.forEach(p => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <div class="product-image"><img src="images/${p.image}" alt="${p.name}"></div>
        <div class="product-info">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <div class="price">${p.price} ₾</div>
        </div>
      `;
      productsDiv.appendChild(card);
    });
  });

// Load blog posts from JSON
fetch('admin/blog.json')
  .then(res => res.json())
  .then(data => {
    const blogDiv = document.getElementById('blog-posts');
    data.forEach(post => {
      const card = document.createElement('div');
      card.classList.add('blog-card');
      card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <small>${post.date}</small>
      `;
      blogDiv.appendChild(card);
    });
  });

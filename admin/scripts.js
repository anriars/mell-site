const productsDiv = document.getElementById('products');
const addForm = document.getElementById('addForm');

let products = [];

// JSON ფაილის კითხვის სიმულაცია (ლოკალურად)
fetch('products.json')
  .then(res => res.json())
  .then(data => {
    products = data;
    renderProducts();
  });

function renderProducts() {
  productsDiv.innerHTML = '';
  products.forEach((p, i) => {
    const div = document.createElement('div');
    div.classList.add('product-card');
    div.innerHTML = `
      <strong>${p.name}</strong> - ${p.price} ₾<br>
      ${p.description}<br>
      <em>${p.image}</em><br>
      <button onclick="deleteProduct(${i})">წაშლა</button>
    `;
    productsDiv.appendChild(div);
  });
}

function deleteProduct(index) {
  products.splice(index, 1);
  renderProducts();
}

// ახალი პროდუქტის დამატება (ლოკალურად)
addForm.addEventListener('submit', e => {
  e.preventDefault();
  const newProd = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    price: document.getElementById('price').value,
    image: document.getElementById('image').value
  };
  products.push(newProd);
  renderProducts();
  addForm.reset();
});

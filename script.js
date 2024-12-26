// script.js

let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({product, price});
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.product} - $${item.price.toFixed(2)}</p>`;
    });
    document.getElementById('total').innerText = total.toFixed(2);
}
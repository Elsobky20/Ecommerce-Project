function populateCart() {
    const cartContainer = document.querySelector('.cart-table tbody');
    const cartSummary = document.querySelector('.cart-summary');
    cartContainer.innerHTML = ''; 

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    let subtotal = 0;

    cart.forEach(item => {
        const total = item.price * item.quantity; 
        subtotal += total;
    
        const row = `
            <tr>
                <td><button class="remove-btn">✖</button></td>
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td><input type="number" value="${item.quantity}" class="quantity-input" data-name="${item.name}"></td>
                <td>$${total}</td>
            </tr>
        `;
        cartContainer.insertAdjacentHTML('beforeend', row);
    });
    
    const shipping = 45;  
    const total = subtotal + shipping;

    cartSummary.innerHTML = `
            <div class="summary-row">
                <span>Subtotal:</span>
                <span>$${subtotal}</span>
            </div>
            <div class="summary-row">
                <span>Shipping:</span>
                <span>$${shipping}</span>
            </div>
            <div class="summary-row total">
                <span>Total:</span>
                <span>$${total}</span>
            </div>
            <div class="buttons">
                <button class="update-btn" onclick="updateCart()">Update Cart</button>
                <button class="checkout-btn">Check Out</button>
            </div>
        `;
}

window.onload = populateCart;

document.addEventListener('change', function (event) {
    if (event.target.classList.contains('quantity-input')) {
        const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const itemName = event.target.getAttribute('data-name');
        const newQuantity = parseInt(event.target.value, 10);

        const itemIndex = updatedCart.findIndex(item => item.name === itemName);
        if (itemIndex > -1) {
            updatedCart[itemIndex].quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            populateCart(); 
        }
    }
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-btn')) {
        const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const row = event.target.closest('tr');
        const itemName = row.querySelector('td:nth-child(2)').innerText;

        const newCart = updatedCart.filter(item => item.name !== itemName);
        localStorage.setItem('cart', JSON.stringify(newCart));
        populateCart(); 
    }
});

function updateCart() {
    alert("Cart updated successfully.");
    
}


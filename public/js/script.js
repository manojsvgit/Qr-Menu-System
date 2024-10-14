// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || {};

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.getAttribute('data-item');
    cart[item] = (cart[item] || 0) + 1; // Increment item count
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
    alert(`${item} added to cart!`);
  });
});

// Display order summary if on the order summary page
const summaryContainer = document.getElementById('order-summary');
if (summaryContainer) {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || {};
  summaryContainer.innerHTML = Object.keys(storedCart).length
    ? Object.entries(storedCart).map(([item, qty]) => `<p>${item}: ${qty}</p>`).join('')
    : '<p>Your cart is currently empty.</p>';
}

// Clear the cart part 
document.getElementById('clear-cart')?.addEventListener('click', () => {
    localStorage.removeItem('cart');
    alert('Cart cleared!');
  });
  

// Checkout Button
document.getElementById('checkout')?.addEventListener('click', () => {
  alert('Checkout not implemented yet!');
});

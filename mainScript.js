//Saves variables for cart data
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = parseFloat(localStorage.getItem('total')) || 0;

//Add Items to cart
function addToCart(itemName, itemPrice, itemImage) {
    console.log('Adding to cart:', itemName, itemPrice, itemImage); // Debugging log
    alert('Added to cart');
   
    cart.push({ name: itemName, price: itemPrice, image: itemImage });

    
    total += itemPrice;

  
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', total.toFixed(2));

 
    updateCartUI();
}

// removes items from car
function removeFromCart(index) {
    console.log('Removing from cart:', index); // Debugging log

  
    total -= cart[index].price;

 
    cart.splice(index, 1);

    // Save updated cart and total to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', total.toFixed(2));


    updateCartUI();
}

// This displays the Cart
function updateCartUI() {
    let cartItemsElem = document.getElementById('cart-items');
    let cartTotalElem = document.getElementById('cart-total');

   
    cartItemsElem.innerHTML = '';


    cart.forEach((item, index) => {
        let itemElem = document.createElement('div');
        itemElem.className = 'cart-item';
        itemElem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            ${item.name} - ₱${item.price.toFixed(2)}
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsElem.appendChild(itemElem);
    });

    // This is the total amount of the cart
    cartTotalElem.textContent = total.toFixed(2);
}

// updates the cart items by accessing the thing saved above
document.addEventListener('DOMContentLoaded', updateCartUI);

if(cartTotalElem == 0){
    alert('no items in cart')
} else
{
    
}

function generateRandomNumber() {
    let randomNumber = Math.floor(10000000 + Math.random() * 90000000);
    let formattedNumber = randomNumber.toString().substring(0, 4) + '-' + randomNumber.toString().substring(4);
    return formattedNumber;
}
function OrderProcessed() {
    let randomFormattedNumber = generateRandomNumber();
    alert("Order: " + randomFormattedNumber + " is now being processed.\n\nThank you for shopping and supporting\nBe The Locals!!");
}

function checkCartAndProcess() {
    if (cart.length === 0) {
        alert('No items in cart. Please add items before processing.');
    } else {
        OrderProcessed();
    }
}

// This Loads Last page so it wont get overflwode
function setMainPageState() {
    history.pushState({ page: 'main' }, null, 'MainPage.html');
}

window.addEventListener('popstate', function(event) {
    if (!event.state || (event.state && event.state.page !== 'main')) {
        window.location.href = 'MainPage.html';
    }
});
setMainPageState();
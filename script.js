// Selecting the elements
let addElement = document.getElementById('additemsdiv');  // Button to add items
let removeElement = document.getElementById('removeitemsdiv');  // Button to remove items
let counter = 0;  // Outer counter value that tracks the total items in the cart
let contentDisplay = document.getElementById('items');  // Element where the counter is displayed

// Event listener for adding an item
addElement.addEventListener('click', function() {
    if (counter >= 9) {
        alert("Dear user, you can add only 9 items into your cart");
    } else {
        counter++;  // Increment the counter
        contentDisplay.textContent = counter;  // Update the counter display
    }
});

// Event listener for removing an item
removeElement.addEventListener('click', function() {
    if (counter === 0) {
        alert("Dear user, you have to add items to the cart in order to remove");
    } else {
        counter--;  // Decrement the counter
        contentDisplay.textContent = counter;  // Update the counter display
    }
});

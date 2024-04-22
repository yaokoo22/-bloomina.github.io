// Function to decrease the value
function decreaseValue(button) {
    var input = button.nextElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value = value <= 0 ? 0 : value - 1;
    input.value = value;

    // Check if the value is zero, and if so, make the input invalid
    if (value === 0) {
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
    }
}

// Function to increase the value
function increaseValue(button) {
    var input = button.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}


// Get all elements with class 'value-button' and attach event listeners
var buttons = document.querySelectorAll('.value-button');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var input = this.parentNode.querySelector('.quantity'); // Find the associated input element
        if (this.textContent === '-') {
            decreaseValue(this); // Pass the button element to decreaseValue function
        } else {
            increaseValue(this); // Pass the button element to increaseValue function
        }
    });
});

//Total section
function increaseValue(element) {
    const inputElement = element.previousElementSibling;
    inputElement.value = parseInt(inputElement.value) + 1;
    updateTotal();
}

function decreaseValue(element) {
    const inputElement = element.nextElementSibling;
    if (parseInt(inputElement.value) > 0) {
        inputElement.value = parseInt(inputElement.value) - 1;
        updateTotal();
    }
}

function updateTotal() {
    const flowerItems = document.querySelectorAll('.grid-item');
    let totalPrice = 0;

    flowerItems.forEach(item => {
        const price = parseFloat(item.querySelector('.price').textContent.replace('₱', ''));
        const quantity = parseInt(item.querySelector('input[type="number"]').value);
        totalPrice += price * quantity;
    });

    const totalElement = document.querySelector('.total');
    totalElement.textContent = `Total: ₱${totalPrice.toFixed(2)}`;

    const checkoutButton = document.getElementById('checkoutButton');
    if (totalPrice > 0) {
        checkoutButton.removeAttribute('disabled');
    } else {
        checkoutButton.setAttribute('disabled', true);
    }
}

///Wrapper Section


document.addEventListener('DOMContentLoaded', function() {
    // Get all wrapper items
    var wrapperImages = document.querySelectorAll('.wrapper-item img');
    var wrapperImages = document.querySelectorAll('.wrapper-item img');
    var wrapperImages = document.querySelectorAll('.wrapper-item img');

    // Add click event listener to each wrapper image
    wrapperImages.forEach(function(img) {
        img.addEventListener('click', function() {
            // Remove 'selected' class from all wrapper items
            wrapperImages.forEach(function(img) {
                img.closest('.wrapper-item').classList.remove('selected');
            });

            // Add 'selected' class to the parent wrapper item
            this.closest('.wrapper-item').classList.add('selected');

            // Call function to handle selection
            selectWrapper(this.src);
        });
    });

    // Function to handle wrapper selection
    function selectWrapper(imageUrl) {
        // You can perform actions with the selected wrapper here
        console.log("Selected wrapper:", imageUrl);

        // Display the selected wrapper image
        var selectedWrapperImage = document.getElementById('selectedWrapperImage');
        selectedWrapperImage.src = imageUrl;
        selectedWrapperImage.alt = "Selected Wrapper"; // Optional: Set alt text for accessibility
    }
});
    


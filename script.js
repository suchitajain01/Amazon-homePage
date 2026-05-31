console.log("Script Loaded");

// CART
const cartButtons = document.querySelectorAll(".add-cart");

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartCounter = document.getElementById("cart-count");

if (cartCounter) {
    cartCounter.innerText = cartItems.length;
}

cartButtons.forEach(function(button) {

    const productId = button.dataset.id;

    // Restore state after refresh
    if (cartItems.includes(productId)) {
        button.innerText = "Added";
        button.classList.add("added");
    }

    button.addEventListener("click", function() {

        if (button.classList.contains("added")) {

            button.classList.remove("added");
            button.innerText = "Add To Cart";

            cartItems = cartItems.filter(id => id !== productId);

        } else {

            button.classList.add("added");
            button.innerText = "Added";

            cartItems.push(productId);
        }

        localStorage.setItem(
            "cartItems",
            JSON.stringify(cartItems)
        );

        if (cartCounter) {
            cartCounter.innerText = cartItems.length;
        }
    });
});


// WISHLIST
const wishlistButtons = document.querySelectorAll(".add-wishlist");

let wishlistItems =
    JSON.parse(localStorage.getItem("wishlistItems")) || [];

const wishlistCounter =
    document.getElementById("wishlist-count");

if (wishlistCounter) {
    wishlistCounter.innerText = wishlistItems.length;
}

wishlistButtons.forEach(function(button) {

    const productId = button.dataset.id;

    // Restore state after refresh
    if (wishlistItems.includes(productId)) {
        button.innerText = "Added";
        button.classList.add("liked");
    }

    button.addEventListener("click", function() {

        if (button.classList.contains("liked")) {

            button.classList.remove("liked");
            button.innerText = "Wishlist";

            wishlistItems =
                wishlistItems.filter(id => id !== productId);

        } else {

            button.classList.add("liked");
            button.innerText = "Added";

            wishlistItems.push(productId);
        }

        localStorage.setItem(
            "wishlistItems",
            JSON.stringify(wishlistItems)
        );

        if (wishlistCounter) {
            wishlistCounter.innerText =
                wishlistItems.length;
        }
    });
});

const signinBtn = document.getElementById("btn2");

if(signinBtn){
    signinBtn.addEventListener("click", function(){
        window.location.href = "signin.html";
    });
}


const logoutBtn = document.getElementById("btn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {

        localStorage.removeItem("cartItems");
        localStorage.removeItem("wishlistItems");
        localStorage.clear();

        alert("Logged Out Successfully");

        window.location.href = "projectST1.html";
    });
}
console.log("Signin code loaded")



const profileName = document.getElementById("profile-name");

const username = localStorage.getItem("username");

if (profileName && username) {
    profileName.innerText = username;
}
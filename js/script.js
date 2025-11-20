// REQUIREMENT: Console Log 1 - Verifies the script loaded
console.log("ConceptLearn Website Loaded Successfully");

// Function for "Add to Cart" buttons
function addToCart() {
    // REQUIREMENT: Console Log 2 - Logs user interaction
    console.log("User clicked Add to Cart button");
    
    // REQUIREMENT: Alert 1 - Success Notification
    alert("Success! Item added to your cart.");
}

// Function for Login Form
function validateLogin(event) {
    event.preventDefault(); // Stops the page from refreshing
    
    const emailInput = document.getElementById('email').value;
    
    // REQUIREMENT: Console Log 3 - Debugging input data
    console.log("Attempting login with email: " + emailInput);

    if(emailInput.includes("@")) {
        // REQUIREMENT: Alert 2 - Success
        alert("Login Successful! Welcome back.");
        window.location.href = "index.html"; // Redirects to home
    } else {
        // REQUIREMENT: Alert 3 - Error Handling
        alert("Error: Please enter a valid email address.");
    }
}
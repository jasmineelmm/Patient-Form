/* 
 Program:   Patient Registration Form Validation 
 Author:    Jasmine Elmiloudi
 Date Modified: 2024-12-4
 Description: This JavaScript file contains functions for 
              validating form inputs, handling events, 
              and displaying user feedback based on 
              their input.
*/

window.onload = function() {
    // Display current date
    displayCurrentDate();

    // Initialize slider value
    updateSliderValue();

    // Set up dynamic validation
    setupDynamicValidation();

    // Handle "Remember Me" functionality and dynamic greeting
    handleRememberMe();
};

// Function to display the current date
function displayCurrentDate() {
    const currentDateElement = document.getElementById("currentDate");
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.textContent = currentDate.toLocaleDateString('en-US', options);
}

// Function to update slider display value
function updateSliderValue() {
    const slider = document.getElementById("dynamicSlider");
    const sliderValue = document.getElementById("sliderValue");
    sliderValue.textContent = slider.value;

    slider.addEventListener("input", function () {
        sliderValue.textContent = slider.value;
    });
}

// Set up dynamic validation for various fields
function setupDynamicValidation() {
    const firstNameField = document.getElementById("firstName");
    const phoneField = document.getElementById("phone");
    const zipField = document.getElementById("zip");

    // First name validation
    firstNameField.addEventListener("input", function () {
        const firstNameError = document.getElementById("firstNameError");
        if (firstNameField.value.length < 3) {
            firstNameError.textContent = "First name must be at least 3 characters long.";
        } else {
            firstNameError.textContent = "";
        }
    });

    // Phone number validation
    const phonePattern = /^[2-9]\d{2}-\d{3}-\d{4}$/;
    phoneField.addEventListener("input", function () {
        const phoneError = document.getElementById("phoneError");
        if (!phonePattern.test(phoneField.value)) {
            phoneError.textContent = "Phone number must be in the format XXX-XXX-XXXX.";
        } else {
            phoneError.textContent = "";
        }
    });

    // Zip code validation
    zipField.addEventListener("input", function () {
        const zipError = document.getElementById("zipError");
        const zipPattern = /^\d{5}$/;
        if (!zipPattern.test(zipField.value)) {
            zipError.textContent = "Zip code must be exactly 5 digits.";
        } else {
            zipError.textContent = "";
        }
    });
}

// Handle "Remember Me" functionality and greeting
function handleRememberMe() {
    const firstNameField = document.getElementById("first-name");
    const rememberMeCheckbox = document.getElementById("remember-me");

    // Check if a cookie exists
    const firstName = getCookie("firstName");
    if (firstName) {
        document.getElementById("greeting").innerText = `Hello ${firstName}`;
        firstNameField.value = firstName;

        // Show dynamic checkbox for "Not [Name]"
        createNewUserCheckbox(firstName, firstNameField);
    } else {
        document.getElementById("greeting").innerText = "Welcome New User";
    }

    // Save or delete cookie based on Remember Me checkbox
    document.getElementById("form").onsubmit = function () {
        if (rememberMeCheckbox.checked) {
            document.cookie = `firstName=${firstNameField.value}; max-age=172800`; 
        } else {
            document.cookie = "firstName=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        }
    };
}

// Helper function to create the "Not [Name]" checkbox
function createNewUserCheckbox(firstName, firstNameField) {
    const newUserCheckbox = document.createElement("input");
    newUserCheckbox.type = "checkbox";
    newUserCheckbox.id = "new-user";
    newUserCheckbox.onclick = function () {
        document.cookie = "firstName=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        firstNameField.value = "";
        document.getElementById("greeting").innerText = "Welcome New User";
    };
    document.getElementById("header").appendChild(newUserCheckbox);
    document.getElementById("header").appendChild(document.createTextNode(" Not " + firstName + "? Click here."));
}

// Helper function to get a cookie's value
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

// Function to set min and max date for Date of Birth field dynamically
function setDateOfBirthLimits() {
    const today = new Date();
    
    // Calculate max date as today's date
    const maxDate = today.toISOString().split('T')[0]; // YYYY-MM-DD format
    
    // Calculate min date (18 years ago from today)
    today.setFullYear(today.getFullYear() - 18);
    const minDate = today.toISOString().split('T')[0]; // YYYY-MM-DD format

    // Set min and max attributes for the Date of Birth input
    const dobInput = document.getElementById('dob');
    dobInput.setAttribute('min', minDate);
    dobInput.setAttribute('max', maxDate);
}

// Call the function when the window loads to set date limits
window.onload = setDateOfBirthLimits;

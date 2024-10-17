// Set the current date in the header
document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date().toLocaleDateString();
    document.getElementById("currentDate").textContent = `Today is: ${currentDate}`;
});

// Display the health scale value dynamically
document.getElementById("salary").addEventListener("input", function () {
    document.getElementById("salaryValue").


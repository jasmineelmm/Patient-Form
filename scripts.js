/* 
 Program:   Simple Sample Registration Form Validation 
 Author:    Jasmine Elmiloudi
 Date Modified: 2024-10-17
 Description: This JavaScript file contains functions for 
              validating form inputs, handling events, 
              and displaying user feedback based on 
              their input. 
*/

 // Set the current date in the header
document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date().toLocaleDateString();
    document.getElementById("currentDate").textContent = `Today is: ${currentDate}`;
});

// Display the health scale value dynamically
document.getElementById("salary").addEventListener("input", function () {
    document.getElementById("salaryValue").


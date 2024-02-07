// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#calculateBtn').click(function () {
        // Retrieve the input value
        var hours = parseFloat($('#hours').val());

        // Check if the input is a positive number
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid positive number for hours.");
            return;
        }
       
        // Calculate the total
        var hourlyRate = 20; // Assuming $20 per hour
        var total = hours * hourlyRate;

        // Display the total in the output box
        $('#total').val("$" + total.toFixed(2));
    });
});
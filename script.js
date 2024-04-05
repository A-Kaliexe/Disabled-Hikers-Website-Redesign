document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle the visibility of the dropdown menu
    document.getElementById("menuButton").addEventListener("change", function () {
    if (this.checked) {
        document.querySelector(".nav-menu").classList.add("dropped"); // Add dropped class to show the dropdown menu
    } else {
        document.querySelector(".nav-menu").classList.remove("dropped"); // Remove dropped class to hide the dropdown menu
    }
    });

    // Function to change the nav-bar on scroll
    window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
        document.querySelector(".fixed-nav-bar").classList.add("scrolled");
    } else {
        document.querySelector(".fixed-nav-bar").classList.remove("scrolled");
    }
    });
});

// Form validation
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var firstName = document.getElementById('first-name').value.trim();
    var lastName = document.getElementById('last-name').value.trim();
    var email = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();

    var errorDiv = document.getElementById('error'); // Error div for displaying concatenated error messages
    errorDiv.textContent = ''; // Clear previous error messages

    var errors = [];

    if (firstName === '') {
        errors.push('First name is required');
    }

    if (lastName === '') {
        errors.push('Last name is required');
    }

    if (email === '') {
        errors.push('Email is required');
    }

    if (subject === '') {
        errors.push('Subject is required');
    }

    if (message === '') {
        errors.push('Message is required');
    }

    if (errors.length > 0) {
        // Concatenate error messages and display them in the error div
        errorDiv.textContent = errors.join(', ');
    } else {
        // Submit the form if there are no errors
        document.getElementById('form').submit();
    }
});

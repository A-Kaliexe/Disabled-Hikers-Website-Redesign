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

/* HOME PAGE - START (I forget what exactly it impacts) */

$(document).ready(function () {
  $(".box").mousemove(function (e) {
    var window = $(this);
    var x_axis = e.pageX - window.offset().left;
    $(".mask").css({
      left: x_axis,
    });
  });
});

/* HOME PAGE - END (I forget what exactly it impacts) */
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

/*/swiper slider
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // Add event listener for slide change
  swiper.on("slideChange", function () {
    console.log("Slide changed");
  });
});*/
//slider for community
let currentIndex=0;
cont slides = document.querySelesctorAll('.slide')
function

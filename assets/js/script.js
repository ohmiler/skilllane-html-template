const hamburgerIcon = document.getElementById("hamburgerIcon");
const mobileMenu = document.getElementById("mobileMenu");
// Get the backtotop button
let mybutton = document.getElementById("backToTop");

console.log(hamburgerIcon, mobileMenu)

hamburgerIcon.addEventListener("click", () => {
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
})

// Toggle hamburger menu icon
function toggleHamburgerIcon(el) {
    el.classList.toggle("change");
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
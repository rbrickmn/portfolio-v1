let topButton = document.getElementById("js-top-btn");

// When the user scrolls 20px down from the top of the document, display the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "initial";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari browser
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera browsers
}
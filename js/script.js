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

// When the user interacts with the hamburger menu icon, toggle the mobile header menu
function toggleMenu() {
  const mobileHeader = document.querySelector('.mobile-header');
  if (mobileHeader.style.display === 'flex') {
    mobileHeader.style.display = 'none';
  } else {
    mobileHeader.style.display = 'flex';
  }
}

// Detects if the user resized the window while the mobile header is open, solving a bug where the header incorrectly displays after reaching the breakpoint of 820px

window.addEventListener('resize', function() {
  const mobileHeader = document.querySelector('.mobile-header');
  const windowWidth = window.innerWidth;
  const desktopBreakpoint = 820;

  // If the window width is greater than or equal to the desktop breakpoint of 820px, change mobileHeader's display property back to none
  if (windowWidth >= desktopBreakpoint) {
    mobileHeader.style.display = 'none';
  }
});

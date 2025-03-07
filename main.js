function updateParallax() {
    var scroll = window.pageYOffset;
    var screenWidth = window.innerWidth; // Get the current screen width

    var layer1 = document.getElementById('bottom-cloud');
    var layer2 = document.getElementById('top-cloud');
    var layer3 = document.getElementById('mountain');

    // Adjust values dynamically based on screen size
    var leftOffset1 = screenWidth < 600 ? 2 : screenWidth < 900 ? 8 : 15;
    var leftOffset2 = screenWidth < 600 ? 65 : screenWidth < 900 ? 70 : 75;
    var topOffset3 = screenWidth < 600 ? 60 : screenWidth < 900 ? 50 : 41;

    layer1.style.left = (leftOffset1 + scroll / 30) + '%';
    layer2.style.left = (leftOffset2 + scroll / 30) + '%';
    layer3.style.top = (topOffset3 + scroll / 10) + '%';
}

// Add a single scroll event listener
window.addEventListener('scroll', updateParallax);

// Run once on page load and on resize to apply initial positions
updateParallax();
window.addEventListener('resize', updateParallax);


// Back to top arrow
window.onscroll = function () {
    let button = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  



  
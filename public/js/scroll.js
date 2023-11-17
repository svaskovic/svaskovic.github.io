// scroll script.js
document.getElementById('learn-more-btn').addEventListener('click', function (event) {
  event.preventDefault();

  var targetSection = document.getElementById('learn-more');

  // Scroll to the target section with a slow scroll animation
  scroll({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
});
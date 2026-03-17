// Making Navbar Responsive
$(document).ready(function () {
  $('.hamburger i').click(function () {
    $(this).toggleClass('fa-times');
    $('.nav-links').toggleClass('mobile-view');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  fetch('footer.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('footer').innerHTML = data;

      // set current year
      const year = document.getElementById('year');
      if (year) {
        year.textContent = new Date().getFullYear();
      }
    })
    .catch((error) => console.error('Error loading footer:', error));
});

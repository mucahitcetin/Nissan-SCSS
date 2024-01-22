document.addEventListener('DOMContentLoaded', function () {
  var toggleButton = document.getElementById('toggle-button');
  var menu = document.querySelector('.menu');

  toggleButton.addEventListener('click', function () {
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  });
});
var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
let menuAct = document.querySelector('.toggle-menu');
let menu = document.querySelector('.nav-list-item');

toggleButton.addEventListener('click', function () {
  navBar.classList.toggle('toggle');

  menuAct.classList.contains('rotate')
    ? menuAct.classList.remove('rotate')
    : menuAct.classList.add('rotate');

  menu.classList.add('active');
});

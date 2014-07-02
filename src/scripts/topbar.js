'use strict';

// menu

var toggleButton = document.querySelector('.page-topbar-nav-toggle-button');
var menu = document.querySelector('.page-topbar-links');
var getDuration = require('transition-duration');
var menuTimer;

toggleButton.addEventListener('click', function (e) {
  e.preventDefault();

  clearTimeout(menuTimer);

  if (menu.classList.contains('display')
    || menu.classList.contains('show')) {
    closeMenu();
  } else {
    openMenu();
  }
});

function openMenu() {
  menu.classList.add('display');

  setTimeout(function () {
    menu.classList.add('show');
  }, 0);
}

function closeMenu() {
  var duration = getDuration(menu);

  menu.classList.remove('show');

  menuTimer = setTimeout(function () {
    menu.classList.remove('display');
  }, duration);
}

//makes 'hamburger' menu button clickable and changeable
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

//makes close button on modal clickable
const modalMenuButton = document.querySelector('.modal-menu-btn');
const loginBox = document.querySelector('.login-box');

//menu section does stuff
//initial state of menu is hidden
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    showMenu = true;
    console.log('close menu active');
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    showMenu = false;
    console.log('open menu active');
  }
}

//login click event handler
modalMenuButton.addEventListener('click', closeModal);

let showLoginBox = false;

function closeModal() {
  if (!showLoginBox === false) {
    loginBox.classList.add('show');
    showLoginBox = true;
    console.log('close button is visible');
  } else {
    loginBox.classList.remove('show');
    showLoginBox = false;
    console.log('close button is not visible');
  }
}

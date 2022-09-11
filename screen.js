const regular = document.querySelector('.header-wide');
const mobile = document.querySelector('.header-mobile');
const body = document.querySelector('#body');

if (window.innerWidth < 1000) {
  regular.style.display = 'none';
  mobile.style.display = 'flex';
} else {
  mobile.style.display = 'none';
  regular.style.display = 'flex';
}

function changeHeader() {
  if (window.innerWidth < 1000) {
    regular.style.display = 'none';
    mobile.style.display = 'flex';
  } else {
    mobile.style.display = 'none';
    regular.style.display = 'flex';
  }
}

window.onresize = changeHeader;

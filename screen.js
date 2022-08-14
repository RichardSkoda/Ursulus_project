const regular = document.querySelector('.header-wide');
const mobile = document.querySelector('.header-mobile');
const body = document.querySelector('#body');

if (window.innerWidth < 880) {
  regular.remove();
  body.appendChild(mobile);
} else {
  mobile.remove();
  body.appendChild(regular);
}

function changeHeader() {
  if (window.innerWidth < 880) {
    regular.remove();
    body.appendChild(mobile);
  } else {
    mobile.remove();
    body.appendChild(regular);
  }
}

window.onresize = changeHeader;

const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerLink = document.querySelector('.hamburger-link');
const hamburgerIconContainer = document.querySelector('.haburger-icon-container');


console.log(hamburgerMenu);
console.log(hamburgerIconContainer);

hamburgerLink.addEventListener('click', function () {
  hamburgerMenu.classList.toggle('active');
  // moveble hambuirger menu or not?????
  if (hamburgerMenu.classList[1] === 'active') {
    hamburgerIconContainer.style.marginLeft = '27%';
  } else {
    hamburgerIconContainer.style.marginLeft = '2%';
  }
})



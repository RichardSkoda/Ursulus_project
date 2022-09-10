const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerLink = document.querySelector('.hamburger-link');
const hamburgerIconContainer = document.querySelector('.hamburger-icon-container');

const navigationBtn = document.querySelectorAll('.sidebar-link');


hamburgerLink.addEventListener('click', function () {
  hamburgerMenu.classList.toggle('active');
  // moveble hambuirger menu or not?????
  // if (hamburgerMenu.classList[1] === 'active') {
  //   hamburgerIconContainer.style.marginLeft = '27%';
  // } else {
  //   hamburgerIconContainer.style.marginLeft = '2%';
  // }
})


navigationBtn.forEach(function (link) {
  link.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('active');
    hamburgerIconContainer.style.marginLeft = '2%';
    console.log(navigationBtn);
  })
})


const sidebar = document.querySelector('.sidebar');
const sidebarsLi = document.getElementsByClassName('sidebar-li');
const sidebarsA = document.getElementsByClassName('sidebar-a');

const pageTitle = document.querySelector('#title');

let cat = localStorage.getItem('active');

function enableSidebar() {
  if (pageTitle.text === 'Ursulus- galery' && cat === 'no') {
    sidebar.classList.toggle('active');
    localStorage.setItem('active', 'yes')
  } else if (pageTitle.text === 'Ursulus- galery' && cat === 'yes') {
    sidebar.style.width = '175px';
    sidebar.style.transition = 'all 0s';
    for(let i = 0; i < sidebarsLi.length; i++) {
      sidebarsLi[i].style.marginLeft = '0';
      sidebarsLi[i].transition = 'all 0s';
    };
    for(let j = 0; j < sidebarsLi.length; j++) {
      sidebarsA[j].style.left = '0';
      sidebarsA[j].style.transition = 'all 0s';
    };
  }
  if (pageTitle.text != 'Ursulus- galery' && cat === 'yes') {
    sidebar.classList.toggle('active');
    localStorage.setItem('active', 'no')
  } else if (pageTitle.text != 'Ursulus- galery' && cat === 'no') {
    console.log(sidebarsLi);
    console.log(sidebarsA);
    sidebar.style.width = '0';
    sidebar.style.transition = 'all 0s';
    for(let i = 0; i < sidebarsLi.length; i++) {
      sidebarsLi[i].style.marginLeft = '-15px';
      sidebarsLi[i].transition = 'all 0s';
    };
    for(let j = 0; j < sidebarsLi.length; j++) {
      sidebarsA[j].style.left = '-90px';
      sidebarsA[j].style.transition = 'all 0s';
    };
  };
}

enableSidebar();
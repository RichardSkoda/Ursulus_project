let sidebar = document.querySelector('.sidebar');
let mainBtn = document.querySelector('#main-btn');
let productionBtn = document.querySelector('#production-btn');
let logoBtn = document.querySelector('.main-logo');
let galeryBtn = document.querySelector('#galery-btn');
let contactBtn = document.querySelector('#contact-btn');

function addToggle(event) {
  event.preventDefault()
  console.log(event)
  console.log(sidebar);
  sidebar.classList.toggle('active')
};

let sidebarOn = false;

if (sidebarOn === false) {
  console.log(sidebar.classList.length);
  galeryBtn.onclick = addToggle;
  
  } else {
    
  }




/*
mainBtn.onclick = function(event) {
  event.preventDefault()
  console.log(sidebar)
  sidebar.classList.toggle('active')
};

productionBtn.onclick = function(event) {
  event.preventDefault()
  sidebar.classList.toggle('active')
};

logoBtn.onclick = function(event) {
  event.preventDefault()
  sidebar.classList.toggle('active')
};

galeryBtn.onclick = function(event) {
  event.preventDefault()
  sidebar.classList.toggle('active')
};

contactBtn.onclick = function(event) {
  event.preventDefault()
  sidebar.classList.toggle('active')
};
*/
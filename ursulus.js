let sidebar = document.querySelector('.sidebar');
let mainBtn = document.querySelector('#main-btn');
let productionBtn = document.querySelector('#production-btn');
let logoBtn = document.querySelector('.main-logo');
let galeryBtn = document.querySelector('#galery-btn');
let contactBtn = document.querySelector('#contact-btn');

// add conditions to move sidebar only by first click
galeryBtn.onclick = function(event) {
  event.preventDefault();     // how to refresh page and move sidebar together???
  console.log(sidebar);
  sidebar.classList.toggle('active');
}


function removeSidebar() {
  event.preventDefault();
  console.log(sidebar);
  sidebar.classList.remove('active');
};

mainBtn.onclick = function() {
  removeSidebar()
};
productionBtn.onclick = function() {
  removeSidebar()
};
logoBtn.onclick = function() {
  removeSidebar()
};
contactBtn.onclick = function() {
  removeSidebar()
};

let sidebar = document.querySelector('.sidebar');
let mainBtn = document.querySelector('#main-btn');
let productionBtn = document.querySelector('#production-btn');
let logoBtn = document.querySelector('.main-logo');
let galeryBtn = document.querySelector('#galery-btn');
let contactBtn = document.querySelector('#contact-btn');

const pageTitle = document.querySelector('#title');

function removeSidebar() {
  event.preventDefault();
  sidebar.classList.remove('active');
};

// pocitat a resetovat onclick. Kdyz kliknuto 1, sidebar vyleze. kdyz vicekrat, zustava na miste. Kdyz kliknuto na jiny odkaz, hodnota se vuresetuje

// nejak zakazat kliknuti na a tag link (galery), kdyz jsem na strance galery

if (pageTitle.text === 'Ursulus- galery') {
  galeryBtn.style.pointerEvents = 'none';
}

function enableSidebar() {
  if (pageTitle.text === 'Ursulus- galery') {
    sidebar.classList.toggle('active');
  };
  if (pageTitle.text != 'Ursulus- galery') {
    sidebar.classList.toggle('active');
  }
};

enableSidebar();


// funguje, ale nerefresuje stranku. kdzy ano, nevylejza sidebar

/*
function enableSidebar() {
  event.preventDefault();
  if (sidebar.classList.length === 1) {
    sidebar.classList.toggle('active');
  };
};

function removeSidebar() {
  event.preventDefault();
  sidebar.classList.remove('active');
};

galeryBtn.onclick = function() {
  setTimeout(function(){ location.reload() }, 3000);
  enableSidebar()
};

mainBtn.onclick = function() {    // how to refresh page and move sidebar together???
  setTimeout(function(){ location.reload() }, 3000);
  removeSidebar()
};
productionBtn.onclick = function() {
  setTimeout(function(){ location.reload() }, 3000);
  removeSidebar()
};
logoBtn.onclick = function() {
  setTimeout(function(){ location.reload() }, 3000);
  removeSidebar()
};
contactBtn.onclick = function() {
  setTimeout(function(){ location.reload() }, 3000);
  removeSidebar()
};

*/
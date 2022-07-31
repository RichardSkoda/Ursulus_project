let sidebar = document.querySelector('.sidebar');
let mainBtn = document.querySelector('#main-btn');
let productionBtn = document.querySelector('#production-btn');
let logoBtn = document.querySelector('.main-logo');
let galeryBtn = document.querySelector('#galery-btn');
let contactBtn = document.querySelector('#contact-btn');

// try to move sidebar according page title
const galeryTitle = document.querySelector('#title');

function removeSidebar() {
  event.preventDefault();
  sidebar.classList.remove('active');
};

/* co takhle udelat 2x sidebar.css. 1x pouzit aktualni pro galery a pro ostatni pouzit to same, ale otocene chovani pro active a non active
takto by bylo pro ostatni

.sidebar ul li {
  margin-left: 0;
  list-style-type: none;
  cursor: pointer;
  padding: 25px 10px;
  transition: all 0.7s ease;
}

.sidebar.active ul li {       tady mozna napsat deactive, at se to pak v js neplete
  margin-left: -15px;
}
*/

function enableSidebar() {
  console.log(galeryTitle.text)
  console.log(sidebar)
  if (galeryTitle.text === 'Ursulus- galery' && sidebar.classList.length === 1) {
    sidebar.classList.toggle('active');
    console.log(sidebar)
  };
  if (galeryTitle.text != 'Ursulus- galery') {
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
const img1 = document.querySelector('.tool-img1');
const img2 = document.querySelector('.tool-img2');
const img3 = document.querySelector('.tool-img3');
const img4 = document.querySelector('.tool-img4');

// get coordinates of an image in document
function findPos(img) {
	let curleft = curtop = 0;

  if (img.offsetParent) {
    do {
			curleft += img.offsetLeft;
			curtop += img.offsetTop;
    } while (img = img.offsetParent);
    return [curleft,curtop];
  }
}

window.addEventListener('scroll', function(event) {
  scrolled = this.window.scrollY;
  
  // change img style when image is in middle of a window
  if(scrolled >= (findPos(img1)[1]) - (this.window.innerHeight / 2)){
    img1.style = 'transform: rotate(0); opacity: 1; transition: all 1s ease'
  }
  if(scrolled >= (findPos(img2)[1]) - (this.window.innerHeight / 2)){
    img2.style = 'transform: rotate(0); opacity: 1; transition: all 1s ease'
  }
  if(scrolled >= (findPos(img3)[1]) - (this.window.innerHeight / 2)){
    img3.style = 'transform: rotate(0); opacity: 1; transition: all 1s ease'
  }
  if(scrolled >= (findPos(img4)[1]) - (this.window.innerHeight / 2)){
    img4.style = 'transform: rotate(0); opacity: 1; transition: all 1s ease'
  }

});
const img1 = document.querySelector('.tool-img1');
const img2 = document.querySelector('.tool-img2');
const img3 = document.querySelector('.tool-img3');
const img4 = document.querySelector('.tool-img4');


//get Y coordinate of image
let rect1 = img1.getBoundingClientRect();
let cy1 = rect1.top * 0.5;

let rect2 = img2.getBoundingClientRect();
let cy2 = rect2.top * 0.5;

let rect3 = img3.getBoundingClientRect();
let cy3 = rect3.top * 0.5;

let rect4 = img4.getBoundingClientRect();
let cy4 = rect4.top * 0.5;

// image get bigger after rotate to end position => need to add difference of heigh
const imgHeight = img1.height;
console.log(img1)
console.log(imgHeight)

window.addEventListener('scroll', function(event) {
  scrolled = window.scrollY;

  if(scrolled >= cy1){
    img1.style = 'transform: rotate(0); transition: all 1s ease'
  }
  if(scrolled >= cy2 + (imgHeight * 0.8)){
    img2.style = 'transform: rotate(0); transition: all 1s ease'
  }
  if(scrolled >= cy3 + (imgHeight * 1.4)){
    img3.style = 'transform: rotate(0); transition: all 1s ease'
  }
  if(scrolled >= cy4 + (imgHeight * 2)){
    img4.style = 'transform: rotate(0); transition: all 1s ease'
  }
});
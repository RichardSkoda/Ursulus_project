const productImg = document.querySelector('.thumbnail');
const mainContent = document.querySelector('body');

productImg.addEventListener('click', function(event) {
  event.preventDefault();

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.style.display = 'block';

  mainContent.appendChild(overlay);

  const mainDivContainer = document.createElement('div');
  mainDivContainer.classList.add('main-div');

  overlay.appendChild(mainDivContainer);

  const imgDiv = document.createElement('div');
  
  mainDivContainer.appendChild(imgDiv);
  imgDiv.classList.add('img-div')
  
  const imgProduct = document.createElement('img');
  imgProduct.src = 'Images_product/Sperky/Prsteny/PrstenA/prsten.jpg';
  imgProduct.classList.add('img-product');

  imgDiv.appendChild(imgProduct);

  const productInfo = document.createElement('p');
  productInfo.textContent = 'Šperky z nerezového damašku se zde objevují s pravidelností, která obvykle kopíruje svatební sezonu. Jsou v mnoha tvarech a kombinacích technik. Povětšinou se setkáváte se snahou kresbu zvýraznit patinací, ale v tomto případě případě mi materiál poskytnul úplně jinou možnost. Vzorovaná damascenská ocel je složena ze dvou slitin a každá jinak reaguje při působení kyselin, Tím dochází k přednostnímu leptání méně odolné slitiny a zvýraznění kresby. Jednou z možností je tak cílené výraznější leptání. To bylo použito i v tomto případě a následné rozleštění takto upraveného povrchu vytvoří velmi jemnou a na dotyk příjemnou povrchovou texturu. Vzor typu aztec z dílny Futuron  forge, který jsem na tuto práci měl možnost použít si nový postup zpracování jistě zasloužil. Co na ně říkáte?';
  productInfo.classList.add('product-info');

  mainDivContainer.appendChild(productInfo);

  const closeButton = document.createElement('a');
  closeButton.innerHTML = '<span>&times;</span>';
  closeButton.classList.add('close-button');
  closeButton.getAttribute('onclick');
  closeButton.onclick = closeModal;

  mainDivContainer.appendChild(closeButton);

  const backButton = document.createElement('a');
  backButton.innerHTML = '<span>&#10094;</span>';
  backButton.style.top = `${(imgDiv.offsetTop + (imgProduct.height * 0.5) - 19.5)}px`;
  backButton.style.left = `${imgDiv.offsetLeft}px`;
  backButton.classList.add('back-button');

  const forwardButton = document.createElement('a');
  forwardButton.innerHTML = '<span>&#10095;</span>';
  forwardButton.style.top = `${(imgDiv.offsetTop + (imgProduct.height * 0.5) - 19.5)}px`;
  forwardButton.style.left = `${imgDiv.offsetLeft + imgProduct.width - 39}px`;
  console.log(imgProduct.width)
  forwardButton.classList.add('forward-button');

  imgDiv.appendChild(backButton);
  imgDiv.appendChild(forwardButton);

  console.log(imgDiv.offsetTop + (imgProduct.height * 0.5))
  console.log(imgProduct.height)
  console.log(imgProduct)

  function closeModal() {
    overlay.style.display = 'none';
  };
});
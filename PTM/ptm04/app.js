var testData;
fetch('https://opt-interview-projects.onrender.com/smart-recommender')
.then(response => response.json())
.then(parsedData => {
    let footerElement = document.getElementsByClassName('footer-content');
    let campaignElement = document.createElement('div');
    let carouselElement = document.createElement('div');
    let arrowRight = document.createElement('button');
    let arrowLeft = document.createElement('button');
    let campaignTitle = document.createElement('p');

    campaignElement.classList.add('campaign-element');
    carouselElement.classList.add('carousel-element');
    campaignElement.style.position = 'relative';
    campaignElement.style.overflow = 'hidden';
    campaignElement.style.height = '460px';
    campaignElement.style.marginBottom = '5%';
    campaignElement.style.marginRight = '10%';
    campaignElement.style.marginLeft = '10%';
    campaignElement.style.marginTop = '5%';

    carouselElement.style.marginLeft = '30px';
    carouselElement.style.marginRight = '30px';
    carouselElement.style.marginTop = '50px';
    carouselElement.style.marginBottom = '50px';
    carouselElement.style.transform = `translateX(-${0}px)`;

    campaignTitle.textContent = "You might also like";
    campaignTitle.style.fontSize = '25px';
    campaignTitle.style.padding = '10px';
    campaignTitle.style.boxSizing = 'border-box';

    let carouselSlider = document.createElement('div');
    carouselSlider.style.flex = '0 0 100%';
    carouselSlider.style.height = '100%';
    carouselSlider.style.alignItems = 'stretch';
    carouselSlider.style.display = 'flex';
    carouselSlider.style.flexDirection = 'row';
    
    footerElement[0].appendChild(campaignElement);
    campaignElement.appendChild(campaignTitle);
    campaignElement.appendChild(carouselElement);
    carouselElement.appendChild(carouselSlider);
    campaignElement.appendChild(arrowLeft);
    campaignElement.appendChild(arrowRight);

    arrowLeft.style.borderRadius = '8px';
    arrowLeft.style.boxSizing = 'border-box';
    arrowLeft.style.background = 'white';
    arrowLeft.style.position = 'absolute';
    arrowLeft.style.border = 'none';
    arrowLeft.style.top = '50%';
    arrowLeft.style.left = '-5px';
    arrowLeft.textContent = '<';

    arrowRight.style.borderRadius = '8px';
    arrowRight.style.boxSizing = 'border-box';
    arrowRight.style.background = 'white';
    arrowRight.style.right = '-35px';
    arrowRight.textContent = '>';
    arrowRight.style.position = 'absolute';
    arrowRight.style.border = 'none';
    arrowRight.style.top = '50%';
    arrowRight.style.right = '-5px';

    arrowLeft.addEventListener('click', ()=>{
      carouselElement.style.transform = `translateX(-${0}%)`;

    })
    arrowRight.addEventListener('click', ()=>{
      const screenWidth = window.innerWidth;
      var slideDistance = parseInt(screenWidth*0.3);
      var currentStatus = window.getComputedStyle(carouselElement).getPropertyValue('transform');
      var currentStatusVal = currentStatus.split(', ');
      var currentStatusInt = Math.abs(parseInt(currentStatusVal[4]));
      var distanceToSlide = currentStatusInt + slideDistance;
      
      if (distanceToSlide>=1800){
        carouselElement.style.transform = `translateX(-110%))`;
      }
      else{
      carouselElement.style.transform = `translateX(-${distanceToSlide}px)`;
      }
    })
  
  testData = parsedData;
  testData.forEach(element => {
    
    const productListElement = document.createElement('a');
    productListElement.classList.add('product-element');
    productListElement.href = element.url;
    productListElement.style.height = '350px';
    productListElement.style.borderStyle = 'inset';
    productListElement.style.display = 'inline';
    
    const productImageElement = document.createElement('img');
    productImageElement.classList.add('image-element');
    productImageElement.src = element.img;
    productImageElement.style.display = 'inline-block';
    productImageElement.style.width = '200px';

    const productNameElement = document.createElement('h10');
    productNameElement.classList.add('name-element');
    productNameElement.innerText = element.name;
    productNameElement.style.width = '200px';
    productNameElement.style.display = 'inline-block';
    productNameElement.style.textAlign = 'center';
    productNameElement.style.fontSize = '14px';

    const productPriceElement = document.createElement('div')
    productPriceElement.innerText = "TL " + element.price;
    productPriceElement.style.textAlign = 'right';
    productPriceElement.style.marginTop = '15px';
    
    productListElement.appendChild(productImageElement);
    productListElement.appendChild(productNameElement);
    productListElement.appendChild(productPriceElement);

    carouselSlider.appendChild(productListElement);

    console.log(element);
    console.log(element.price);

});
})
.catch(error => console.error('Error:', error));

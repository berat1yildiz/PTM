var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(script);
fetch('https://opt-interview-projects.onrender.com/smart-recommender')
  .then(response => response.json())
  .then(parsedData => {
    const classes = {
      campaignElement: 'campaign-element',
      carouselSlider: 'carousel-slider',
      arrowLeft: 'arrow-left',
      arrowRight: 'arrow-right',
      campaignTitle: 'campaign-title',
      productElement: 'product-element',
      productImageElement: 'product-image-element',
      productNameElement: 'product-name-element',
      productPriceElement: 'product-price-element',
    };
    const selectors = Object.keys(classes).reduce((createdSelector, key) => {
        createdSelector[key] = `.${ classes[key] }`;
        return createdSelector;
    }, {});
    let screenSize = window.innerWidth;
    self.init = () => {
        self.buildHTML();
        self.buildCss();
        self.setEvents();
    };
    self.buildHTML = () => {
        const
        {campaignElement, carouselSlider, arrowLeft, arrowRight, campaignTitle,
        productElement, productImageElement, productNameElement, productPriceElement} = classes;

      const html =
      `<div class="${campaignElement}">
          <p class="${campaignTitle}">You might also like</p>
          <button class="${arrowLeft}"> < </button>
          <button class="${arrowRight}"> > </button>
          <div class="${carouselSlider}"></div>
        </div>`;
      $(".footer-content").append(html);

      parsedData.forEach(element => {
        const productHtml =
        `<a class="${productElement}" href="${element.url}">
            <img class="${productImageElement}" src="${element.img}"></img>
            <div class="${productNameElement}">${element.name}</div>
            <div class="${productPriceElement}">${element.price}</div>
        </a>`;
        
        $("." + carouselSlider).append(productHtml);
      });
    };
    self.buildCss = () => {
      const {
            campaignElement, carouselSlider, arrowLeft, arrowRight, campaignTitle,productElement, productImageElement,
            productNameElement, productPriceElement } = selectors;
      const style =
        `${campaignElement} {
          position: relative;
          overflow: hidden;
          right: 5%;
          height: 460px;
          margin: 5% 0% 5% 10%;
        }
        ${campaignTitle} {
          font-size: 25px;
          padding: 10px;
          box-sizing: border-box;
        }
        ${carouselSlider} {
          align-items: stretch;
          transform: translateX(-${0}px);
          transition: transform 1s ease 0s;
          display: flex;
          flex-direction: row;
        }
        ${arrowLeft} {
          border-radius: 8px;
          box-sizing: border-box;
          background: white;
          position: absolute;
          z-index: 10000;
          border: none;
          top: 55%;
          left: -5px;
        }
        ${arrowRight} {
          border-radius: 8px;
          box-sizing: border-box;
          background: white;
          z-index: 10000;
          position: absolute;
          border: none;
          top: 55%;
          right: -5px;
        }
        ${productElement} {
          display: inline;
          border-style: inset;
          height: 350px;
        }
        ${productImageElement} {
          display: inline-block;
          width: 200px;
        }
        ${productNameElement} {
          display: inline-block;
          text-align: center;
          width: 100%;
          font-size: 13px;
        }
        ${productPriceElement} {
          text-align: right;
          margin-top: 15px;
        }
        @media screen and (max-width: 768px) {
          ${campaignElement}{
            right: 5%;
          }
          ${productElement} {
            display: inline;
            border-style: inset;
            height: 100%;
          }
          ${productImageElement} {
            display: inline-block;
            width: 140px;
          }
          ${productNameElement} {
            display: inline-block;
            text-align: center;
            width: 100%;
            font-size: 12px;
          }
          ${productPriceElement} {
            text-align: right;
            margin-top: 8px;
            font-size: 12px;
          };
        }
        @media (max-width: 1024px) and (min-width: 768px) {
        ${productElement} {
          display: inline;
          border-style: inset;
          height: 300px;
        }
        ${productImageElement} {
          display: inline-block;
          width: 180px;
        }
        ${productNameElement} {
          display: inline-block;
          text-align: center;
          width: 100%;
          font-size: 12px;
        }
        ${productPriceElement} {
          text-align: right;
          margin-top: 5px;
        }};
        `;
      $("<style>").html(style).appendTo('head');
    };
    self.setEvents = () => {
        $(document).ready(function() {
            $(".arrow-left").on('click', function() {
              $(".carousel-slider").css('transform', `translateX(${0}px)`);
            });
          });
      
          $(document).ready(function() {
            $(".arrow-right").on('click', self.rightSlider);
          });
    };
    self.rightSlider = () => {
        const { carouselSlider } = selectors;
        console.log("slide right");
        if (screenSize >= 1024) {
          let currentStatus = Math.abs(parseInt($(carouselSlider).css('transform').split(',')[4]));
          console.log(currentStatus);
          let distanceToSlide = currentStatus + 25;
          console.log(distanceToSlide);
  
          if (distanceToSlide >= 75) {
              $(carouselSlider).css('transform', 'translateX(-75%)');
          } else {
              $(".carousel-slider").css('transform', `translateX(-${distanceToSlide}%)`);
          }
        }
        /*tablet slider*/
        else if (screenSize >= 768) {
          let currentStatus = Math.abs(parseInt($(carouselSlider).css('transform').split(',')[4]));
          console.log(currentStatus);
          let distanceToSlide = currentStatus + 300;
          console.log(distanceToSlide);
  
          if (distanceToSlide >= 1130) {
            $(carouselSlider).css('transform', 'translateX(-1130px)');
          } else {
            $(carouselSlider).css('transform', `translateX(-${distanceToSlide}px)`);
          }
        }
        /*mobile slider */
        else {
          let currentStatus = Math.abs(parseInt($(carouselSlider).css('transform').split(',')[4]));
          console.log(currentStatus);
          let distanceToSlide = currentStatus + 75;
          console.log(distanceToSlide);
  
          if (distanceToSlide >= 405) {
            $(carouselSlider).css('transform', 'translateX(-300%)');
          } else {
            $(carouselSlider).css('transform', `translateX(-${distanceToSlide}%)`);
          }
        }
      };
    self.init();
  }); 
  
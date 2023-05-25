var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(script);

fetch('https://opt-interview-projects.onrender.com/smart-recommender')
  .then(response => response.json())
  .then(parsedData => {
    console.log(parsedData);
    const classes = {
      campaignElement: 'campaign-element',
      carouselSlider: 'carousel-slider',
      arrowLeft: 'arrow-left',
      arrowRight: 'arrow-right',
      campaignTitle: 'campaign-title'
    };

    const prodClasses = {
      productElement: 'product-element',
      productImageElement: 'product-image-element',
      productNameElement: 'product-name-element',
      productPriceElement: 'product-price-element',
    }

    var screenWidth = $(window).width();
    function getDeviceType() {  
      if (screenWidth >= 1024) {
        return 'desktop';
      } else if (screenWidth < 1024 && screenWidth >= 768) {
        return 'tablet';
      } else {
        return 'mobile';
      }
    }
    var deviceType = getDeviceType();
    var carouselElement;

    self.buildHTML = () => {
      const {campaignElement, carouselSlider, arrowLeft, arrowRight, campaignTitle} = classes;
      const html = `
        <div class="${campaignElement}">
          <p class="${campaignTitle}">You might also like</p>
          <button class="${arrowLeft}"> < </button>
          <button class="${arrowRight}"> > </button>
          <div class="${carouselSlider}"></div>
        </div>
      `;
      $(".footer-content").append(html);
      parsedData.forEach(element => {
        const {productElement, productImageElement, productNameElement, productPriceElement} = prodClasses;
        const productHtml = `
          <a class="${productElement}" href="${element.url}">
            <img class="${productImageElement}" src="${element.img}"></img>
            <div class="${productNameElement}">${element.name}</div>
            <div class="${productPriceElement}">${element.price}</div>
          </a>
        `;
        $("." + carouselSlider).append(productHtml);
      });
      carouselElement = $("." + campaignElement + " ." + carouselSlider);
    }

    self.buildCss = () => {
      const {campaignElement, carouselSlider, arrowLeft, arrowRight, campaignTitle} = classes;
      const {productElement, productImageElement, productNameElement, productPriceElement} = prodClasses;
      const style = `
        .${campaignElement} {
          position: relative;
          overflow: hidden;
          right: 50px;
          height: 460px;
          margin: 5% 0% 5% 10%;
        }
        .${campaignTitle} {
          font-size: 25px;
          padding: 10px;
          box-sizing: border-box;
        }
        .${carouselElement} {
          
        }
        .${carouselSlider} {
          height: 100%;
          align-items: stretch;
          transform: translateX(-${0}px);
          display: flex;
          flex-direction: row;
        }
        .${arrowLeft} {
          border-radius: 8px;
          box-sizing: border-box;
          background: white;
          position: absolute;
          z-index: 10000;
          border: none;
          top: 55%;
          left: -5px;
        }
        .${arrowRight} {
          border-radius: 8px;
          box-sizing: border-box;
          background: white;
          right: -35px;
          z-index: 10000;
          position: absolute;
          border: none;
          top: 55%;
          right: -5px;
        }
      `;
      const prodStyleDesktop = `
        .${productElement} {
          display: inline;
          border-style: inset;
          height: 350px;
        }
        .${productImageElement} {
          display: inline-block;
          width: 200px;
        }
        .${productNameElement} {
          display: inline-block;
          text-align: center;
          width: 100%;
          font-size: 13px;
        }
        .${productPriceElement} {
          text-align: right;
          margin-top: 15px;
        }
      `;
      const prodStyleMobile = `
        .${productElement} {
          display: inline;
          border-style: inset;
          height: 270px;
        }
        .${productImageElement} {
          display: inline-block;
          width: 140px;
        }
        .${productNameElement} {
          display: inline-block;
          text-align: center;
          width: 100%;
          font-size: 12px;
        }
        .${productPriceElement} {
          text-align: right;
          margin-top: 8px;
          font-size: 12px;
        }
      `;
      const prodStyleTablet = `
        .${productElement} {
          display: inline;
          border-style: inset;
          height: 300px;
        }
        .${productImageElement} {
          display: inline-block;
          width: 180px;
        }
        .${productNameElement} {
          display: inline-block;
          text-align: center;
          width: 100%;
          font-size: 12px;
        }
        .${productPriceElement} {
          text-align: right;
          margin-top: 5px;
        }
      `;

      if (deviceType == 'desktop') {
        $("<style>").html(prodStyleDesktop).appendTo('head');
      } else if (deviceType == 'mobile') {
        $("<style>").html(prodStyleMobile).appendTo('head');
      } else {
        $("<style>").html(prodStyleTablet).appendTo('head');
      }
      $("<style>").html(style).appendTo('head');
    }

    function rightSlider() {
      console.log("slide right");
      if (deviceType == 'desktop') {
        var currentStatus = Math.abs(parseInt($(".carousel-slider").css('transform').split(',')[4]));
        console.log(currentStatus);
        var distanceToSlide = currentStatus + 300;
        console.log(distanceToSlide);


        if (distanceToSlide >= 900) {
            $(".carousel-slider").css('transform', 'translateX(-900px)');
        } else {
            $(".carousel-slider").css('transform', `translateX(-${distanceToSlide}px)`);
        }
      }
      /*tablet slider*/
      else if (deviceType == 'tablet') {
        var currentStatus = Math.abs(parseInt($(".carousel-slider").css('transform').split(',')[4]));
        console.log(currentStatus);
        var distanceToSlide = currentStatus + 300;
        console.log(distanceToSlide);

        if (distanceToSlide >= 1130) {
            $(".carousel-slider").css('transform', 'translateX(-1130px)');
        } else {
            $(".carousel-slider").css('transform', `translateX(-${distanceToSlide}px)`);
        }
      }
      /*mobile slider */
      else {
        var currentStatus = Math.abs(parseInt($(".carousel-slider").css('transform').split(',')[4]));
        console.log(currentStatus);
        var distanceToSlide = currentStatus + 280;
        console.log(distanceToSlide);

        if (distanceToSlide >= 1120) {
            $(".carousel-slider").css('transform', 'translateX(-1120px)');
        } else {
            $(".carousel-slider").css('transform', `translateX(-${distanceToSlide}px)`);
        }
      }
    }

    self.buildHTML();
    self.buildCss();

    $(document).ready(function() {
      $(".arrow-left").on('click', function() {
        $(".carousel-slider").css('transform', `translateX(${0}px)`);
      });
    });

    $(document).ready(function() {
      $(".arrow-right").on('click', rightSlider);
    });
  });

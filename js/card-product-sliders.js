export let cardProductSliders = function () {
    const carProduct = document.querySelector("[data-wrapper-car-product]");
    if (carProduct != null) {
      //----slider zoom----
      const sliderNavZoom = new Swiper('.modal-zoom__container-navigation', {
        direction: 'vertical',
        slidesPerView: 7, 
        spaceBetween: 12, 
        navigation: { 
          nextEl: '.modal-zoom__button-next', 
          prevEl: '.modal-zoom__button-prev'
        },
        freeMode: true, 
        breakpoints: { 
          0: { 
            direction: 'horizontal',
          },
          768: { 
            direction: 'vertical', 
          }
        }
      });
      const sliderMainZoom = new Swiper('.modal-zoom__container-basic', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 32,
        mousewheel: true,
        navigation: {
          nextEl: '.modal-zoom__button-next', 
          prevEl: '.modal-zoom__button-prev'
        },
        grabCursor: true,
        thumbs: { 
          swiper: sliderNavZoom 
        },
        breakpoints: {
          0: { 
            direction: 'horizontal',
          },
          768: { 
            direction: 'horizontal',
          }
        }
      });

      //----slider main------
      const sliderMain = new Swiper('.main-slider__container-navigation', {
        direction: 'vertical',
        slidesPerView: 6, 
        spaceBetween: 12, 
        navigation: { 
        nextEl: '.main-slider__button-next', 
        prevEl: '.main-slider__button-prev'
        },
        freeMode: true, 
        breakpoints: { 
        0: { 
            direction: 'horizontal',
        },
        768: { 
            direction: 'vertical', 
        }
        }
      });
      const sliderMainNav = new Swiper('.main-slider__container-basic', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 32,
        mousewheel: true,
        navigation: {
        nextEl: '.main-slider__button-next', 
        prevEl: '.main-slider__button-prev'
        },
        grabCursor: true,
        thumbs: { 
        swiper: sliderMain 
        },
        breakpoints: {
        0: { 
            direction: 'horizontal',
        },
        768: { 
            direction: 'horizontal',
        }
        }
      }); 

      //----slider footer----
      const sliderFooter = new Swiper('.card-product-spare-parts__slider-container', {
        navigation: {
            nextEl: ".card-product-spare-parts__button-next",
            prevEl: ".card-product-spare-parts__button-prev",
          },
          pagination: {
            el: ".card-product-spare-parts__pagination",
            clickable: true,
            type: 'bullets',
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
          },
          slidesPerView: 4,
          breakpoints: {
            860: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            680: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2.2,
            },
           
            0: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
          },
      });
      //-----slider picture---
      const sliderPictures = new Swiper('.card-product-gallery__slider', {
        pagination: {
          el: ".card-product-gallery__slider-pagination",
          clickable: true,
          type: 'bullets',
        },
          slidesPerView: 4,
          spaceBetween: 16,
          breakpoints: {
            640: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            376: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            0: {
              slidesPerView: 1.1,
              spaceBetween: 16,
            },
          },
      });

    }
}
export let cardProduct = function () {
  const carProduct = document.querySelector("[data-wrapper-car-product]");
  if (carProduct != null) {
    const   navigationItem = carProduct.querySelectorAll("[data-item-navigation-car-product]"),
            selectionColor = carProduct.querySelectorAll("[data-select-color]"),
            buttonUp = carProduct.querySelector("[data-botton-up]"),
            hiddenNavigation = carProduct.querySelector("[data-hidden-navigation]"),
            instruction = carProduct.querySelector("[data-download-instruction]"),
            headerWrapper = carProduct.querySelector("[data-header-wrapper-hidden]"),
            buttonLike = carProduct.querySelector("[data-navigation-like]"),
            modalOnClick = carProduct.querySelector('[data-modal-on-click]'),
            modalZoom = carProduct.querySelector("[data-modal-zoom]");

    //-----add class active groop------
    function addActiveClass(list) {
      list.forEach((item) => {
        item.addEventListener("click", function () {
          if (!item.classList.contains("active")) {
            list.forEach(function (item) {
              item.classList.remove("active");
            });
            item.classList.add("active");
          }
        });
      });
    }
    addActiveClass(navigationItem);
    addActiveClass(selectionColor);
    //-----button up------
    buttonUp.addEventListener("click", function () {
      window.scrollTo(0, 0);
    });
    //-----hidden nav-----
    if (hiddenNavigation !== null) {
      const navigationShare = carProduct.querySelector(
        "[data-navigation-share]"
      );
      navigationShare.addEventListener("click", function () {
        hiddenNavigation.classList.toggle("active");
        navigationShare.classList.toggle("active");
      });
      document.addEventListener("click", (e) => {
        const click = e.composedPath().includes(navigationShare);
        if (!click) {
          hiddenNavigation.classList.remove("active");
          navigationShare.classList.remove("active");
        }
      });
    }
    //------active-----
    buttonLike.addEventListener("click", function () {
      buttonLike.classList.toggle("active");
    });
    instruction.addEventListener("click", function () {
      instruction.classList.toggle("active");
    });
    //------hidden header----
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        headerWrapper.classList.add("active");
        buttonUp.classList.add("active");
      } else {
        headerWrapper.classList.remove("active");
        buttonUp.classList.remove("active");
      }
    });

    //----------modal zoom--------------------
    if (modalZoom !== null) {
      const body = document.querySelector("#body-cont"),
            buttonOpenModalZoom = carProduct.querySelector("[data-open-modal-zoom]"),
            modalZoomContainer = carProduct.querySelector("[data-modal-zoom-container]"),
            modalZoomClose = carProduct.querySelector("[data-modal-zoom-close]");

      buttonOpenModalZoom.addEventListener("click", function () {
        modalZoom.classList.add("active");
        body.classList.add("lock");
      });
      modalZoomClose.addEventListener("click", function () {
        modalZoom.classList.remove("active");
        body.classList.remove("lock");
      });
      modalZoom.addEventListener("click", function (e) {
        const click = e.composedPath().includes(modalZoomContainer);
        if (!click) {
          modalZoom.classList.remove("active");
          body.classList.remove("lock");
        }
      });
    }
    //----------modal on click--------------------
    if(modalOnClick !== null) {
       const buttonOpenModalOnClick = carProduct.querySelector('[data-by-on-click]'),
             buttonCloseModalOnClick = carProduct.querySelector('[data-close-modal-on-click]'),
             modalOnClickContainer = carProduct.querySelector('[data-modal-on-click-container]'),
             body = document.querySelector('#body-cont');
             
       buttonOpenModalOnClick.addEventListener('click', function() {
        modalOnClick.classList.toggle('active');
        body.classList.add("lock");
       });
       buttonCloseModalOnClick.addEventListener('click', function(){
        modalOnClick.classList.remove('active');
        body.classList.remove("lock");
       });
       modalOnClick.addEventListener("click", function (e) {
        const click = e.composedPath().includes(modalOnClickContainer);
        if (!click) {
          modalOnClick.classList.remove("active");
          body.classList.remove("lock");
        }
      });
    }
  }
  //----slider main------

  //----slider footer----
  new Swiper(".card-product-spare-parts__carousel", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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
      460: {
        slidesPerView: 2,
      },
      440: {
        slidesPerView: 1.2,
      },
      0: {
        slidesPerView: 1.1,
        spaceBetween: 16,
        // spaceBetween: 8,
      },
    },
  });
};

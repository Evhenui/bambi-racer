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
            modalZoom = carProduct.querySelector("[data-modal-zoom]"),
            modalBasket = carProduct.querySelector("[data-modal-basket]");

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
      if (window.scrollY > 300 && window.innerWidth > 960) {
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
            modalZoomClose = carProduct.querySelector("[data-modal-zoom-close]"),
            modalZoomButtonBuy = carProduct.querySelector("[data-modal-zoom__buy]"),
            modalZoomButtonBuyOnClick = carProduct.querySelector("[data-modal-zoom__buy-on-click]"),
            modalBasketOpen = carProduct.querySelector("[data-modal-basket]"),
            modalBuyOnClickOpen = carProduct.querySelector("[data-modal-on-click]");

            
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
      modalZoomButtonBuy.addEventListener('click',function() {
        modalZoom.classList.remove("active");
        modalBasketOpen.classList.add("active");
      })
      modalZoomButtonBuyOnClick.addEventListener('click', function() {
        modalZoom.classList.remove("active");
        modalBuyOnClickOpen.classList.add("active");
      })
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
    //----------modal basket----------------------
    if(modalBasket !== null) {
      const  buttonOpenModalBasket = carProduct.querySelector('[data-by-modal-basket]'),
             buttonCloseModalBasket = carProduct.querySelector('[data-close-modal-basket]'),
             modalBasketContainer = carProduct.querySelector('[data-modal-basket-container]'),
             body = document.querySelector('#body-cont');

             buttonOpenModalBasket.addEventListener('click', function() {
              modalBasket.classList.add('active');
              body.classList.add("lock");
             });
             buttonCloseModalBasket.addEventListener('click', function() {
              modalBasket.classList.remove('active');
              body.classList.remove("lock");
             })

             modalBasket.addEventListener("click", function (e) {
              const click = e.composedPath().includes(modalBasketContainer);
              if (!click) {
                modalBasket.classList.remove("active");
                body.classList.remove("lock");
              }
            });
    }
  }
};

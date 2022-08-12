export let cardProduct = function() {
    const carProduct = document.querySelector('[data-wrapper-car-product]');
    if(carProduct != null) {
       const navigationItem = carProduct.querySelectorAll('[data-item-navigation-car-product]'),
             selectionColor = carProduct.querySelectorAll('[data-select-color]'),
             navigationShare = carProduct.querySelector('[data-navigation-share]'),
             buttonUp = carProduct.querySelector('[data-botton-up]'),
             hiddenNavigation = carProduct.querySelector('[data-hidden-navigation]'),
             headerPages = carProduct.querySelector('[data-header-pages-hidden]'),
             headerWrapper = carProduct.querySelector('[data-header-wrapper-hidden]'),
             buttonLike = carProduct.querySelector('[data-navigation-like]');
       //-----add class active------
        function addActiveClass(list) {
            list.forEach((item)=> {
                item.addEventListener("click", function () {
                    if(!item.classList.contains("active")) {
                        list.forEach(function (item) {
                            item.classList.remove("active");
                        });
                        item.classList.add("active");
                    }
                })
               })
        }
        addActiveClass(navigationItem)
        addActiveClass(selectionColor)
       //-----button up------ 
       buttonUp.addEventListener('click', function() {
        window.scrollTo(0,0);
       })
       //-----hidden nav-----
       navigationShare.addEventListener('click', function() {
        hiddenNavigation.classList.toggle('active');
        navigationShare.classList.toggle('active');
       })
       document.addEventListener('click',(e)=>{
        const click = e.composedPath().includes(navigationShare);
        if(!click) {
            hiddenNavigation.classList.remove('active');
            navigationShare.classList.remove('active');
        }
        })
      //------active like-----
        buttonLike.addEventListener('click', function() {
        buttonLike.classList.toggle('active');
        })
      //------hidden header----

      window.addEventListener('scroll', function(){
        if(window.scrollY > 300) {
            headerWrapper.classList.add('active');
        }else {
            headerWrapper.classList.remove('active');
        }
       
      })
    }
    new Swiper('.card-product-spare-parts__carousel', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="'+ className + '">' + (index + 1) + '</span>';
            }    
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
            }
        }
    });
}
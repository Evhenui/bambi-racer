export let cardProduct = function() {
    const carProduct = document.querySelector('[data-wrapper-car-product]');
    if(carProduct != null) {
       const navigationItem = carProduct.querySelectorAll('[data-item-navigation-car-product]'),
             selectionColor = carProduct.querySelectorAll('[data-select-color]'),
             navigationLinks = carProduct.querySelectorAll('[data-navigation-links]');

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
        addActiveClass(navigationLinks)

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
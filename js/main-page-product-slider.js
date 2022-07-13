export let mainPageProductSlider = function() {
    const productSliderWrp = document.querySelector('.js-product-slider');
    if(productSliderWrp != null) {
        const productSliderBtm = productSliderWrp.querySelectorAll('.js-product-slider-btm');
        const productSliderLine = productSliderWrp.querySelectorAll('.js-product-slider-line');
        const productSliderContent = productSliderWrp.querySelectorAll('.js-product-slider-content')
        productSliderBtm.forEach((el, index) => {
            el.addEventListener('click', () => {
                delActive(productSliderLine);
                delActive(productSliderContent);
                console.log(productSliderContent[index]);
                productSliderContent[index].classList.add('active')
                el.querySelector('.js-product-slider-line').classList.add('active');
            })
        });
        function delActive(param) {
            param.forEach((item) => {
                item.classList.remove('active')
            })
        }
        new Swiper('.main-page-product__carousel-top', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function(index, className) {
                    return '<span class="'+ className + '">' + (index + 1) + '</span>'
                }    
            },
            slidesPerView: 4,
            // spaceBetween: 16,
            breakpoints: {
                860: {
                    slidesPerView: 4,
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
                    // spaceBetween: 8,
                }
            }
        });
    }
}
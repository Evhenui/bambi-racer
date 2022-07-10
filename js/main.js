import {cardProdCatalog} from './card-prod-catalog.js';
        cardProdCatalog();

import {mainPageProductSlider}  from './main-page-product-slider.js';
        mainPageProductSlider()      

window.onload = function () {

    const bodyCont = document.getElementById('body-cont');
    const mainCont = document.querySelector('.js-main');
    const blurMenu = document.querySelector('.js-clacc-blur');

    if(blurMenu != null) {
    window.getComputedStyle(blurMenu).getPropertyValue('--height-page');
    blurMenu.style.setProperty('--height-page', (bodyCont.scrollHeight * 1.5) + 'px');
    } 

    
    
    let widthScreen = window.innerWidth;
    let hidthSizePage = document.documentElement.clientHeight;
    
    
    positionBtnSlider();
    window.addEventListener('resize', () => {
        widthScreen = window.innerWidth;
        if(widthScreen <= 460) {
            menuHeader.style.setProperty('width', widthScreen + 'px');

        }
        positionBtnSlider();
    })

    //каталог в меню
    
    const btnCMenuCatalog = document.querySelectorAll('.js-menu-btn');
    console.log(btnCMenuCatalog)
    btnCMenuCatalog.forEach((el) => {
        el.addEventListener('click', function () {
            el.closest('.js-menu-wrp').querySelector('.header__menu-item-link-wrp').classList.toggle('active');
            this.querySelector('.header__menu-name-categoty-icon').classList.toggle('active');
        })
    })

    //меню кнопка 
    const menuBtn = document.querySelector('.js-btn-menu'),
        menuBtnLine = menuBtn.querySelector('.header__menu-btn-line');
    const menuHeader = document.querySelector('.js-menu');
    const mobItemMenu = document.querySelectorAll('.js-mob-item');
    const mobItemMenuActiv = document.querySelectorAll('.js-mob-item-active');
    const mobItemMenuActivLeft = document.querySelector('.js-mob-item-active-left');
    const mobItemMenuActivRight = document.querySelector('.js-mob-item-active-right');
    const menuTelMob =  document.querySelector('.header__menu-work-time');
    const arrActivBlock = [menuBtnLine, menuHeader, bodyCont];

    menuBtn.addEventListener('click', function (event) {
        window.getComputedStyle(menuTelMob).getPropertyValue('--width-page');
        menuTelMob.style.setProperty('--width-page', (widthScreen) + 'px');
                menuTelMob.classList.toggle('active')
        if(menuHeader.classList.contains('active') === true) {
            menuHeader.style.setProperty('height', 0 + 'px');
        } else {
            menuHeader.style.setProperty('height', hidthSizePage + 'px');
        }
        if(widthScreen <= 460) {
            menuHeader.style.setProperty('width', widthScreen + 'px');
        }
        event.stopPropagation();
        event.target.classList.toggle('active');
        closeMain(blurMenu);
        blurDel(menuBtn);
        if(widthScreen <= 860) {
            arrActivBlock.forEach((el) => {
                el.classList.toggle('active');
            });
            
            mobItemMenu.forEach((el) => {
                el.classList.toggle('active');
            });
            mobItemMenuActiv.forEach((el) => {
                el.classList.toggle('active');
            });
            mobItemMenuActivLeft.classList.toggle('active');
            mobItemMenuActivRight.classList.toggle('active');
        } else {
            arrActivBlock.forEach((el) => {
                el.classList.toggle('active');
            })
        }
        closeActive([phoneMenyHeader, jsHeaderCatalog]);
    })

    closeMain(menuBtn, menuHeader);
    closeMain(menuBtnLine);
    closeMain(menuHeader);
    closeMain(bodyCont)

    //поиск
    const searchHeader = document.querySelector('.js-search'),
        searchBnt = searchHeader.querySelector('.js-btn-search'),
        searchBntMobClose = searchHeader.querySelector('.js-btn-search-mob-close'),
        searchInput = searchHeader.querySelector('.js-search-input');

    searchBntMobClose.addEventListener('click', () => {
        if(widthScreen <= 860) {
            searchHeader.classList.remove('activeSerch');
            searchBntMobClose.classList.remove('activeSerch');
        }
    })

    searchBnt.addEventListener('click', (event) => {
        event.preventDefault()
        searchInput.classList.toggle('activeSerch');
        if(widthScreen <= 860) {
            searchHeader.classList.add('activeSerch');
            searchBntMobClose.classList.add('activeSerch');
        }
        event.stopPropagation();

    });
    
    closeMain(searchInput, searchInput);
    

    //смена языкоа header
    const btnLanguages = document.querySelectorAll('.js-header-languages');

    btnLanguages.forEach((el) => {
        el.addEventListener('click', (event) => {
            delActivLanguagea();
            event.target.classList.add('active');
        })
    });
    function delActivLanguagea() {
        btnLanguages.forEach((el) => {
            el.classList.remove('active')
        })
    } 
    
    //выпадающий калог header
    const headerBtnCatalog = document.querySelector('.js-header-btn-catalog');
    const jsHeaderCatalog = document.querySelector('.js-header-catalog');
    
    headerBtnCatalog.addEventListener('click', (event) => {
        event.stopPropagation();
        jsHeaderCatalog.classList.toggle('active');
        blurDel(jsHeaderCatalog);
        searchInput.classList.remove('activeSerch');
        menuHeader.style.setProperty('height', 0 + 'px');
        closeActive([phoneMenyHeader, menuHeader, menuBtn, menuBtnLine]);
        closeMain(blurMenu);
      
    });
    closeMain(jsHeaderCatalog, jsHeaderCatalog);
    // closeMain(mainCont);
    closeMain(blurMenu);

    //телефон модалка оставить контакты
    const phoneHeader = document.querySelector('.js-phone');
    const phoneMenyHeader = phoneHeader.querySelector('.js-phone-menu')

    phoneHeader.addEventListener('click', function(event) {
        event.stopPropagation();
        phoneMenyHeader.classList.toggle('active');
            console.log(blurMenu.classList.contains('active'));
            blurDel(phoneMenyHeader);
        closeActive([jsHeaderCatalog, menuHeader, menuBtn, menuBtnLine]);
        menuHeader.style.setProperty('height', 0 + 'px');
    })
    closeMain(phoneMenyHeader, phoneMenyHeader);

// функция удаляет актив если кликаеш по body
    function closeMain(params, stopRrop) {
        if(bodyCont != null) {
            bodyCont.addEventListener('click', () => {
                params.classList.remove('active');
                menuHeader.style.setProperty('height', 0 + 'px');
            })
        }
        if(stopRrop != null) {
            stopRrop.addEventListener('click', (event) => {
                event.stopPropagation();
            })
        }
    }

    function closeActive(params) {
        params.forEach((el) => {
            console.log(el);
            el.classList.remove('active')
        })
    }
    //Функция удаления блюра

    function blurDel(params) {
        if(params.classList.contains('active')) {
            blurMenu.classList.add('active');
        } else {
            blurMenu.classList.remove('active');
        }
    }
    //слайдер swiper
    const sliderWrpMainPage = document.querySelector('.main-slider');
    if(sliderWrpMainPage != null) {
        const mainSlider =  new Swiper('.main-slider', {
            //Стрелки
            navigation: {
                // nextEl: '.btn-next',
                // prevEl: '.btn-prev'
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            //Навигация
            //пргресс бар
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                spaceBetween: 10,
                // dynamicBullets: true,
            },
            grabCursor: true,
            loop: true,
            autoplay: {
                delay: 5000,
                stopOnLastSlide: true,
                disableOnInteraction: true,
            }
        });
    }
    

    //кнопки слайдера их растояние от экрана 

    function positionBtnSlider () {
        const btnSliderLeft = mainCont.querySelector('.js-btn-left-slider');
        const btnSliderRight = mainCont.querySelector('.js-btn-right-slider');
        if(btnSliderLeft != null && btnSliderRight != null) {
            if(widthScreen > 1440) {
                btnSliderLeft.style.setProperty('left', ((widthScreen - 1344) / 2) + 'px');
                btnSliderRight.style.setProperty('right', ((widthScreen - 1344) / 2) + 'px');
            }
        }
    }
        const imgSliderMain = document.querySelector('.js-img-slider');
        if(imgSliderMain != null) {
            imgSliderMain.style.setProperty('height', hidthSizePage + 'px');
        }

    const heightSliderText = document.querySelector('.js-height-slider-text');
    const heightSlider = document.querySelector('.js-height-slider')
    if(heightSliderText != null && heightSlider != null) {

        window.getComputedStyle(heightSlider).getPropertyValue('--width-page');
        heightSlider.style.setProperty('--width-page', widthScreen + 'px');

        window.getComputedStyle(heightSlider).getPropertyValue('--height-monitor');
        heightSlider.style.setProperty('--height-monitor', hidthSizePage + 'px');
    }
    
}
















// const logoIcon = new Vivus(
//     'logo-svg',
//     {
//         type: 'sync',
//         duration: 500,
//     }
// )
window.onload = function () {
    const bodyCont = document.getElementById('body-cont');
    const mainCont = document.querySelector('.js-main');
    const widthScreen = window.innerWidth;

    //каталог в меню
    
    const btnCMenuCatalog = document.querySelectorAll('.js-menu-btn');
    btnCMenuCatalog.forEach((el) => {
        el.addEventListener('click', function () {
            el.closest('.js-menu-wrp').querySelector('.header__menu-item-link-wrp').classList.toggle('active');
            this.querySelector('.header__menu-name-categoty-icon').classList.toggle('active')
        })
    })

    //меню кнопка 
    const menuBtn = document.querySelector('.is-btn-menu'),
        menuBtnLine = menuBtn.querySelector('.header__menu-btn-line');
    const menuHeader = document.querySelector('.js-menu');
    const mobItemMenu = document.querySelectorAll('.js-mob-item');
    const mobItemMenuActiv = document.querySelectorAll('.js-mob-item-active');
    const mobItemMenuActivLeft = document.querySelector('.js-mob-item-active-left');
    const mobItemMenuActivRight = document.querySelector('.js-mob-item-active-right');
    const arrActivBlock = [menuBtnLine, menuHeader, bodyCont, mainCont, mobItemMenuActivLeft, mobItemMenuActivRight]
    const menuHidth = document.documentElement.clientHeight;

    menuBtn.addEventListener('click', function (event) {
        if(menuHeader.classList.contains('active') === true) {
            menuHeader.style.setProperty('height', 0 + 'px');
        } else {
            menuHeader.style.setProperty('height', menuHidth + 'px');
        }
        menuHeader.style.setProperty('width', widthScreen + 'px');
        event.stopPropagation();
        event.target.classList.toggle('active');
        // menuBtnLine.classList.toggle('active');
        // menuHeader.classList.toggle('active');
        // bodyCont.classList.toggle('active');
        // mainCont.classList.toggle('active');
        // mobItemMenuActivLeft.classList.toggle('active');
        // mobItemMenuActivRight.classList.toggle('active');
        
        arrActivBlock.forEach((el) => {
            el.classList.toggle('active');
        })
        
        mobItemMenu.forEach((el) => {
            el.classList.toggle('active');
            console.log(el);
        })
        mobItemMenuActiv.forEach((el) => {
            el.classList.toggle('active');
            console.log(el);
        })
        
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
            searchHeader.classList.remove('active');
            searchBntMobClose.classList.remove('active');
        }
    })

    searchBnt.addEventListener('click', (event) => {
        event.preventDefault()
        searchInput.classList.toggle('active');
        if(widthScreen <= 860) {
            searchHeader.classList.add('active');
            searchBntMobClose.classList.add('active');
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
        if(mainCont != null) {
            mainCont.classList.toggle('active')
        }
      
    });
    closeMain(jsHeaderCatalog, jsHeaderCatalog);
    closeMain(mainCont);


// функция удаляет актив если кликаеш по body
    function closeMain(params, stopRrop) {
        if(bodyCont != null) {
            bodyCont.addEventListener('click', () => {
                params.classList.remove('active')
            })
        }
        if(stopRrop != null) {
            stopRrop.addEventListener('click', (event) => {
                event.stopPropagation();
            })
        }
    }
}
















// const logoIcon = new Vivus(
//     'logo-svg',
//     {
//         type: 'sync',
//         duration: 500,
//     }
// )
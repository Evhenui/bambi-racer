window.onload = function () {
    const bodyCont = document.getElementById('body-cont')
    const mainCont = document.querySelector('.js-main');
    
    
    // sizeWindows();
    // window.addEventListener('resize', () =>{
    //     sizeWindows();
    // });   
    


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
    const menuHidth = document.documentElement.clientHeight;

   

    menuBtn.addEventListener('click', function (event) {
        menuHeader.style.setProperty('height', menuHidth + 'px');
        event.stopPropagation();
        event.target.classList.toggle('active');
        menuBtnLine.classList.toggle('active');
        menuHeader.classList.toggle('active');
        bodyCont.classList.toggle('active');
        mainCont.classList.toggle('active');    
    })

    closeMain(menuBtn, menuHeader);
    closeMain(menuBtnLine);
    closeMain(menuHeader);
    closeMain(bodyCont)

    //поиск
    const searchHeader = document.querySelector('.js-search'),
        searchBnt = searchHeader.querySelector('.js-btn-search'),
        searchInput = searchHeader.querySelector('.js-search-input');

    searchBnt.addEventListener('click', (event) => {
        event.preventDefault()
        searchInput.classList.toggle('active');
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
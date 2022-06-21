window.onload = function () {
    const headerBtnCatalog = document.querySelector('.js-header-btn-catalog');
    const jsHeaderCatalog = document.querySelector('.js-header-catalog')
    const mainCont = document.querySelector('.js-main')
    console.log(mainCont);


    headerBtnCatalog.addEventListener('click', () => {
        jsHeaderCatalog.classList.toggle('active');
        if(mainCont != null)
        mainCont.classList.toggle('active')
    })
}
















// const logoIcon = new Vivus(
//     'logo-svg',
//     {
//         type: 'sync',
//         duration: 500,
//     }
// )
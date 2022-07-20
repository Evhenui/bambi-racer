export let filters = function () {
    const filterWrp = document.querySelector('.js-filter-wrp');
    if (filterWrp != null) {
        const filterBntOpen = filterWrp.querySelector('.js-btn-filter-open');
        const filterWrpContent = filterWrp.querySelector('.js-filter-wrp-content');
        const filterBtnItem = filterWrp.querySelectorAll('.product-catalog-filters__container-icon');
        const filterDefault = filterWrp.querySelector('.js-filter-default');
        const filterActive = filterWrp.querySelector('.js-filter-active');
        filterBntOpen.addEventListener('click', function (event) {
            filterWrpContent.classList.toggle('active');
            if (filterWrp.querySelector('.product-catalog-wrp-prod').classList.contains('active')) {
                setTimeout(function() {
                    filterWrp.querySelector('.product-catalog-wrp-prod').classList.remove('active');
                }, 200)
            } else {
                filterWrp.querySelector('.product-catalog-wrp-prod').classList.add('active');
            }
            
            filterWrp.querySelector('.product-catalog-filters-static').classList.toggle('active');
            if(filterDefault.classList.contains('active')) {
                filterDefault.classList.remove('active');
                filterActive.classList.remove('active');
            } else {
                filterDefault.classList.add('active');
                filterActive.classList.add('active');
            }
        });
        filterBtnItem.forEach((el) => {
            el.addEventListener('click', function() {
               el.closest('.product-catalog-filters__container').querySelector('.js-content-item').classList.toggle('active');
               el.classList.toggle('active');
            })
            
        });
        // filterDefault.addEventListener('click', function() {
        //     filterDefault.classList.add('active');
        //     filterActive.classList.add('active');
        // });
        // filterActive.addEventListener('click', function() {
        //     filterActive.classList.remove('active');
        //     filterDefault.classList.remove('active')
        // })
    }
}
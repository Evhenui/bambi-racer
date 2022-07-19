export let filters = function () {
    const filterWrp = document.querySelector('.js-filter-wrp');
    if (filterWrp != null) {
        const filterBntOpen = filterWrp.querySelector('.js-btn-filter-open');
        const filterWrpContent = filterWrp.querySelector('.js-filter-wrp-content');
        const filterBtnItem = filterWrp.querySelectorAll('.product-catalog-filters__container-icon');
        const filterDefault = filterWrp.querySelector('.js-filter-default');
        const filterActive = filterWrp.querySelector('.js-filter-active');
        filterBntOpen.addEventListener('click', function (event) {
            filterWrpContent.classList.toggle('active')
        });
        filterBtnItem.forEach((el) => {
            el.addEventListener('click', function() {
               el.closest('.product-catalog-filters__container').querySelector('.js-content-item').classList.toggle('active');
               el.classList.toggle('active')
            })
            
        });
        filterDefault.addEventListener('click', function() {
            this.classList.add('active');
            filterActive.classList.add('active');
        });
        filterActive.addEventListener('click', function() {
            this.classList.remove('active');
            filterDefault.classList.remove('active')
        })
    }
}
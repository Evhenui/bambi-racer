export let basket = function () {
    const basket = document.querySelector('[data-basket-section]');
  
    if(basket !== null) {
      const dropdownRegion = basket.querySelector('[data-dropdown-region]'),
            dropdownRegionItems = basket.querySelectorAll('[data-dropdown-region-item]'),
            dropdownSelectRegion = basket.querySelector('[data-select-region]');

            dropdownSelectRegion.addEventListener('focus', function() {
                dropdownRegion.classList.add('active');
            })

            dropdownSelectRegion.addEventListener('blur', function() {
                dropdownRegion.classList.remove('active');
            })

            dropdownRegionItems.forEach((item) => {
                item.addEventListener('click', function() {
                    dropdownSelectRegion.value = this.innerHTML;
                })
            })
    }

    
}
export let basket = function () {
    const basket = document.querySelector('[data-basket-section]');
  
    if(basket !== null) {
        const dropdownRegion = basket.querySelector('[data-dropdown-region]'),
              dropdownCity = basket.querySelector('[data-dropdown-city]'),
              dropdownDepartmentNumber = basket.querySelector('[data-dropdown-department-number]');

            function changeLable (items, dropdown) {
                items.forEach((item)=> {
                    item.addEventListener('click', ()=> {
                        dropdown.innerText = item.innerText;
                    })
                })
            }
            function closeMenu (section ,selected, label) {
                section.addEventListener('click', function(e) {
                    const click = e.composedPath().includes(this);
                    if(!click) {
                        this.classList.remove('active');
                        if(selected.innerText === '') {
                            label.classList.remove('active');
                        }   
                    }
                })
                
            }

        if(dropdownRegion !== null) {

            const dropdownRegionSelectItems = basket.querySelectorAll('[data-dropdown-region-item]'),
                  dropdownRegionSelected = basket.querySelector('[data-dropdown-region-selected]'),
                  dropdownRegionLabel = basket.querySelector('[data-dropdown-region-label]');

            dropdownRegion.addEventListener('click', function() {
                this.classList.toggle('active');
                if(dropdownRegionSelected.innerText === '') {
                    dropdownRegionLabel.classList.toggle('active');
                } 
                //close
                closeMenu(basket, dropdownRegionSelected, dropdownRegionLabel)
            })
            changeLable(dropdownRegionSelectItems, dropdownRegionSelected)
        }
        
        if(dropdownCity !== null) {

            const dropdownRegionSelectItems = basket.querySelectorAll('[data-dropdown-city-item]'),
                  dropdownRegionSelected = basket.querySelector('[data-dropdown-city-selected]'),
                  dropdownRegionLabel = basket.querySelector('[data-dropdown-city-label]');

                  dropdownCity.addEventListener('click', function() {
                this.classList.toggle('active');
                if(dropdownRegionSelected.innerText === '') {
                    dropdownRegionLabel.classList.toggle('active');
                } 
                //close
                closeMenu(basket, dropdownRegionSelected, dropdownRegionLabel)
            })
            changeLable(dropdownRegionSelectItems, dropdownRegionSelected)
        }
        
        if(dropdownDepartmentNumber !== null) {

            const dropdownRegionSelectItems = basket.querySelectorAll('[data-dropdown-department-number-item]'),
                  dropdownRegionSelected = basket.querySelector('[data-dropdown-department-number-selected]'),
                  dropdownRegionLabel = basket.querySelector('[data-dropdown-department-number-label]');

                dropdownDepartmentNumber.addEventListener('click', function() {
                this.classList.toggle('active');
                if(dropdownRegionSelected.innerText === '') {
                    dropdownRegionLabel.classList.toggle('active');
                } 
                //close
                closeMenu(basket, dropdownRegionSelected, dropdownRegionLabel)
            })
            changeLable(dropdownRegionSelectItems, dropdownRegionSelected)
        }
        
    } 
}
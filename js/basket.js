export let basket = function () {
    const basket = document.querySelector('[data-basket-section]');
  
    if(basket !== null) {
        const dropdownRegion = basket.querySelector('[data-dropdown-region]'),
              dropdownCity = basket.querySelector('[data-dropdown-city]'),
              dropdownDepartmentNumber = basket.querySelector('[data-dropdown-department-number]'),
              dropdowns = basket.querySelectorAll('[data-dropdown]'),
              accordion = basket.querySelector('[data-order-accordion]');

        const buttonConfirm = basket.querySelector('[data-button-confirm]');
        const inputs = basket.querySelectorAll('[data-input]');
        const inputsSelected = basket.querySelectorAll ('[data-input-selected]');


         
            function delActive (params) {
                params.forEach((el) => {
                    el.classList.remove('active');
                  })
            }         
            function changeLable (items, dropdown) {
                items.forEach((item)=> {
                    item.addEventListener('click', ()=> {
                        dropdown.innerText = item.innerText;
                    })
                })
            }
            function closeMenu (section, dropdown ,selected, label) {
                section.addEventListener('click', function(e) {
                    const click = e.composedPath().includes(dropdown);
                    if(!click) {
                        dropdown.classList.remove('active');
                        if(selected.innerText === '') {
                            label.classList.remove('active');
                        }   
                    }
                })
                
            }



        if(accordion !== null) {
            const content = accordion.querySelector('[data-my-order-mobile-full-information]');
            window.addEventListener('resize', function(event) {
                if(innerWidth <= 960) {
                    accordion.addEventListener('click', function() {
                        this.classList.toggle('active');
                        if(this.classList.contains('active')) {
                            content.style.height = content.scrollHeight + 'px';
                        } else {
                            content.style.height = 0 + 'px';
                        }
                    })
                }  
            })   
        }
        if(dropdownRegion !== null) {

            const dropdownRegionSelectItems = basket.querySelectorAll('[data-dropdown-region-item]'),
                  dropdownRegionSelected = basket.querySelector('[data-dropdown-region-selected]'),
                  dropdownRegionLabel = basket.querySelector('[data-dropdown-region-label]');

            dropdownRegion.addEventListener('click', function() {
                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                }
                else {
                    delActive(dropdowns);
                    this.classList.add('active');
                }
                
                if(dropdownRegionSelected.innerText === '') {
                    dropdownRegionLabel.classList.toggle('active');
                } 
                //close
                closeMenu(basket, dropdownRegion, dropdownRegionSelected, dropdownRegionLabel)
            })
            changeLable(dropdownRegionSelectItems, dropdownRegionSelected)
        }
        
        if(dropdownCity !== null) {

            const dropdownRegionSelectItems = basket.querySelectorAll('[data-dropdown-city-item]'),
                  dropdownRegionSelected = basket.querySelector('[data-dropdown-city-selected]'),
                  dropdownRegionLabel = basket.querySelector('[data-dropdown-city-label]');

                  dropdownCity.addEventListener('click', function() {
                    if (this.classList.contains('active')) {
                        this.classList.remove('active');
                    }
                    else {
                        delActive(dropdowns);
                        this.classList.add('active');
                    }
                if(dropdownRegionSelected.innerText === '') {
                    dropdownRegionLabel.classList.toggle('active');
                } 
                //close
                closeMenu(basket, dropdownCity, dropdownRegionSelected, dropdownRegionLabel)
            })
            changeLable(dropdownRegionSelectItems, dropdownRegionSelected)
        }
        
        if(dropdownDepartmentNumber !== null) {

            const dropdownRegionSelectItems = basket.querySelectorAll('[data-dropdown-department-number-item]'),
                  dropdownRegionSelected = basket.querySelector('[data-dropdown-department-number-selected]'),
                  dropdownRegionLabel = basket.querySelector('[data-dropdown-department-number-label]');

                dropdownDepartmentNumber.addEventListener('click', function() {               
                    if (this.classList.contains('active')) {
                        this.classList.remove('active');
                    }
                    else {
                        delActive(dropdowns);
                        this.classList.add('active');
                    }
                    
                if(dropdownRegionSelected.innerText === '') {
                    dropdownRegionLabel.classList.toggle('active');
                } 
                //close
                closeMenu(basket, dropdownDepartmentNumber, dropdownRegionSelected, dropdownRegionLabel)
            })
            changeLable(dropdownRegionSelectItems, dropdownRegionSelected)
        }
    } 
}
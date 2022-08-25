export let basket = function () {
    const basket = document.querySelector('[data-basket-section]');
  
    if(basket !== null) {
        const dropdownRegion = basket.querySelector('[data-dropdown-region]'),
              dropdownCity = basket.querySelector('[data-dropdown-city]'),
              dropdownDepartmentNumber = basket.querySelector('[data-dropdown-department-number]'),
              dropdowns = basket.querySelectorAll('[data-dropdown]'),
              accordion = basket.querySelector('[data-order-accordion]'),
              popupModal = basket.querySelector('[data-modal-enter]');
         
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

                accordion.addEventListener('click', function() {
                    accordion.classList.toggle('active');
                    if(accordion.classList.contains('active')) {
                        content.style.height = content.scrollHeight + 'px';
                    } else {
                        content.style.height = 0 + 'px';
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

        if(popupModal !== null) {
            const   modalLink = popupModal.querySelectorAll('.js-modal-tab-item'),
                    tabsItems = popupModal.querySelectorAll(".js-modal-tab-section"),
                    buttonCloseModal = popupModal.querySelectorAll('[data-close-modal]'),
                    modalContainer = popupModal.querySelector('[data-popup-modal-container]'),
                    body = document.querySelector("#body-cont"),
                    buttonOpenModal = basket.querySelector('[data-open-popup]');

                    buttonOpenModal.addEventListener('click', function() {
                        popupModal.classList.add('active');
                        body.style.overflow = 'hidden';
                    })             
  //----------modal tabs----------------------------------------------
            modalLink.forEach(function(item) {
              item.addEventListener("click", function () {
                const tabId = item.getAttribute("data-modal-tab-item"),
                      currentTub = popupModal.querySelector(tabId);
                if (!item.classList.contains("active")) {
                  modalLink.forEach(function (item) {
                    item.classList.remove("active");
                  });
                  tabsItems.forEach(function (item) {
                    item.classList.remove("active");
                  });
                  item.classList.add("active");
                  currentTub.classList.add("active");
                }
              })
            })
  //----------modal close---------------------------------------------
            buttonCloseModal.forEach((item)=> {
              item.addEventListener('click', function() { 
                popupModal.classList.remove('active');
                body.style.overflow = 'auto';
              })
              popupModal.addEventListener('click',(e)=>{
                const click = e.composedPath().includes(modalContainer);
                if(!click) {
                    popupModal.classList.remove('active');
                    body.style.overflow = 'auto';

                }
              })
            })   
        }
    } 
}
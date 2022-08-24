export let basket = function () {
    const basket = document.querySelector('[data-basket-section]');
  
    if(basket !== null) {
        
        const dropdownRegion = basket.querySelector('[data-dropdown-region]'),
              dropdownRegionSelectItems = basket.querySelectorAll('[data-dropdown-region-item]'),
              dropdownRegionSelected = basket.querySelector('[data-dropdown-region-selected]'),
              dropdownRegionLabel = basket.querySelector('[data-dropdown-region-label]');

              dropdownRegionSelectItems.forEach((item)=> {
                item.addEventListener('click', ()=> {
                    dropdownRegionSelected.innerText = item.innerText;
                })
            })
        
            dropdownRegion.addEventListener('click', function() {
                this.classList.toggle('active');
                if(dropdownRegionSelected.innerText === '') {
                    dropdownRegionLabel.classList.toggle('active');
                } 
                //close
                basket.addEventListener('click',(e)=>{
                    const click = e.composedPath().includes(this);
                    if(!click) {
                        this.classList.remove('active');
                        if(dropdownRegionSelected.innerText === '') {
                            dropdownRegionLabel.classList.remove('active');
                        }   
                    }
                  })
            })


    }
    
}
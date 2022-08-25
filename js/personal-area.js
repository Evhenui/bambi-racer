export let personalArea = function () {
  const itemTabMenu = document.querySelectorAll(".js-personal-area-navigation__item"),
        tabsItems = document.querySelectorAll(".js-personal-area-section"),
        accordion = document.querySelector('[data-accordion]'),
        productButton = document.querySelectorAll('.js-product-button'),
        modalWindow = document.querySelector('[data-modal-enter]');

//----------------------tab menu-----------------
  if (itemTabMenu != null && tabsItems != null) {
    itemTabMenu.forEach(function (item) {
      item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTub = document.querySelector(tabId);
        if (!currentBtn.classList.contains("active")) {
          itemTabMenu.forEach(function (item) {
            item.classList.remove("active");
          });
          tabsItems.forEach(function (item) {
      
            item.classList.remove("active");
          });
          currentBtn.classList.add("active");
          currentTub.classList.add("active");
        }
      });
    });
  }
  if (modalWindow != null) {
    const modalLink = modalWindow.querySelectorAll('.js-modal-tab-item'),
          tabsItems = modalWindow.querySelectorAll(".js-modal-tab-section"),
          buttonCloseModal = modalWindow.querySelectorAll('[data-close-modal]'),
          modalContainer = modalWindow.querySelector('[data-popup-modal-container]'),
          body = document.querySelector("#body-cont");

          if(modalWindow.classList.contains('active')) {
            body.style.overflow = 'hidden';
          }

//----------modal tabs----------------------------------------------
          modalLink.forEach(function(item) {
            item.addEventListener("click", function () {
              const tabId = item.getAttribute("data-modal-tab-item"),
                    currentTub = modalWindow.querySelector(tabId);
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
              modalWindow.classList.remove('active');
              body.style.overflow = 'auto';
            })
            modalWindow.addEventListener('click',(e)=>{
              const click = e.composedPath().includes(modalContainer);
              if(!click) {
                modalWindow.classList.remove('active');
                body.style.overflow = 'auto';
              }
            })
          })   
  }
//----------------------button show menu comparison-----------------
  if (productButton != null) {
    productButton.forEach(function(item) {
      const btnNavParonal = document.querySelectorAll('.js-compare-menu-list');
      const activeProductButtonArr = document.querySelectorAll('.js-compare-button-nav');
      item.addEventListener('click', function(event) {
        const self = event.currentTarget,
              productMenu = self.querySelector('.js-compare-menu-list'),
              activeProductButton = self.querySelector('.js-compare-button-nav');
        document.addEventListener('click',(e)=>{
          const click = e.composedPath().includes(item);
          if(!click) {
              productMenu.classList.remove('active');
              activeProductButton.classList.remove('active');
          }
        })
        if(activeProductButton.classList.contains('active')) {
          productMenu.classList.remove('active');
          activeProductButton.classList.remove('active');
        } else {
          delActive(btnNavParonal);
          delActive(activeProductButtonArr);
          productMenu.classList.add('active');
          activeProductButton.classList.add('active');
        }     
      })
      function delActive(params) {
        params.forEach((el) => {
          el.classList.remove('active');
        })
      }
    });
    
  }
//----------------------accordion-----------------------------------
if (accordion != null) {
  const accordionItem = accordion.querySelectorAll('[data-accordion-item]');
  accordionItem.forEach((item) => {
    item.addEventListener('click', function(event) {
     const self = event.currentTarget;
     const accordionContent = self.querySelector('[data-accordion-content]');
     const accordionArrow = self.querySelector('[data-accordion-arrow]');
     this.classList.toggle('active');
     accordionArrow.classList.toggle('active');
     if(this.classList.contains('active')){
      accordionContent.style.height = accordionContent.scrollHeight + 'px';
     } else {
      accordionContent.style.height = 0 + 'px';
     }
    })
   })
}
};


    export let cardProdCatalog = function() {
        const itemColors = document.querySelectorAll('.js-card-catalog-color');
        if(itemColors != null) {
            itemColors.forEach((el) => {
                el.addEventListener('click', function() {
                    delActivColorCartProd();
                    el.classList.add('active');
                    el.querySelector('.js-card-catalog-color-item').classList.add('active');
                });
            })
            function delActivColorCartProd() {
                itemColors.forEach((el) => {
                    el.classList.remove('active');
                    el.querySelector('.js-card-catalog-color-item').classList.remove('active');
                })
            }
        }
        const btnBuyCardProd = document.querySelectorAll('.js-btn-buy-card-prod-catalog');
              btnBuyCardProd.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                el.querySelector('.card-prod-catalog__buy-text').classList.add('active');
            });
            el.addEventListener('mouseleave', () => {
                el.querySelector('.card-prod-catalog__buy-text').classList.remove('active');
            });
        })
    }

//  default cardProdCatalog;
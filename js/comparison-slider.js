export let compparisonSlider = function() {
    const personalComparisonWrp = document.querySelector('[data-personal-comparison-wrp]');
    
    if(personalComparisonWrp != null) {
        const   comparisonSliderBtnPrev = personalComparisonWrp.querySelector('[data-comparison-slider-btn-prev]'),
                comparisonSliderBtnNext = personalComparisonWrp.querySelector('[data-comparison-slider-btn-next]'),
                personalAreaCompItem = personalComparisonWrp.querySelectorAll('[data-personal-area-comp-item]'),
                personalAreaCompList = personalComparisonWrp.querySelector('[data-personal-area-comp-list]'),
                personalAreaCompListBody = personalComparisonWrp.querySelector('[data-personal-area-comp-list-body]'),
                slider = personalComparisonWrp.querySelector('.js-slider');
        let counter = 0;
        let space = (personalAreaCompItem.length-1)*8;
        const sectionSize = 260;
        let max = sectionSize * (personalAreaCompItem.length);
        let maxWidthSlider = `${sectionSize * personalAreaCompItem.length + space}px`;

        slider.style.maxWidth = maxWidthSlider;
        if(slider.style.maxWidth === maxWidthSlider){
            comparisonSliderBtnNext.style.display = 'none';
            comparisonSliderBtnPrev.style.display = 'none';
        }
        
          window.addEventListener('resize', function (){
            if(space + max > slider.offsetWidth){
                comparisonSliderBtnNext.style.display = 'block';
                comparisonSliderBtnPrev.style.display = 'block';
            } else {
                comparisonSliderBtnNext.style.display = 'none';
                comparisonSliderBtnPrev.style.display = 'none';
            }
            })
            
        
        comparisonSliderBtnNext.addEventListener('click', () => {
            if(window.innerWidth <= 680 ) {
                if(counter <= (personalAreaCompItem.length - 3)) {
                    counter ++;
                    window.getComputedStyle(personalAreaCompList).getPropertyValue('--height-page');
                    personalAreaCompList.style.setProperty('--personal-area-translateX', (-counter * 269) + 'px');
                    window.getComputedStyle(personalAreaCompListBody).getPropertyValue('--height-page');
                    personalAreaCompListBody.style.setProperty('--personal-area-translateX', (-counter * 269) + 'px');
                }
            } else {
                if(counter < (personalAreaCompItem.length - (personalAreaCompItem.length -1))) {
                    counter ++;
                    window.getComputedStyle(personalAreaCompList).getPropertyValue('--height-page');
                    personalAreaCompList.style.setProperty('--personal-area-translateX', (-counter * 269) + 'px');
                    window.getComputedStyle(personalAreaCompListBody).getPropertyValue('--height-page');
                    personalAreaCompListBody.style.setProperty('--personal-area-translateX', (-counter * 269) + 'px');
                }
            }

        })
        comparisonSliderBtnPrev.addEventListener('click', () => {
            if(counter != 0){
                counter--;
                window.getComputedStyle(personalAreaCompList).getPropertyValue('--height-page');
                personalAreaCompList.style.setProperty('--personal-area-translateX', (-counter * 269) + 'px');
                window.getComputedStyle(personalAreaCompListBody).getPropertyValue('--height-page');
                personalAreaCompListBody.style.setProperty('--personal-area-translateX', (-counter * 269) + 'px');
            }
        }) 
    }
}
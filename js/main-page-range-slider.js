export let mainPageRangeFun = function() {
    const mainPageRange = document.querySelector('.js-main-page-range-wrp');
    if(mainPageRange != null) {
        const mainPageRangeArr = mainPageRange.querySelectorAll('.js-main-page-range');
        const mainPageRangeCircle = mainPageRange.querySelectorAll('.js-main-page-range-circle-wrp');
        const mainPageRangeCircleRed = mainPageRange.querySelectorAll('.js-main-page-range-circle');
        const mainPageRangeImgArr = mainPageRange.querySelectorAll('.js-main-page-range-img');
        const widthSliderTotal = mainPageRange.querySelector('.js-width-slid');
        let width;
        let count = 0;
        // document.addEventListener("DOMContentLoaded", function(){
        //     window.setTimeout(function(){
        //         // do {
        //         //     setTimeout(function(){
        //         //         count++
        //         //     // if(count > (mainPageRangeImgArr.length -1)) {
        //         //     //     count = 0;
        //         //     // }
        //         //     roolSlider();
        //         //     }, 300)
                
        //         // } while(count < 20)
        //     }, 300)
        // });
        mainPageRangeArr.forEach((el, index) => {
            el.addEventListener('click', function() {
                delActivRange(mainPageRangeCircle);
                delActivRange(mainPageRangeCircleRed);
                delActivRange(mainPageRangeImgArr);
                this.classList.add('active');
                mainPageRangeImgArr[index].classList.add('active')
                el.querySelector('.main-page-range__circle').classList.add('active');
                el.querySelector('.js-main-page-range-circle').classList.add('active');
                if(window.innerWidth < 640) {
                    count = index;
                    roolSlider();
                }
            })
        });
        function delActivRange(param) {
            param.forEach((el) => {
                el.classList.remove('active')
            })
        }

        // моб логика
        
        console.log(width);
        
        function init() {
            width = mainPageRange.querySelector('.js-width-slid-wrp').offsetWidth;
            roolSlider();
            if(window.innerWidth < 640) {
                
                widthSliderTotal.style.width = width * mainPageRangeImgArr.length + 'px'; 
            }
            mainPageRangeImgArr.forEach(item => {
                console.log(width )
                item.style.width = width + 'px';
            })
        }
        window.addEventListener('resize', init);
        init()

        function roolSlider() {
            console.log(count);
            widthSliderTotal.style.transform = 'translate(-'+count*width+'px)';
        }
        
    }
}
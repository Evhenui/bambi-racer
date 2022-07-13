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
            widthSliderTotal.style.transform = 'translate(-'+count*width+'px)';
        }
        widthSliderTotal.addEventListener('touchstart', handleTouchStart, false);
        widthSliderTotal.addEventListener('touchmove', handleTouchMove, false);
        widthSliderTotal.addEventListener('touchend', handleTouchEnd, false)

        let x1 = null;
        let y1 = null;

        function handleTouchStart(event) {
            const firstTouch = event.touches[0]
            x1 = firstTouch.clientX;
        }
        let xDiffObj = {}

        function handleTouchMove(event) {
            if(!x1) {
                return false;
            }
            let x2 =  event.touches[0].clientX;
            let xDiff = x2 - x1;
            xDiffObj.xDiff = xDiff;
            x1 = null;
        }
        
        function handleTouchEnd() {
            if(xDiffObj.xDiff > 0) {
                if(count >= 0) {
                    delActivRange(mainPageRangeCircle);
                    count--;
                    console.log(count);
                    if(count != undefined) {
                        mainPageRangeCircle[count].classList.add('active')
                        roolSlider()
                    }   
                }
            } else {
                if(count < (mainPageRangeImgArr.length - 1))
                delActivRange(mainPageRangeCircle);
                count++;
                if(count != undefined) {
                    mainPageRangeCircle[count].classList.add('active')
                }
                roolSlider();
            }
        }
    }
}
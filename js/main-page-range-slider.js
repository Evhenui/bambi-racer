export let mainPageRangeFun = function() {
    const mainPageRange = document.querySelector('.js-main-page-range-wrp');
    if(mainPageRange != null) {
        const mainPageRangeArr = mainPageRange.querySelectorAll('.js-main-page-range');
        const mainPageRangeCircle = mainPageRange.querySelectorAll('.js-main-page-range-circle-wrp');
        console.log(mainPageRangeCircle);
        const mainPageRangeCircleRed = mainPageRange.querySelectorAll('.js-main-page-range-circle');
        const mainPageRangeImgArr = mainPageRange.querySelectorAll('.js-main-page-range-img');
        mainPageRangeArr.forEach((el, index) => {
            el.addEventListener('click', function() {
                delActivRange(mainPageRangeCircle);
                delActivRange(mainPageRangeCircleRed);
                delActivRange(mainPageRangeImgArr);
                this.classList.add('active');
                mainPageRangeImgArr[index].classList.add('active')
                el.querySelector('.main-page-range__circle').classList.add('active');
                el.querySelector('.js-main-page-range-circle').classList.add('active');
            })
        });
        function delActivRange(param) {
            console.log(param);
            param.forEach((el) => {
                el.classList.remove('active')
            })
        }
    }
}
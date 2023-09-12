$(function () {

    var amt = $('.slide-testimonials-1').length;
    console.log(amt)
    var curIndex = 0;
    var delay = 3000;

    autoPlay();

    function autoPlay() {
        interval = setInterval(function () {
            curIndex++;
            if (curIndex == amt) {
                curIndex = 0;
            }
            goToSlider(curIndex);
        }, delay)
    }

    function goToSlider(curIndex) {
        var offSetX = $('.slide-testimonials-1').eq(curIndex).offset().left - $('.slide-testimonials-1').offset().left;

        $('.slide-testimonials').stop().animate({ 'scrollLeft': offSetX + 'px' });
    }

    $('#btn-left').click(function () {
        curIndex--;
        if (curIndex < 0) {
            curIndex = amt - 1;
        }

        if (!interval) {
            interval = setInterval(function () {
                curIndex++;
                if (curIndex == amt) {
                    curIndex = 0;
                }
                goToSlider(curIndex);
            }, delay);
        }
        goToSlider(curIndex);
    });

    $('#btn-right').click(function () {
        curIndex++;
        if (curIndex == amt) {
            curIndex = 0;
        }
        if (!interval) {
            interval = setInterval(function () {
                curIndex++;
                if (curIndex == amt) {
                    curIndex = 0;
                }
                goToSlider(curIndex);
            }, delay);
        }
        goToSlider(curIndex);
    });

})
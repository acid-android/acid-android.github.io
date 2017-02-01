
    var hwSlideSpeed = 1500;
    var hwTimeOut = 4000;
    var hwNeedLinks = true;

    $(function slide() {
        $('.slide').css(
            {
                "position": "absolute",
                "top": '0', "left": '0'
            }).hide().eq(0).show();
        var slideNum = 0;
        var slideTime;
        slideCount = $(".slider .slide").size();
        var animSlide = function (arrow) {
            clearTimeout(slideTime);
            $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
            if (arrow == "next") {
                if (slideNum == (slideCount - 1)) {
                    slideNum = 0;
                }
                else {
                    slideNum++
                }
            }
            else if (arrow == "prew") {
                if (slideNum == 0) {
                    slideNum = slideCount - 1;
                }
                else {
                    slideNum -= 1
                }
            }
            else {
                slideNum = arrow;
            }
            $('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
        }
        if (hwNeedLinks) {
            var $linkArrow = $('<a class="prew-btn" href="#"><i class="fa fa-chevron-left" aria-hidden="true"></i></a><a class="next-btn" href="#"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>')
                .prependTo('.slider');
            $('.next-btn').click(function () {
                animSlide("next");
                return false;
            })
            $('.prew-btn').click(function () {
                animSlide("prew");
                return false;
            })
        }
        var pause = false;
        var rotator = function () {
            if (!pause) {
                slideTime = setTimeout(function () {
                    animSlide('next')
                }, hwTimeOut);
            }
        };
        $('.slider-container').hover(
            function () {
                clearTimeout(slideTime);
                pause = true;
            },
            function () {
                pause = false;
                rotator();
            });
        rotator();
    }(jQuery, document));

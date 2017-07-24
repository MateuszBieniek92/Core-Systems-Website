$(function () {

    const mobile = window.matchMedia("screen and (max-width: 450px)");
    const tablet = window.matchMedia("screen and (min-width: 451px) and (max-width: 899px)");
    const desktop = window.matchMedia("screen and (min-width: 900px)");
    const body = $('body');
    const topScroll = body.scrollTop();

    const $downArrow = $('.down-arrows').find('i');

    // scroll Top
    $(function () {
        $(window).on('scroll', function () {
            const pix = $(document).scrollTop();
            //            console.log('scroll: ' + pix);
        });
    });

    function scrollDesktop() {
        if (mobile.matches) {
            $downArrow.on('click', function () {
                $('html, body').animate({
                    scrollTop: 580
                }, 2000);
            });
        } else if (tablet.matches) {
            $downArrow.on('click', function () {
                $('html, body').animate({
                    scrollTop: 540
                }, 2000);
            });
        } else if (desktop.matches) {
            $downArrow.on('click', function () {
                $('html, body').animate({
                    scrollTop: 759
                }, 2000);
            });
        }

    };

    // hamburger menu

    const hamburgerBtn = $('.hamburger');
    const navPanel = $('.left-panel');
    const nav = $('nav');

    const triangle = $('<div class="triangle">');


    function toggleMenu() {
        if (mobile.matches) {
            if (navPanel.css('display') === 'block') {
                navPanel.css('display', 'none');
                triangle.remove();
            } else {
                navPanel.css('display', 'block');
                nav.append(triangle);
            }
        } else {
            if (navPanel.css('display') === 'block') {
                navPanel.css('display', 'none');
            } else {
                navPanel.css('display', 'block');
            }
        }
    }

    hamburgerBtn.on('click', function () {
        toggleMenu();
    });


    // slider

    const $photoSlider = $('.photo-slider');
    const $liPos = $photoSlider.find('li');
    const $liOne = $photoSlider.children().first();
    const $liTwo = $photoSlider.children().eq(1);
    const $liThree = $photoSlider.children().last();
    $position = 0;

    const $sliderCircles = $('.slider-circles');
    const $firstCircle = $sliderCircles.children().first();
    const $secondCircle = $sliderCircles.children().eq(1);
    const $thirdCircle = $sliderCircles.children().last();


    const $leftSliderBtn = $('.left-slider-arrow');
    const $rightSliderBtn = $('.right-slider-arrow');

    $liOne.fadeIn(1000).css('display', 'block');
    $liTwo.css('display', 'none');
    $liThree.css('display', 'none');

    $firstCircle.css('background', '#c2c2b5');
    $secondCircle.css('border', '3px solid #c2c2b5');
    $thirdCircle.css('border', '3px solid #c2c2b5');

    function resetCircles() {
        $firstCircle.css('border', '3px solid #c2c2b5').css('background', 'none');
        $secondCircle.css('border', '3px solid #c2c2b5').css('background', 'none');
        $thirdCircle.css('border', '3px solid #c2c2b5').css('background', 'none');
    }

    function slide(auto) {
        if (auto === true) {
            $position++;
            if ($position === 3) {
                $position = 0;
            }
        }
        if (($position) === 0) {
            $liOne.fadeIn(1000).css('display', 'block');
            resetCircles();
            $liTwo.css('display', 'none');
            $liThree.css('display', 'none');
            $firstCircle.css('background', '#c2c2b5');
            $secondCircle.css('border', '3px solid #c2c2b5');
            $thirdCircle.css('border', '3px solid #c2c2b5');

        } else if (($position) === 1 || ($position) === -2) {
            resetCircles();
            $liOne.css('display', 'none');
            $liTwo.fadeIn(1000).css('display', 'block');
            $liThree.css('display', 'none');
            $firstCircle.css('border', '3px solid #c2c2b5');
            $secondCircle.css('background', '#c2c2b5');
            $thirdCircle.css('border', '3px solid #c2c2b5');
        } else if (($position) === 2 || ($position) === -1) {
            resetCircles();
            $liOne.css('display', 'none');
            $liTwo.css('display', 'none');
            $liThree.fadeIn(1000).css('display', 'block');
            $firstCircle.css('border', '3px solid #c2c2b5');
            $secondCircle.css('border', '3px solid #c2c2b5');
            $thirdCircle.css('background', '#c2c2b5');
        }
    }

    function rightButton() {
        const widthNext = $rightSliderBtn.outerWidth();
        time = 500;
        $rightSliderBtn.on('click', function () {
            $position += 1;
            if ($position > 2) {
                $position = 2;
            }
            slide();
        });

    };

    function leftButton() {
        const widthNext = $leftSliderBtn.outerWidth();
        time = 500;
        $leftSliderBtn.on('click', function () {
            $position -= 1;
            if ($position < 0) {
                $position = 0;
            }
            slide();
        });

    };

    $(window).resize(scrollDesktop);
    scrollDesktop();
    rightButton();
    leftButton();

});

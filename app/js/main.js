$(function() {
    $('.header__btn').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu--close-js');
    });
    $('.rightside-menu__close-btn').on('click', function() {
        $('.rightside-menu').addClass('rightside-menu--close-js');
    });

    //mobile menu btn
    $('.header__menu-btn').on('click', function() {
        $('.menu').toggleClass('menu--open-js');
    });

    if ($(window).width() < 651) {
        $('works-path__item--measurements').appendTo($('.works-path__items-box'));
    }

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
        responsive: [{
                breakpoint: 1700,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,

                }
            },
            {
                breakpoint: 1511,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6

                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });
});


var mixer = mixitup('.gallery__inner', {
    load: {
        filter: '.living'
    }
});
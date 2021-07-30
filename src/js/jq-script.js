$(document).ready(function () {

    $('.hero-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
    });

    $('.catalog-inner-slick').slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [{
                breakpoint: 767,
                settings: "unslick"
            },
            {
                breakpoint: 0,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.address-slick').slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [{
                breakpoint: 767,
                settings: "unslick"
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });



    $('.cards-slick').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [{
                breakpoint: 767,
                settings: "unslick"
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.new-products-slick').slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.sale-slick').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1367,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            },
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }]
    });

    if (document.documentElement.clientWidth < 1025 && document.documentElement.clientWidth > 768) {
        $('.sale__list').on('afterChange', function (event, slick, currentSlide) {
            $('.sale__item.slick-active').css('opacity', '1');
            $('.sale__item.slick-active:last').css('opacity', '0.4');
        });
    }
    if (document.documentElement.clientWidth < 769) {
        $('.sale__list').on('afterChange', function (event, slick, currentSlide) {
            $('.sale__item.slick-active').css('opacity', '1');
            $('.sale__item.slick-active:last').css('opacity', '0.4');
        });
    }

    $('.bonus-slick').slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [{
                breakpoint: 767,
                settings: "unslick"
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.news-slick').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.news__prev'),
        nextArrow: $('.news__next'),
        responsive: [{
            // breakpoint: 1367,
            // settings: {
            //     slidesToShow: 4,
            //     slidesToScroll: 1
            // },
            // breakpoint: 769,
            // settings: {
            //     slidesToShow: 3,
            //     slidesToScroll: 1
            // }
        }]
    });

    $('.card__slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.card__slider-nav'
    });
    $('.card__slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.card__slider-for',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        responsive: [{
            breakpoint: 1920,
            settings: {
                vertical: false,
                verticalSwiping: false,
            }
        }]
    });

    $('.card__item.slick-active:first').addClass('opacity');
    $('.card__slider-nav').on('afterChange', function (event, slick, currentSlide) {
        $('.card__item.slick-active').removeClass('opacity');
        $('.card__item.slick-active:first').addClass('opacity');
    });


    if (document.documentElement.clientWidth < 769 && document.documentElement.clientWidth > 320) {
        $('.sale__item.slick-active:last').addClass('opacity');
        $('.card-row__slider').on('afterChange', function (event, slick, currentSlide) {
            $('.sale__item.slick-active').removeClass('opacity');
            $('.sale__item.slick-active:last').addClass('opacity');
        });
    }

    $('.card-row__slider ').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1367,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    })


    $('.footer__down').click(function () {
        $(this).toggleClass('active')
        $(this).next().slideToggle();
    })

    $('#burger').on('click', () => {
        $('.menu').addClass('active')
        $('body').css('overflow', 'hidden');
    })

    $('#closeCatalogAside').on('click', () => {
        $('.catalog__aside').removeClass('active');
        $('body').css('overflow', '');
    })

    $('#closeFeedback').on('click', () => {
        $('.feedback').removeClass('active');
        $('body').css('overflow', '');
    })

    $('.jewelry__button').on('click', () => {
        $('.jewelry__button').prev('p').toggleClass('current');
    })

    // const toggle = document.querySelectorAll('.toggle');
    // toggle.forEach((item) => {
    //     item.addEventListener('click', () => {
    //         item.siblings('.toggleHide').classList.add('.hide');
    //     });
    // })



    $('#catalog__caption-show').click(function () {
        $('.catalog__aside').toggleClass('active');
        $('body').css('overflow', 'hidden');
    })

    if ($(window).width() < 321) {
        $('.requisites__title').addClass('active');
        $('.requisites__content').addClass('hide');
    }

    $('#change-address').click(function () {
        $('body').css('overflow', 'hidden');
        $('.choos-address').addClass('active');
    })

    $('#change-address-market').click(function () {
        $('body').css('overflow', 'hidden');
        $('.choose-magazine__wrapper').addClass('active');
    })

    $('.choos-address__close').on('click', function () {
        $('body').css('overflow', '');
        $('.choos-address').removeClass('active');
    })

    $('#lk').on('click', function () {
        $('.cabinet').addClass('active');
        $('body').css('overflow', 'hidden');
    })
    $('#basket').on('click', function () {
        $('.basket-modal').addClass('active');
        $('body').css('overflow', 'hidden');
    })

    $('.close-modal').on('click', function () {
        $(this).parent().parent().removeClass('active');
        $('body').css('overflow', '');
    })


    $('.close-modal--choose').on('click', function () {
        $(this).parent().parent().parent().removeClass('active');
        $('body').css('overflow', '');
    })


    $('#basket-item-show').on('click', function () {
        $(this).toggleClass('active');
        $('.basket-modal__item').toggleClass('show');
    })

    // $(window).scroll(function () {
    //     /*если прокрутка больше 300 показ. кнопку*/
    //     if ($(this).scrollTop() > 300) {
    //         $('.slide-up').fadeIn();
    //         /*если нет то скрываем кнопку*/
    //     } else {
    //         $('.slide-up').fadeOut();
    //     }
    // });
    /*при клике по кнопке переходим вверх стр.*/
    $('.slide-up__inner').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});
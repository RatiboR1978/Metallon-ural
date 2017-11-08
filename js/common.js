$(function () {

    $('.slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    dots: false
                }
            }
        ]
    });

    $('.slider-logos__text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-logos__img'
    });
    $('.slider-logos__img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-logos__text',
        centerMode: true,
        focusOnSelect: true
    });

    $('.slick-slide').click(function () {
        $('.slick-slide img').removeClass("slider-logos__item");
        if($(".slick-center")) {
            $(".slick-center img").addClass("slider-logos__item");
        }
    });






});
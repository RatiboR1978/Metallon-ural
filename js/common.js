$(function () {

    $('.slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    dots: false
                }
            }
        ]
    });




});
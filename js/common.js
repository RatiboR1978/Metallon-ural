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
        arrows: false,
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


    $(function(){

        $("#wr-tabs").on("click", ".tab", function(){

            var tabs = $(".tab"),
                cont = $(".tab-cont");

            tabs.removeClass("catalog__list-item--active");
            cont.removeClass("catalog__item--active");
            $(this).addClass("catalog__list-item--active");
            cont.eq($(this).index()).addClass("catalog__item--active");

            return false;
        });
    });

    $('.header-mob_menu a').click(function (e) {
        e.preventDefault();
        var currentBlock = $(this).attr('href'),
            currentBlockOffset = $(currentBlock).offset().top;

        $('html, body').animate({
            scrollTop: currentBlockOffset - 20
        },500)
    });





});

ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [56.86413757, 60.62005800],
        zoom: 16
    });

    myPlacemark = new ymaps.Placemark([56.86413757, 60.62005800], {
        hintContent: 'Металлон Урал'
    },
        {
        preset: 'islands#redIcon'
    });

    myMap.controls.remove('typeSelector');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('fullscreenControl');

    myMap.behaviors.disable([
        'scrollZoom'
    ]);

    myMap.geoObjects.add(myPlacemark);
}
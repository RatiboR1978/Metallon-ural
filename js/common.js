$(function () {

    /*Slider http://kenwheeler.github.io/slick/
     ========================*/

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


    /*Catalog - tabs - mobile
     ========================*/

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

    /*Catalog - tabs - desktop
     ========================*/

    $(function(){

        $(".catalog__menu-wrap").on("click", ".tab-js", function(e){

            var tabs = $(".tab-js"),
                cont = $(".tab-cont");

            e.preventDefault();

            tabs.removeClass("catalog__menu-item--active");
            cont.removeClass("catalog__item--active");
            $(this).addClass("catalog__menu-item--active");
            cont.eq($(this).index()).addClass("catalog__item--active");

            return false;
        });
    });

    /*Menu - scroll
     ========================*/

    $('.header-mob_menu a, .header-mob__order').click(function (e) {
        e.preventDefault();
        var currentBlock = $(this).attr('href'),
            currentBlockOffset = $(currentBlock).offset().top;

        $('html, body').animate({
            scrollTop: currentBlockOffset - 20
        },500)
    });

    /*Select http://dimox.name/jquery-form-styler/
     ========================*/

    $('select').styler();
    $('.placeholder').html('');

    /*Modals
    ========================*/

    $('.question__button').click(function () {
        $('.order3').fadeIn();
    });

    $('.order3__button').click(function () {
        $('.order3').fadeOut();
    })

    $('.equipment-selection__button-mob, .catalog__item-js').click(function () {
        $('.order1').fadeIn();
    });

    $('.order1__button').click(function () {
        $('.order1').fadeOut();
        $('.order2').fadeIn();
    })

    $('.order2__button').click(function () {
        $('.order2').fadeOut();
    })

    /*Partners - tabs - desktop
     ========================*/

    $(function(){

        $(".partners__logos").on("click", ".partners-tab-js", function(){

            var tabs = $(".partners-tab-js"),
                cont = $(".partners-tab-cont");


            tabs.removeClass("partners__logo--active");
            cont.removeClass("partners__item--active");
            $(this).addClass("partners__logo--active");
            cont.eq($(this).index()).addClass("partners__item--active");

            return false;
        });
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
        'drag',
        'scrollZoom'
    ]);

    myMap.geoObjects.add(myPlacemark);
}
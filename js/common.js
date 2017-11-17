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

    /*Menu - section - scroll
     ========================*/

    $('.header-mob_menu a, .header-mob__order, .header_menu a, .header__order').click(function (e) {
        e.preventDefault();
        var currentBlock = $(this).attr('href'),
            body = $('html, body'),
            width = $(window).width();
            currentBlockOffset = $(currentBlock).offset().top;
        console.log($(window).width());

        if(currentBlock === '#company' && width >= 1263) {
            body.animate({
                scrollTop: currentBlockOffset - 130
            },500)
        } else if(currentBlock === '#catalog' && width >= 1263) {
            body.animate({
                scrollTop: currentBlockOffset - 132
            },500)
        } else {
            body.animate({
                scrollTop: currentBlockOffset - 60
            },500)
        }

    });

    /*Select http://dimox.name/jquery-form-styler/
     ========================*/

    $('select').styler();
    $('.placeholder').html('');

    /*Modals
    ========================*/
    var name = $('#check5'),
        email = $('#check3'),
        emailTitle = $('#email'),
        nameTitle = $('#name'),
        order1Desk = $('.order1-desktop'),
        order2Desk = $('.order2-desktop'),
        overlay = $('.order1-desktop__overlay'),
        pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
        warning1 = $('.order1__warning1'),
        warning2 = $('.order1__warning2');

    $('.question__button').click(function () {
        window.location = 'thanks.html';
    });

    $('.order3__button').click(function () {
        window.location = 'index.html';
    });

    $('.equipment-selection__button-mob').on("click", function() {
        window.location = 'form.html';
    });

    $('.catalog__item-js').on("click", function() {
        var width = $(window).width();
        warning1.css('display', 'none');
        nameTitle.css('color', 'black');
        name.css('border-color', '#3c3c3b');
        emailTitle.css('color', 'black');
        email.css('border-color', '#3c3c3b');
        warning2.css('display', 'none');
        name.val('');
        email.val('');
        if(width < 1263) {
            window.location = 'form.html';
        } else {
            order1Desk.fadeIn();
            overlay.fadeIn();
        }
    });

    $('.equipment-selection__button').on("click", function() {
        warning1.css('display', 'none');
        nameTitle.css('color', 'black');
        name.css('border-color', '#3c3c3b');
        emailTitle.css('color', 'black');
        email.css('border-color', '#3c3c3b');
        warning2.css('display', 'none');
        name.val('');
        email.val('');
        order1Desk.fadeIn();
        overlay.fadeIn();
    });

    $('.order1-desktop__button').on("click", function() {
        if(name.val().length === 0) {
            warning1.fadeIn();
            nameTitle.css('color', '#9c3335');
            name.css('border-color', '#9c3335');
        } else if (!pattern.test(email.val())) {
            emailTitle.css('color', '#9c3335');
            email.css('border-color', '#9c3335');
            warning2.fadeIn();
        } else {
            order1Desk.fadeOut();
            order2Desk.fadeIn();
        }
    });

    $('.order1-desktop__close').on("click", function() {
        order1Desk.fadeOut();
        overlay.fadeOut()
    });

    $('.order2-desktop__close, .order2-desktop__button').on("click", function() {
        order2Desk.fadeOut();
        overlay.fadeOut()
    });

    $('.order1__button').click(function () {
        $('.order1').fadeOut();
        $('.order2').fadeIn();
    });

    $('.question__button-desktop').click(function () {
        order2Desk.fadeIn();
        overlay.fadeIn();
    });

    $('.order2__button').click(function () {
        window.location = 'thanks.html';
    });

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

    /*Button - Up
     ========================*/

    $(window).scroll(function() {

        if($(this).scrollTop() !== 0) {
            $('.bt-up').fadeIn();
        } else {
            $('.bt-up').fadeOut();
        }
    });

    $('.bt-up').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });


    /*Logo - mobile - scroll
     ========================*/

    $('.header-mob__logo').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });







});

ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    var mapArea = document.querySelector('.map__area');

    if(mapArea.offsetHeight < 730) {
        myMap = new ymaps.Map("map", {
            center: [56.86413757, 60.62005800],
            zoom: 16
        });
    } else {
        myMap = new ymaps.Map("map", {
            center: [56.86413757, 60.6130100],
            zoom: 16
        });
    }


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
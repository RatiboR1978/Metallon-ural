$(document).ready(function () {

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

    $('.slider__list img').css('opacity', '1');


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

    $('.order2_select, .order2_select2, .order2_select-mob1, .order2_select-mob2').styler();
    $('.placeholder').html('');

    /*Modals
    ========================*/

    var order1Desktop = $('.order1-desktop'),
        overlay1Desktop = $('.order1-desktop__overlay'),
        order2Desktop = $('.order2-desktop');

    $('.order3__button').click(function () {
        window.location = 'index.html';
    });

    $('.equipment-selection__button-mob').on("click", function() {
        window.location = 'form.html';
        localStorage.setItem('key', '1');
    });

    $('.catalog__item-js').on("click", function() {
        var width = $(window).width();
        if(width < 1263) {
            window.location = 'form.html';
        } else {
            order1Desktop.fadeIn();
            overlay1Desktop.fadeIn();
        }
    });

    $('.equipment-selection__button').on("click", function() {
        $('#login, #email, #phone').val('');
        order1Desktop.fadeIn();
        overlay1Desktop.fadeIn();
        $('.order2_select').css('display', 'block');
        $('#order1__model').css('display', 'none');
    });

    $('.order1-desktop__close').on("click", function() {
        order1Desktop.fadeOut();
        overlay1Desktop.fadeOut()
    });

    $('.order2-desktop__close, .order2-desktop__button').on("click", function() {
        $("#questionName").val('');
        $("#questionTel").val('');
        order2Desktop.fadeOut();
        overlay1Desktop.fadeOut()
    });

    $('.order2__button').click(function () {
        $('.order2__wrap').css('display', 'none');
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


    /*Validation
     ===============================*/

    $('#closeForm').on("click", function() {
        $(".text-error").remove();
        $("#login, #email, #phone").removeClass('error');
        $('#loginTitle, #emailTitle, #phoneTitle').removeClass('title-error');
    });

    function validateForm(name, email, phone, nameTitle, emailTitle, phoneTitle) {
        $(".text-error").remove();
        name.removeClass('error');
        email.removeClass('error');
        phone.removeClass('error');
        nameTitle.removeClass('title-error');
        emailTitle.removeClass('title-error');
        phoneTitle.removeClass('title-error');

        // Проверка логина
        var el_l    = name;
        if ( el_l.val().length === 0 ) {
            var v_login = true;
            el_l.after('<div class="text-error for-login">Пожалуйста, заполните это поле</div>');
            $(".for-login").css({top: el_l.position().top + el_l.outerHeight() + 2});
            name.addClass('error');
            nameTitle.addClass('title-error');
        }

        // Проверка e-mail

        var reg     = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
        var el_e    = email;
        var v_email = el_e.val()?false:true;

        if ( v_email ) {
            el_e.after('<div class="text-error for-email">Пожалуйста, заполните это поле</div>');
            $(".for-email").css({top: el_e.position().top + el_e.outerHeight() + 2});
            email.addClass('error');
            emailTitle.addClass('title-error');
        } else if ( !reg.test( el_e.val() ) ) {
            v_email = true;
            el_e.after('<div class="text-error for-email">Проверьте правильность заполнения поля</div>');
            $(".for-email").css({top: el_e.position().top + el_e.outerHeight() + 2});
            email.addClass('error');
            emailTitle.addClass('title-error');
        }

        // Проверка телефона

        var el_p    = phone;
        if ( el_p.val().length === 0 ) {
            var v_phone = true;
            el_p.after('<div class="text-error for-login">Пожалуйста, заполните это поле</div>');
            $(".for-login").css({top: el_p.position().top + el_p.outerHeight() + 2});
            phone.addClass('error');
            phoneTitle.addClass('title-error');
        }


        return ( v_login || v_email || v_phone);
    }

    $('.order1-desktop__button').on('click', function(event) {
        if ( validateForm($('#login'), $('#email'), $('#phone'), $('#loginTitle'), $('#emailTitle'), $('#phoneTitle')) ) { // если есть ошибки возвращает true
            event.preventDefault();
        } else {
            order1Desktop.fadeOut();
            order2Desktop.fadeIn();
        }
    });

    $('.order1__button').click(function () {
        if ( validateForm($("#loginMob"), $("#emailMob"), $("#phoneMob"), $("#loginMobTitle"), $("#emailMobTitle"), $("#phoneMobTitle")) ) { // если есть ошибки возвращает true
            event.preventDefault();
        } else {
            var value = localStorage.getItem('key');
            if(value === '1') {
                $('.order2__wrap').css('display', 'block')
            } else {
                $('#order2__text').html(value);
            }
            $('.order1').fadeOut();
            $('.order2').fadeIn();
            localStorage.clear()
        }
    });


    $('.question__button-desktop').click(function () {
        if ( validateFormQuestion($("#questionName"), $("#questionTel")) ) { // если есть ошибки возвращает true
            event.preventDefault();
        } else {
            order2Desktop.fadeIn();
            overlay1Desktop.fadeIn();
        }
    });

    $('.question__button').click(function () {
        if ( validateFormQuestion($("#questionName"), $("#questionTel")) ) {
            event.preventDefault();
        } else {
            window.location = 'thanks.html';
        }
    });

    function validateFormQuestion(name, phone) {
        $(".text-error").remove();
        name.removeClass('error');
        phone.removeClass('error');


        // Проверка имени
        var el_l    = name;
        if ( el_l.val().length === 0 ) {
            var v_login = true;
            el_l.after('<div class="text-error for-login">Пожалуйста, заполните это поле</div>');
            $(".for-login").css({top: el_l.position().top + el_l.outerHeight() + 2});
            name.addClass('error');
        }

        // Проверка телефона

        var el_p    = phone;
        if ( el_p.val().length === 0 ) {
            var v_phone = true;
            el_p.after('<div class="text-error for-login">Пожалуйста, заполните это поле</div>');
            $(".for-login").css({top: el_p.position().top + el_p.outerHeight() + 2});
            phone.addClass('error');
        }

        return ( v_login || v_phone);
    }


    /*Choosing the right equipment
     ===============================*/

    var select1 = $('.select1'),
        item = $('.catalog__item-js');


    item.click(function() {
        var h3 = $(this).find('h3');
        localStorage.setItem('key', '' + $(h3).html());
        $('#order1__model').css('display', 'block');
        $('.order2_select').css('display', 'none');
        if ($(h3).html().length > 0) {
            $('#order1__model').html($(h3).html());
        }
    });

    $('#catalog__consumables').click(function () {
        $('#order1__model').html($('#catalog__title1').html());
        order1Desktop.fadeIn();
        overlay1Desktop.fadeIn();
        $('#order1__model').css('display', 'block');
        $('.order2_select').css('display', 'none');
    });

    $('#catalog__burner').click(function () {
        $('#order1__model').html($('#catalog__title2').html());
        order1Desktop.fadeIn();
        overlay1Desktop.fadeIn();
        $('#order1__model').css('display', 'block');
        $('.order2_select').css('display', 'none');
    });

    $('.catalog__item5-button-mob').on("click", function() {
        window.location = 'form.html';
        localStorage.setItem('key', '' + $('#catalog__title1').html());
    });

    $('.catalog__item6-button-mob').on("click", function() {
        window.location = 'form.html';
        localStorage.setItem('key', '' + $('#catalog__title2').html());
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









































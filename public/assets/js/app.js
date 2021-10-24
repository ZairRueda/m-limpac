
$(function() {

    $('div.ocultar').hide();

    $('.menu-nosotros a:first').addClass('activo')

    $('.about__data .info-nosotros:first').show();

    $('.menu-nosotros a').on('click', function() {

        $('.menu-nosotros a').removeClass('activo');

        $(this).addClass('activo');

        $('.ocultar').hide();

        var enlace = $(this).attr('href');

        $(enlace).fadeIn(500);

        return false;

    });
});


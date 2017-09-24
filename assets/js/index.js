/********************modal*****************/

/**********************scroll***********************/
var lastScrollTop = 0;
window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        $('.title-main').css('font-size', '2.3em');
        $('.title-main').css('padding-left', '3.5em');
        $('#icon-search').css('opacity', '1');
        $('.hide').css('display', 'none');
        $('.main-brand').css('top', '7.5em');
        $('.grid-product').css('top', '13.5em');
        $('.item-product').css('padding', '0em 0.2em');
        $('.main-header').addClass('translate');
        $('.logo').css('font-size', '2.2em');

    } else {
        if (currentScroll <= 3) {
          $('.main-brand').css('top', '18em'); ;
            $('.grid-product').css('top', '24.2em');
            $('.title-main').css('padding-left', '0em');
            $('.hide').css('display', 'inline-block');
            $('.item-product').css('padding', '0 1em');
            $('.main-header').removeClass('translate');
            $('.logo').css('font-size', '5em');
            $('.main-brand').css('flex-direction', 'column');
            $('#icon-search').css('opacity', '0');
            $('.title-main').css('font-size', '3em');
        }
    }
    lastScrollTop = currentScroll;
}, false);
$('.span-search').click(function() {
    $('.input-search').css('display', 'inline-block');
    $('.span-search').css('display', 'none');
});
$('.close').click(function(){
  $('.main-brand').css('flex-direction', 'column-reverse');
});
$('#icon-search').click(function() {
    $(".input-search").toggle();
    $(".span-search").toggle();
    $('.main-header').removeClass('translate');
    $('.main-brand').css('flex-direction', 'column-reverse');
    $('.title-main').css('padding-left', '0em');
    $('.hide').css('display', 'inline-block');
    $('.item-product').css('padding', '0 1em');
    $('.main-header').removeClass('translate');
    $('.logo').css('font-size', '5em');
    $('.title-main').css('font-size', '3em');
});

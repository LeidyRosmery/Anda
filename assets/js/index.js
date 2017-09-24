const lastScrollTop = 0;
window.addEventListener("scroll", function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {

$('.title-main').css('transform', 'translate(8px, -133px)');
$('.title-main').css('font-size', '2.3em');
$('#icon-search').css('opacity','1');
$('.hide').css('display','none');
$('.nav-product').css('transform', 'translate(-390px, -188px)');
$('.nav-product').css('font-size', '0.8em');
//$('.logo').css('transform', 'translate(8px, -133px)');



    } else {
        if (currentScroll <= 3) {
          $('.hide').css('display','inline');

          //$('.logo').css('transform', 'translate(0px,0px)');
          //$('.logo').css('font-size','5em');
          $('#icon-search').css('opacity','0');
          $('.nav-product').css('transform', 'translate(0px, 0px)');
          $('.nav-product').css('font-size', '1em');
      $('.title-main').css('font-size', '3em');
            $('.title-main').css('transform', 'translate(0px,0px)');
        }
    }
    lastScrollTop = currentScroll;
}, false);

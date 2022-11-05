(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function() {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-menu a').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });


  // sticky-header
  {
  var wind = $(window);
  var sticky = $('#sticky-header');
  wind.on('scroll', function() {
      var scroll = wind.scrollTop();
      if (scroll < 5) {
          sticky.removeClass('sticky');
      } else {
          sticky.addClass('sticky');
      }
  });
  $(window).on('load resize',function(){
    $('.header-section').height($('.header-in').outerHeight());
    $('body').css('--header-height',$('.header-in').outerHeight() + 'px');
  });
  }


  // owl-carousel
  $('.testimonial-slider-active').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    nav: true,
    items:1,
    dots:false,
    navText: ['<span class="far fa-arrow-left"></span>','<span class="far fa-arrow-right"></span>']
  });



    // window-animation
    function winCount(){
      document.addEventListener('scroll', function(){
        let ticking = false;
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const windPos = window.scrollY;
            const windHeight = window.innerHeight;
            document.querySelector('body').style.setProperty('--windPos', windPos);
            ticking = false;
          });
          ticking = true;
        }
      })
    }
    winCount();
     

})(jQuery);




$(document).ready(function(){

  // scroll up
  $(function(){
    $.scrollUp();
  });


  // preloader
  $("#preloader").fadeOut(500);

})












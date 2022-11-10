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


  $(".rp-card-box .close-button").click(function(){
    let thisIs = $(this);
    thisIs.closest('.rp-card-box').addClass('invisible');
  })
  $('.rp-l1-nav ul li a').on('shown.bs.tab',function(e){
    $('.rp-card-box').removeClass('invisible');
  });
  $('.rp-l2-nav ul li a').on('shown.bs.tab',function(e){
    $('.rp-card-box').removeClass('invisible');
  })



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
     

  // jquery-counter-up
  $(document).ready(function(){
    $('.counter').each(function(){
        var thisis = $(this);
        var time = 1200;
        var step = 500;
        var value = $(this).text();
        $(this).attr('value',value)
        var valueF = $(this).attr('value');
        if($(thisis).length){
            $(window).scroll(function(){
              if ( $(thisis).offset().top < ($(window).scrollTop() + $(window).height() - 20) ) {
                 if (($(thisis).hasClass('counterup-done'))) {
                 }else{
                    $(thisis).addClass('counterup');
                 }
              }
              if ($(thisis).hasClass('counterup')) {
                setTimeout( function(){
                    $(thisis).removeClass('counterup');
                    $(thisis).addClass('counterup-done')
                }  , time );
              }
              if ($(thisis).hasClass('counterup')) {
                if (valueF.indexOf('.') > -1) {
                    var nbr = valueF;
                    var afd = (nbr!=Math.floor(nbr))?(nbr.toString()).split('.')[1].length:0;
                    for (let i = 0; i < ((step - 1) + 1); i++) {
                        setTimeout( function(){ 
                            var calv = ((valueF/step) + i*(valueF/step));
                            $(thisis).text(calv.toFixed(afd));
                        }  , time/step*i );
                    }
                }else{
                    for (let i = 0; i < ((step - 1) + 1); i++) {
                        setTimeout( function(){ 
                            var calv = (Math.floor((valueF/step) + i*(valueF/step)));
                            $(thisis).text(calv.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','));
                        }  , time/step*i );
                    }
                }
              }
            }); 
        };
    });
});

})(jQuery);




$(document).ready(function(){

  // scroll up
  $(function(){
    $.scrollUp();
  });


  // preloader
  $("#preloader").fadeOut(500);

})












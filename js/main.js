



$(function () {
  $('intro').fadeIn(3000);
  //navbar scroll using scrollto.js
  $("nav a").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash); 
    });
  
  window.addEventListener('scroll', function(e) {

    myscroll = window.scrollY
    wheight = $(window).height()

    normHeight = wheight - 665

    scrollTop = Math.max(715 + normHeight, window.scrollY)
    scrollBot = Math.max(1820 + normHeight, window.scrollY)

    var opacityTop = 1 - (scrollTop - 715 - normHeight)/175
    var opacityBot = (scrollBot - 1900 - normHeight)/200
    $('.intro').css({opacity: opacityTop})
    $('.hands-background-contact').css({opacity: opacityBot})
  });


var filterList = {
  init: function () {
    // MixItUp plugin
    // http://mixitup.io
    $('#portfoliolist').mixItUp({
      selectors: {
        target: '.portfolio',
         filter: '.filter'  
      },
      load: {
        filter: '.project, .experience, .volunteer'// show app tab on first load
      }     
    });               
  }
};
  filterList.init();
});












// --------------------------------------------------------- //
// READY
// --------------------------------------------------------- //
$(document).ready(function(){
  $('.showcase').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: true
  });

});

// --------------------------------------------------------- //
// LOADING
// --------------------------------------------------------- //
$( window ).load(function() {

  $('#loader').addClass('removed');
  $('#page').addClass('displayed');

  $(".headline").typed({
    strings: [
      "Hi, I'm Patrick",
      "A Full-Stack Developer",
      "I Know Swift, HTML, CSS, Javascript",
      "I Design Interfaces",
      "Hi, I'm Patrick"
    ],
    typeSpeed: 50,
    startDelay: 50,
    showCursor: false
  });
  
});


// --------------------------------------------------------- //
// BACK TO TOP
// --------------------------------------------------------- //
$('#backtotop').click(function(){
        
$('html,body').animate({scrollTop: 0},2000);
return false;

});





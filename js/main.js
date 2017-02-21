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





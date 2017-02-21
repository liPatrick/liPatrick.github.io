



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
    		filter: '.project, .research, .involvement, .artwork' // show app tab on first load
    	}     
		});								
	}
};
	filterList.init();
});











$(window).scroll(function() {
	parallax();
})

function parallax() {
	var wScroll = $(window).scrollTop();
	// var wScroll = -200;
	
	$('.parallax-bg').css('background-position', 'center '
		+(wScroll*0.75)+'px')
}

$(window).scroll(function(){
	if($(document).scrollTop()>50){
		$('nav').addClass('shrink');
	} else {
		$('nav').removeClass('shrink');
	}
})
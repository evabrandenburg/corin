$(document).ready(function(){
  $('.bxslider').bxSlider({
  	minSlides: 1,
  	maxSlides: 1,
  	slideWidth: 350,
  	slideMargin: 10
	});
});

var changePic = $( '.more' );
var rando = Math.random();
var pix = $( '.container' );
changePic.click(
	'click'
	, function( e ) {
		
		if(rando < 0.5) { 
			pix.addClass( 'choiceOne' );
		}
		else {
			pix.addClass( 'choiceTwo' );
		}

		alert( val('rando') );
	});



(function(){

$(document).ready(function(){
  /*$('.bxslider').bxSlider({
  	minSlides: 1,
  	maxSlides: 1,
  	slideWidth: 350,
  	slideMargin: 10
	});*/

var changePic = $( '.more' );
var pix = $( '.container' );

changePic.click(
	function( e ) {


		var rando = Math.random();
		
		console.log( rando );

		if(rando < 0.5) { 
			pix.attr('class', '').addClass( 'container choiceOne' );
			//pix.addClass( 'choiceOne' );
		}
		else {
			pix.attr('class', '').addClass( 'container choiceTwo' );
			//pix.addClass( 'choiceTwo' );
		}


	});
});


})();



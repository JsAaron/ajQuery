
$(function(){

	$(document).ajaxComplete(function(event, xhr, settings) {
		console.log(event, xhr, settings)
		$(".log").text("Triggered ajaxComplete handler.");
	});


	$( ".trigger" ).click(function() {
		 $( ".result" ).load( "ajax/test.html" );
	});


})



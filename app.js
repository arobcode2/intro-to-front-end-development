/* YOUR CODE HERE */
$(document).ready(function() {
	$('.btn').on('click', function() {
		var randomColors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
		$('.square').css('background-color', randomColors);
	});
});


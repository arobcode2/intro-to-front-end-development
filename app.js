/* YOUR CODE HERE */
$(document).ready(function() {
	var sqr = $('.square');
	var newSqr = '<div class="square" style="width: 100px;height: 100px;float:right;"></div>';
	$('.btn').on('click', function() {
		var randomColors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
		sqr.css('background-color', randomColors);
	});
	$('.btn2').on('click', function() {
		var randomColors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
		$(sqr).after($(newSqr).css('background-color', randomColors));
	});
});


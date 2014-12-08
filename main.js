$(document).ready(function(){

	$('#data-structures').click(function() {
		$('#data-structures-list').toggle();
	});

	$('#algorithms').click(function() {
		$('#algorithms-list').toggle();
	});

	$('.menu-option').click(function() {
		var topic = this.id;

		$('#main-content-container').html(topic);
	});

});

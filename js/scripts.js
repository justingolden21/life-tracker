$( ()=>{

	$('#newPlayer').on('click', function() {
		$('#playerDiv').clone().removeClass('hidden').appendTo('#playersDiv');
		$('.playerLife').last().val($('#defaultLife').val() );
	}).click().click();

	$('#deleteAll').on('click', function() {
		$('#playersDiv').html('');
	});

	$('#resetAll').on('click', function() {
		$('.playerLife').val($('#defaultLife').val() );
	});

});

function checkDead(elm) {
	elm.val()<=0 ? elm.addClass('dead') : elm.removeClass('dead');
}
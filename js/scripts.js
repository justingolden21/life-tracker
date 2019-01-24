$( ()=>{

	$('#newPlayer').click(function() {
		$('#playerDiv').clone().removeClass('hidden').appendTo('#playersDiv');
		$('.playerLife').last().val($('#defaultLife').val() );
	}).click().click();

	$('#deleteAll').click(function() {
		$('#playersDiv').html('');
	});

	$('#resetAll').click(function() {
		$('.playerLife').val($('#defaultLife').val() );
	});

	$('#addCategory').click(function() {
		$('.innerDiv').append('<br>' + $('#categoryName').val() + ':' );
		$('#categoryDiv').clone().removeClass('hidden').appendTo('.innerDiv');

	});

	$('#categoryName').click(function() {
		$(this).select();
	});

});

function checkDead(elm) {
	elm.val()<=0 ? elm.addClass('dead') : elm.removeClass('dead');
}
$(function() {

	$('#newPlayer').on('click', function() {
		$('#playersDiv').append('<div class="playerDiv col-sm-4 col-md-3"><button onclick="$(this).parent().remove();" tabindex="-1" class="deletePlayer btn btn-red"><i class="fas fa-times"></i></button><div class="input-group"><div class="input-group-append"><label>Name:</label></div><input class="playerName form-control form-control-sm" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="-1" type="text"></div>Life: <div class="input-group"><div class="input-group-append"><button onclick="let playerLife = $(this).parent().parent().children(\'.playerLife\'); playerLife.val(parseInt(playerLife.val() )-1); checkDead($(this).parent().parent().children(\'.playerLife\') );" tabindex="-1" class="btn btn-green"><i class="fas fa-minus"></i></button></div><input class="playerLife form-control form-control-lg text-center" onclick="this.select();" onchange="checkDead($(this) );" type="number" value="' + $('#defaultLife').val() + '"><div class="input-group-append"><button onclick="let playerLife = $(this).parent().parent().children(\'.playerLife\'); playerLife.val(parseInt(playerLife.val() )+1); checkDead($(this).parent().parent().children(\'.playerLife\') );" tabindex="-1" class="btn btn-green"><i class="fas fa-plus"></i></button></div></div></div>');
	}).click();

	$('#deleteAll').on('click', function() {
		$('#playersDiv').html('');
	});

	$('#resetAll').on('click', function() {
		$('.playerLife').val($('#defaultLife').val() );
	});

	// $('.playerDiv').get(0).select();

});

function checkDead(elm) {
	elm.val()<=0 ? elm.addClass('dead') : elm.removeClass('dead');
}
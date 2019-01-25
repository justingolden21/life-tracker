let names = [];

$( ()=>{

	// load url params
	let url = new URL(window.location.href);
	let q = url.searchParams.get('q') || '';
	names = q.split(',');
	for(let i=0; i<names.length; i++) {
		if(names[i]!='')
			addCategory(names[i]);
	}
	$('#categoryName').val('Mana');


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
		addCategory($('#categoryName').val() );
		names.push($('#categoryName').val() );
	});

	$('#categoryName').click(function() {
		$(this).select();
	});

	$('#getLink').click(function() {
		history.replaceState({}, '', '?q=' + names);
		copyLink();
	});

});

function checkDead(elm) {
	elm.val()<=0 ? elm.addClass('dead') : elm.removeClass('dead');
}

function addCategory(categoryName) {
	$('.innerDiv').append('<br>' + categoryName + ':' );
	$('#categoryDiv').clone().removeClass('hidden').appendTo('.innerDiv');
}

function copyLink() {
	let tmp = $('<input type="text">').appendTo(document.body);
	tmp.val(window.location.href);
	tmp.select();
	document.execCommand('copy');
	tmp.remove();
}
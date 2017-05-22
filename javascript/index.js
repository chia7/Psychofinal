// show exp details
function enter() {
	document.getElementById('dsp1').style.display = 'none';
	document.getElementById('dsp2').style.display = 'block';
}

// generate exp_order
function gen() {
	var exp_order = new Array(1,2,3,4);
	shuffle(exp_order)
	var exp_current = 0;
	var exp_time = new Array();
	localStorage.setItem( 'exp_order', JSON.stringify(exp_order) );
	localStorage.setItem( 'exp_current', JSON.stringify(exp_current) );
	localStorage.setItem( 'exp_time', JSON.stringify(exp_time) );
	console.log( JSON.parse( localStorage.getItem( 'exp_order' ) ) );
	console.log( JSON.parse( localStorage.getItem( 'exp_current' ) ) );
}

// shuffle array
function shuffle(array) {
	var exp_currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== exp_currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * exp_currentIndex);
		exp_currentIndex -= 1;

		// And swap it with the exp_current element.
		temporaryValue = array[exp_currentIndex];
		array[exp_currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
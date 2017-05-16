// use for selecting the order of experiment 
var exp_order = new Array(1,2,3,4);
shuffle(exp_order)
var exp_current = 0;


// use for selecting the description to show 
var dsp_current = 1;	// start from 1


var sec = ["3", "4", "5", "6"];
function select_time(){
	n = Math.floor(Math.random() * 4);
	return sec[n];
}


// initial loading the page
(function() {
	document.getElementById('exp' + exp_order[exp_current]).style.display = 'block';
	document.getElementById('dsp' + exp_order[exp_current] + '-1').style.display = 'block';
})();


var warmup = 0	// warm-up chance
var trial = 0	// trial chance
var set = 0		// ensure the again button being clicked
// use for changing the description to show 
function next_dsp() {
	document.getElementById('dsp' + exp_order[exp_current] + '-' + dsp_current).style.display = 'none';
	dsp_current++;
	document.getElementById('dsp' + exp_order[exp_current] + '-' + dsp_current).style.display = 'block';
	
	// if show the trial time
	if(dsp_current == 2) {
		warmup = 0;
		set = 0;
		var s = document.getElementById("tt" + exp_order[exp_current]);
		s.style.display = 'block';
		s.innerHTML =  'Please produce ' + select_time() + ' seconds. <br>';
	}
	if(dsp_current == 3) {
		trial = 0;
		set = 0;
		var s = document.getElementById("rt" + exp_order[exp_current]);
		s.style.display = 'block';
		s.innerHTML =  'Please produce ' + select_time() + ' seconds. <br>';
	}
}


function again_2() {
	document.getElementById("tt" + exp_order[exp_current] + "-ans").innerHTML = ''
	document.getElementById("tt" + exp_order[exp_current] + "-again").style.display = 'none';
	set = 0;
	var s = document.getElementById("tt" + exp_order[exp_current]);
	s.innerHTML =  'Please produce ' + select_time() + ' seconds. <br>';
}


function again_3() {
	document.getElementById("rt" + exp_order[exp_current] + "-ans").innerHTML = ''
	document.getElementById("rt" + exp_order[exp_current] + "-again").style.display = 'none';
	set = 0;
	var s = document.getElementById("rt" + exp_order[exp_current]);
	s.innerHTML =  'Please produce ' + select_time() + ' seconds. <br>';
}


// use for changing the exp to show 
function next_exp() {
	if(exp_current == 3) {
		finish();
		return;
	}
	document.getElementById('exp' + exp_order[exp_current]).style.display = 'none';
	exp_current++;
	document.getElementById('exp' + exp_order[exp_current]).style.display = 'block';
	document.getElementById('dsp' + exp_order[exp_current] + '-1').style.display = 'block';
	dsp_current = 1;
}


function finish() {
	document.getElementById('exp' + exp_order[exp_current]).style.display = 'none';
	document.getElementById('end').style.display = 'block';
}



var pressed = {};
window.onkeydown = function(e) {
	if(dsp_current == 2 || dsp_current == 3) {
		if(e.keyCode == 32) {	// press Space
			if ( pressed[e.which] )	return;
			pressed[e.which] = e.timeStamp;
		}
		return;
	}
};

window.onkeyup = function(e) {
	if(dsp_current == 2 && warmup != 3 && !set) {
		if(e.keyCode == 32) {	// press Space
			if ( !pressed[e.which] )	return;
			var duration = ( e.timeStamp - pressed[e.which] ) / 1000;
			var s = document.getElementById("tt" + exp_order[exp_current] + "-ans")
			s.style.display = 'block';
			s.innerHTML = '<p>You pressed for ' + duration + ' seconds</p>';
			pressed[e.which] = 0;
			set = 1;
			warmup++;
			document.getElementById("tt" + exp_order[exp_current] + "-again").style.display = 'block';
			if(warmup == 3) {
				document.getElementById("tt" + exp_order[exp_current] + "-again").style.display = 'none';
				document.getElementById("tt" + exp_order[exp_current] + "-button").style.display = 'block';
			}
		}
	}
	if(dsp_current == 3 && trial != 5 && !set) {
		if(e.keyCode == 32) {	// press Space
			if ( !pressed[e.which] )	return;
			var duration = ( e.timeStamp - pressed[e.which] ) / 1000;
			var s = document.getElementById("rt" + exp_order[exp_current] + "-ans")
			s.style.display = 'block';
			s.innerHTML = '<p>You pressed for ' + duration + ' seconds</p>';
			pressed[e.which] = 0;
			set = 1;
			trial++;		
			if(trial == 5) {
				document.getElementById("rt" + exp_order[exp_current] + "-again").style.display = 'none';
				document.getElementById("rt" + exp_order[exp_current] + "-button").style.display = 'block';
			} else {
				document.getElementById("rt" + exp_order[exp_current] + "-again").style.display = 'block';
			}
		}
	}
};


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

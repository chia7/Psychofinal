// use for selecting the order of experiment 
var exp_order = JSON.parse( localStorage.getItem( 'exp_order' ) );
var exp_current = JSON.parse( localStorage.getItem( 'exp_current' ) );
var exp_time = JSON.parse( localStorage.getItem( 'exp_time' ) );


var sec = [3, 5, 7];
function select_time(){
	n = Math.floor(Math.random() * 3);
	return sec[n];
};


// initial loading the page
(function() {
	document.getElementById("test").style.display = 'block';
	document.getElementById("dspt-1").style.display = 'block';
})();


var count = 2
function test() {
	document.getElementById("dspt-1").style.display = 'none';
	document.getElementById("dspt-2").style.display = 'block';
	document.getElementById("tt-again").style.display = 'block';
	count = 0
};


var set = 1;
function again_test() {
	if(count < 2) {
		document.getElementById("tt-ans").innerHTML = ''
		document.getElementById("tt-again").style.display = 'none';
		var s = document.getElementById("tt");
		s.innerHTML =  '請產生 ' + select_time() + ' 秒時間長度. <br>';
		set = 0;
	}
};


var trial = 3;
function next_test() {
	document.getElementById("test").style.display = 'none';
	document.getElementById('exp' + exp_order[exp_current]).style.display = 'block';
	trial = 0;
};


function again() {
	if(!trial) {
		shuffle(sec);
	}
	if(trial < 3) {
		document.getElementById("rt" + exp_order[exp_current] + "-ans").innerHTML = ''
		document.getElementById("rt" + exp_order[exp_current] + "-again").style.display = 'none';
		var s = document.getElementById("rt" + exp_order[exp_current]);
		s.innerHTML =  '請產生 ' + sec[trial] + ' 秒時間長度. <br>';
		set = 0;
	}
};


// use for changing the exp to show 
function next_exp() {
	if(exp_current == 1) {
		exp_current++;
		save();
		location.href='form2.html';
	}
	if(exp_current == 3) {
		exp_time.sort(cmp);
		console.log( exp_time )
		finish();
		return;
	}
	document.getElementById('exp' + exp_order[exp_current]).style.display = 'none';
	exp_current++;
	document.getElementById('exp' + exp_order[exp_current]).style.display = 'block';
	trial = 0;
};


function save() {
	localStorage.setItem( 'exp_current', JSON.stringify(exp_current) );
	localStorage.setItem( 'exp_time', JSON.stringify(exp_time) );
};


function finish() {
	document.getElementById('exp' + exp_order[exp_current]).style.display = 'none';
	document.getElementById('end').style.display = 'block';
	sendData();
	localStorage.clear();
};


function cmp(a, b) {
	if(a[0] == b[0]) {
		return a[1] - b[1];
	} else {
		return a[0] - b[0];
	}
};


var pressed = {};
window.onkeydown = function(e) {

	if(count < 2 && !set) {
		if(e.keyCode == 32) {	// press Space
			if ( pressed[e.which] )	return;
			pressed[e.which] = e.timeStamp;
		}
		return;
	}

	if(trial < 3 && !set) {
		if(e.keyCode == 32) {	// press Space
			if ( pressed[e.which] )	return;
			pressed[e.which] = e.timeStamp;
		}
		return;
	}

};

window.onkeyup = function(e) {
	if(count < 2 && !set) {
		if(e.keyCode == 32) {	// press Space
			if ( !pressed[e.which] )	return;
			var duration = ( e.timeStamp - pressed[e.which] ) / 1000;
			var s = document.getElementById("tt-ans")
			s.innerHTML = '<p>你按了 ' + duration + ' 秒鐘. </p>';
			pressed[e.which] = 0;
			set = 1;
			count++;	
			if(count == 2) {
				document.getElementById("tt-again").style.display = 'none';
				document.getElementById("tt-button").style.display = 'block';
			} else {
				document.getElementById("tt-again").style.display = 'block';
			}
		}
	}

	if(trial < 3 && !set) {
		if(e.keyCode == 32) {	// press Space
			if ( !pressed[e.which] )	return;
			var duration = ( e.timeStamp - pressed[e.which] ) / 1000;
			var s = document.getElementById("rt" + exp_order[exp_current] + "-ans")
			s.innerHTML = '<p>你按了 ' + duration + ' 秒鐘. </p>';
			
			exp_time.push([ exp_order[exp_current], sec[trial], duration ])

			pressed[e.which] = 0;
			set = 1;
			trial++;		
			if(trial == 3) {
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
};



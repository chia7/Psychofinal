/*

form : https://goo.gl/forms/xUf8qNovcHDSDjOi1
edit form : https://docs.google.com/forms/d/1UWUE5VMe-dV6smiHM5Rjz6jvlW4sXhMiq71i_csk3jU/edit?usp=sharing
form response :
	https://docs.google.com/forms/d/e/1FAIpQLSdQdenlC7wFmfJULSVtBtqeabLNstC7JaNBRmcStv3SYG79yg/formResponse"
Dept : entry.386904180
Sex : entry.2027773850
Age : entry.1133005454

db : https://docs.google.com/spreadsheets/d/1RimxKNCGFYG3gjyBwaHMuE-rNwBnS2rYxjKKAyWjulo/pubhtml?alt=json

*/

const DeptID = '386904180';
const SexID = '2027773850';
const AgeID = '1133005454';
const HomeID = '996498367'; 

const Q1ID = '767003490';
const Q2ID = '112017352';
const Q3ID = '651064029';
const Q4ID = '332924839';
const Q5ID = '1036651474';
const Q6ID = '939123948';
const Q7ID = '279819614';
const Q8ID = '260195463';

const a3ID = '864037047';
const a5ID = '280835022';
const a7ID = '567786117';
const b3ID = '1286933508';
const b5ID = '237705035';
const b7ID = '579174930';
const c3ID = '1559916288';
const c5ID = '969230478';
const c7ID = '1433396649';
const d3ID = '101290332';
const d5ID = '816873280';
const d7ID = '717943784';

// get basicInfo from localStorage
function sendData() {

	var str = "https://docs.google.com/forms/d/e/1FAIpQLSdQdenlC7wFmfJULSVtBtqeabLNstC7JaNBRmcStv3SYG79yg/formResponse?";
	
	var basicInfo = JSON.parse(window.localStorage.getItem('basicInfo'));
	str += 'entry.' + DeptID + '=' + basicInfo.DEPT + '&';
	str += 'entry.' + SexID + '=' + basicInfo.SEX + '&';
	str += 'entry.' + AgeID + '=' + basicInfo.AGE + '&';
	str += 'entry.' + HomeID + '=' + basicInfo.HOME + '&';

	var timeForm = JSON.parse(window.localStorage.getItem('timeForm'));
	str += 'entry.' + Q1ID + '=' + timeForm.Q1 + '&';
	str += 'entry.' + Q2ID + '=' + timeForm.Q2 + '&';
	str += 'entry.' + Q3ID + '=' + timeForm.Q3 + '&';
	str += 'entry.' + Q4ID + '=' + timeForm.Q4 + '&';
	str += 'entry.' + Q5ID + '=' + timeForm.Q5 + '&';
	str += 'entry.' + Q6ID + '=' + timeForm.Q6 + '&';
	str += 'entry.' + Q7ID + '=' + timeForm.Q7 + '&';
	str += 'entry.' + Q8ID + '=' + timeForm.Q8 + '&';

	//var exp_time = JSON.parse(window.localStorage.getItem('exp_time'));
	str += 'entry.' + a3ID + '=' + exp_time[0][2] + '&';
	str += 'entry.' + a5ID + '=' + exp_time[1][2] + '&';
	str += 'entry.' + a7ID + '=' + exp_time[2][2] + '&';
	str += 'entry.' + b3ID + '=' + exp_time[3][2] + '&';
	str += 'entry.' + b5ID + '=' + exp_time[4][2] + '&';
	str += 'entry.' + b7ID + '=' + exp_time[5][2] + '&';
	str += 'entry.' + c3ID + '=' + exp_time[6][2] + '&';
	str += 'entry.' + c5ID + '=' + exp_time[7][2] + '&';
	str += 'entry.' + c7ID + '=' + exp_time[8][2] + '&';
	str += 'entry.' + d3ID + '=' + exp_time[9][2] + '&';
	str += 'entry.' + d5ID + '=' + exp_time[10][2] + '&';
	str += 'entry.' + d7ID + '=' + exp_time[11][2] + '&';

	str += 'submit=Submit';
	$.getScript(str);

}
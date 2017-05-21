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

const Q1ID = '';
const Q2ID = '';
const Q3ID = '';
const Q4ID = '';
const Q5ID = '';
const Q6ID = '';
const Q7ID = '';
const Q8ID = '';

const 

// get basicInfo from localStorage
function sendData() {

	var str = "https://docs.google.com/forms/d/e/1FAIpQLSdQdenlC7wFmfJULSVtBtqeabLNstC7JaNBRmcStv3SYG79yg/formResponse?";
	
	var basicInfo = JSON.parse(window.localStorage.getItem('basicInfo'));
	str += 'entry.' + DeptID + '=' + basicInfo.DEPT + '&';
	str += 'entry.' + SexID + '=' + basicInfo.SEX + '&';
	str += 'entry.' + AgeID + '=' + basicInfo.AGE + '&';

	var timeForm = JSON.parse(window.localStorage.getItem('timeForm'));
	str += 'entry.' + Q1ID + '=' + timeForm.Q1 + '&';
	str += 'entry.' + Q2ID + '=' + timeForm.Q2 + '&';
	str += 'entry.' + Q3ID + '=' + timeForm.Q3 + '&';
	str += 'entry.' + Q4ID + '=' + timeForm.Q4 + '&';
	str += 'entry.' + Q5ID + '=' + timeForm.Q5 + '&';
	str += 'entry.' + Q6ID + '=' + timeForm.Q6 + '&';
	str += 'entry.' + Q7ID + '=' + timeForm.Q7 + '&';
	str += 'entry.' + Q8ID + '=' + timeForm.Q8 + '&';

	str += 'submit=Submit';
	$.getScript(str);
}
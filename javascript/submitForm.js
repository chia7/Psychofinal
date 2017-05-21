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

// get basicInfo from localStorage
function sendData() {
	var basicInfo = JSON.parse(window.localStorage.getItem('basicInfo'));
	var str = "https://docs.google.com/forms/d/e/1FAIpQLSdQdenlC7wFmfJULSVtBtqeabLNstC7JaNBRmcStv3SYG79yg/formResponse";
	str += '?entry.386904180=' + basicInfo.DEPT;
	str += '&entry.2027773850=' + basicInfo.SEX;
	str += '&entry.1133005454=' + basicInfo.AGE;
	str += '&submit=Submit';
	$.getScript(str);
}
//Dark Mode
function darkMode() {
	document.body.classList.toggle("dM");
	//checkCookie();
}
/*/
function checkCookie(){
	var themeLM = document.body.class = "dM";
	var themeDM = document.body.class = "dM";
	var theme = document.body.class;
	if(theme = "dm"){
		themeLM.toggle;
	}
	else{
		themeDM.toggle;
	}
	document.cookie = theme;
}
//*/



//Scroll Back To Top
function gotoTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}



//Hidden Codes
function codeNumber() {
	let n = +prompt('Enter a code...','');
	switch (n) {
		case 202420:
			alert("Code Accepted\n\nRedirecting...");
			window.location = "sites/template.html";
			break;
		default:
		break;
	}
}
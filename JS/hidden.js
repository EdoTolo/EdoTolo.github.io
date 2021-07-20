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
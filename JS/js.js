//Hidden Codes
function codeNumber() {
	let n = +prompt('Enter a code...','');
	switch (n) {
		case 202420:
			alert("Code Accepted\n\nRedirecting...");
			window.location = "Sites/cypher.html";
			break;
		case 123:
			alert("Code Accepted\n\nRedirecting...");
			window.location = "vCard/vCard.html";
			break;
		default:
		break;
	}
}

document.getElementById("year").innerHTML = "Eduardo Tolentino, 2018-"+new Date().getFullYear();

/*/Timer
var countDownDate = new Date("August 13, 2024 00:00:00").getTime();
var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  	document.getElementById("timer").innerHTML = days+"d "+hours+"h "+minutes+"m "+seconds+"s ";
  	if (distance < 0) {
    	clearInterval(x);
    	document.getElementById("timer").innerHTML = "EXPIRED";
  	}
}, 1000);*/
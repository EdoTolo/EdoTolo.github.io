var text = ["Eduardo Tolentino", "Edo Tolo"];
var counter = 0;
var elem = document.getElementById("title");
var inst = setInterval(change, 5000);

function change() {
	elem.innerHTML = text[counter];
	counter++;
	if (counter >= text.length) {
		counter = 0;
	}
}


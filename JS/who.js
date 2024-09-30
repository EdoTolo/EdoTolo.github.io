//I am a...
var who = ["r", "g", "b"];
var colors = ["#C40B10", "#46DB46", "#085699"];
var i = 0;
var wElem = document.getElementById("about");
var iTim = setTimeout(change, 0);
var inst = setInterval(change, 3500);
function change() {
	wElem.innerHTML = who[i];
	wElem.style.color = colors[i];
	i++;
	if (i >= who.length) {
		i = 0;
	}
}
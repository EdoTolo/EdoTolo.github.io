//I am a...
var who = [
	"<u>Pen Strokes</u><br> 34 40 53 83 14",
	"<u>Time</u><br> Start[0:00]<br> 0:08, 0:35, 1:12, 1:42, 2:17<br> End[2:45]",
	"<u>^2</u><br> 64 25 144 144 225",
	"<u>Hand</u><br> FT T PT PT I"
];
//var colors = ["#FFFFFF99", "#FFFFFF", "#FFFFFF99"];
var i = 0;
var wElem = document.getElementById("cypher");
var iTim = setTimeout(change, 0);
var inst = setInterval(change, 3500);
function change() {
	wElem.innerHTML = who[i];
	//wElem.style.color = colors[i];
	i++;
	if (i >= who.length) {
		i = 0;
	}
}
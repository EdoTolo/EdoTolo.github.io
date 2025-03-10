//Title Changer
var titles = ["Eduardo Tolentino", "Edo Tolo"];
var t = 0;
var tElem = document.getElementById("title");
var tInst = setInterval(tChange, 5000);
function tChange() {
	tElem.innerHTML = titles[t];
	t++;
	if (t >= titles.length) {
		t = 0;
	}
}

document.getElementById("year").innerHTML = "Eduardo Tolentino, 2018-"+new Date().getFullYear();

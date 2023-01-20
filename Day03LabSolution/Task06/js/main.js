window.addEventListener("load", function () {
	myCanvas = this.document.getElementById("myCanvas");
	myContetx = myCanvas.getContext("2d");
	myCanvas.width = this.window.innerWidth;
	myCanvas.height = this.window.innerHeight;

	isDrawable = false;
	// myCanvas.addEventListener("mousedown", drawcircle);
	myCanvas.addEventListener("mousemove", drawCircle);
	myCanvas.addEventListener("mousedown", enableDrawing);
	myCanvas.addEventListener("mouseup", disableDrawing);

	radius = 10;
	radiusVal = this.document.getElementById("radius-val");
	increament = this.document.getElementById("increament");
	decreament = this.document.getElementById("decreament");

	increament.addEventListener("click", increaseRadius);
	decreament.addEventListener("click", decreaseRadius);

	colorbar = this.document.getElementById("colors-palette");
	allColors = ["red", "black", "green", " blue", "brown", "cyan", "pink", "orange", "magenta"];
	for (var i = 0; i < allColors.length; i++) {
		createdDiv = this.document.createElement("div");
		createdDiv.style.backgroundColor = allColors[i];
		createdDiv.addEventListener("click", changeColor);
		createdDiv.className = "colors";
		if (allColors[i] == this.localStorage.getItem("selectedColor")) {
			createdDiv.className += " activeColor";
			myContetx.fillStyle = allColors[i];
		}
		colorbar.appendChild(createdDiv);
	}

	saveButton = this.document.getElementById("saveBtn");

	saveButton.addEventListener("click", function () {
		var dataURL = myCanvas.toDataURL("image/jpeg", 1.0);
		saveImage(dataURL, "my-canvas.jpeg");
	});
}); // end of load

function drawCircle(e) {
	if (isDrawable) {
		myContetx.beginPath();
		myContetx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
		myContetx.fill();
		myContetx.closePath();
	}
}

function enableDrawing() {
	isDrawable = true;
}

function disableDrawing() {
	isDrawable = false;
}

function increaseRadius() {
	radius++;
	checkRadiusVal(radius);
}

function decreaseRadius() {
	radius--;
	checkRadiusVal(radius);
}

function checkRadiusVal(newRadius) {
	if (newRadius > 50) {
		newRadius = 50;
	}
	if (newRadius < 5) {
		newRadius = 5;
	}
	radius = newRadius;
	radiusVal.innerText = radius;
}

function changeColor(e) {
	oldSelected = document.getElementsByClassName("activeColor")[0];
	if (oldSelected != null) oldSelected.className = "colors";
	newClicked = e.target;
	newClicked.className += " activeColor";
	myContetx.fillStyle = newClicked.style.backgroundColor;
	localStorage.setItem("selectedColor", newClicked.style.backgroundColor);
}

function saveImage(data, filename = "Untitled.jpeg") {
	var a = document.createElement("a");
	a.href = data;
	a.download = filename;
	a.click();
}

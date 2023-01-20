window.addEventListener("load", function () {
	allImages = this.document.images;
	topSec = this.document.getElementById("top");
	bottom = this.document.getElementById("bottom");
	for (let i = 0; i < allImages.length; i++) {
		allImages[i].addEventListener("dragstart", startDrag);
		allImages[i].addEventListener("dragend", endDrag);
	}

	// from TOP to BOTTOM
	topSec.addEventListener("dragleave", leaveDrag);
	bottom.addEventListener("drop", dropped);
	bottom.addEventListener("dragenter", enterDrag);
	bottom.addEventListener("dragover", overDrag);

	// from BOTTOM to TOP
	bottom.addEventListener("dragleave", leaveDrag);
	topSec.addEventListener("drop", dropped);
	topSec.addEventListener("dragenter", enterDrag);
	topSec.addEventListener("dragover", overDrag);
});

function startDrag(e) {
	e.dataTransfer.setData("myimgId", e.target.id);
}
function endDrag(e) {
	e.preventDefault();
}
function dropped(e) {
	e.preventDefault();
	e.target.appendChild(document.getElementById(e.dataTransfer.getData("myimgId")));
	if (topSec.childElementCount == 0) {
		topSec.innerText = "Empty";
		topSec.classList.add("emptysection");
	}
	if (bottom.childElementCount == 0) {
		bottom.innerText = "Empty";
		bottom.classList.add("emptysection");
	}
}

function leaveDrag(e) {
	e.preventDefault();
}
function enterDrag(e) {
	e.preventDefault();
}
function overDrag(e) {
	e.preventDefault();
}

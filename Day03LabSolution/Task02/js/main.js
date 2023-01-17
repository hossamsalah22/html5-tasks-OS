window.addEventListener("load", function () {
	allImages = this.document.images;
	imgCount = allImages.length;
	topSec = this.document.getElementById("top");
	bottom = this.document.getElementById("bottom");
	for (let i = 0; i < imgCount; i++) {
		allImages[i].addEventListener("dragstart", startDrag);
		allImages[i].addEventListener("dragend", endDrag);
	}

	// from TOP to BOTTOM
	topSec.addEventListener("dragleave", leaveDrag);
	bottom.addEventListener("drop", dropped);
	bottom.addEventListener("dragenter", enterDrag);
	bottom.addEventListener("dragover", overDrag);

	// from BOTTOM to TOP
	// bottom.addEventListener("dragleave", leaveDrag);
	// topSec.addEventListener("drop", dropped);
	// topSec.addEventListener("dragenter", enterDrag);
	// topSec.addEventListener("dragover", overDrag);
});

function startDrag(e) {
	e.dataTransfer.setData("myimg", e.target.outerHTML);
	e.dataTransfer.setData("myimgId", e.target.id);
}
function endDrag(e) {
	e.preventDefault();
}
function dropped(e) {
	e.preventDefault();
	bottom.appendChild(document.getElementById(e.dataTransfer.getData("myimgId")));
	imgCount--;
	if (imgCount < 1) {
		topSec.innerText = "Empty";
		topSec.classList.add("emptysection");
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

window.addEventListener("load", function () {
	myvideo = document.getElementById("myvideo");
	buttonSection = document.getElementById("controlswrapper");
	myvideo.addEventListener("click", playpausefun);
	myvideo.addEventListener("dblclick", fullscreen);

	for (let i = 1; i < 11; i++) {
		btn = document.createElement("button");
		btn.innerHTML = "videos" + i;
		btn.addEventListener("click", function (e) {
			myvideo.src = "videos/" + i + ".mp4";
		});
		buttonSection.appendChild(btn);
	}
}); //end of load

function playpausefun() {
	if (myvideo.paused) myvideo.play();
	else myvideo.pause();
}

function fullscreen() {
	myvideo.requestFullscreen();
}

window.addEventListener("load", function () {
	myvideo = this.document.getElementById("myvideo");
	playpausebtn = this.document.getElementById("playpausebtn");
	seekbar = this.document.getElementById("seekbar");

	myvideo.addEventListener("timeupdate", () => {
		seekbar.value = (myvideo.currentTime / myvideo.duration) * seekbar.max;
	});

	seekbar.addEventListener("change", () => {
		myvideo.currentTime = (myvideo.duration * seekbar.value) / seekbar.max;
	});
}); //end of load
function playpausefun() {
	if (myvideo.paused) {
		myvideo.play();
		playpausebtn.value = "Pause";
	} else {
		myvideo.pause();
		playpausebtn.value = "Play";
	}
}

function changevideosize(e) {
	switch (e.value) {
		case "small":
			myvideo.width = myvideo.height = 350;
			break;
		case "medium":
			myvideo.width = myvideo.height = 400;
			break;
		case "large":
			myvideo.width = myvideo.height = 500;
			break;
		case "fullscreen":
			myvideo.requestFullscreen();
			break;
	}
}
function changevolume(e) {
	myvideo.volume = e.target.value;
}
function mutefun() {
	if (myvideo.muted) {
		myvideo.muted = false;
	} else {
		myvideo.muted = true;
	}
}
function loopfun() {
	if (myvideo.loop) {
		myvideo.loop = false;
	} else {
		myvideo.loop = true;
	}
}
function changeseekbar(e) {
	myvideo.currentTime = (myvideo.duration * seekbar.value) / seekbar.max;
}
function forwardfun() {
	myvideo.playbackRate++;
}
function backwordfun() {
	myvideo.playbackRate--; //
	if (myvideo.playbackRate <= 0) myvideo.playbackRate = 1;
}

function noraml() {
	if (myvideo.playbackRate != 1) myvideo.playbackRate = 1;
}

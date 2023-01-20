window.addEventListener("load", function () {
	const box = document.getElementById("box");

	document.querySelectorAll("button")[0].addEventListener("click", function () {
		box.classList.add("start");
	});

	document.querySelectorAll("button")[1].addEventListener("click", function () {
		box.classList.remove("start");
	});

	box.addEventListener("mouseover", function () {
		box.classList.add("pause");
	});

	box.addEventListener("mouseout", function () {
		box.classList.remove("pause");
	});
});

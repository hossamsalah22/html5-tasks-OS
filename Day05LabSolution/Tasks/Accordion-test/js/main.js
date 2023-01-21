window.addEventListener("load", function () {
	let cards = document.querySelectorAll(".choice");

	cards.forEach((card) => {
		card.addEventListener("click", () => {
			cards.forEach((element) => {
				element.classList.remove("expand", "unset");
				element.classList.add("small");
			});
			card.classList.toggle("small");
			card.classList.toggle("expand");
		});
	});
});

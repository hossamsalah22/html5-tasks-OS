window.addEventListener("load", () => {
	let additionOutput = document.querySelector("#add > output");
	let multiplyOutput = document.querySelector("#mul > output");

	document.querySelectorAll("#add > input").forEach((number) => {
		number.addEventListener("change", () => {
			let firstNumber = document.getElementById("a").value;
			let secondNumber = document.getElementById("b").value;
			additionOutput.value = Number(firstNumber) + Number(secondNumber);
		});
	});

	document.querySelectorAll("#mul > input").forEach((number) => {
		number.addEventListener("change", () => {
			let firstNumber = document.getElementById("c").value;
			let secondNumber = document.getElementById("d").value;
			multiplyOutput.value = Number(firstNumber) * Number(secondNumber);
		});
	});
});

window.addEventListener("load", function () {
	addFirstNum = document.getElementsByTagName("input")[0];
	addSecondNum = document.getElementsByTagName("input")[1];
	mulFirstNum = document.getElementsByTagName("input")[2];
	mulSecondNum = document.getElementsByTagName("input")[3];

	addFirstNum.addEventListener("change", function () {
		addRes.innerText = parseInt(addFirstNum.value) + parseInt(addSecondNum.value);
	});
	addSecondNum.addEventListener("change", function () {
		addRes.innerText = parseInt(addFirstNum.value) + parseInt(addSecondNum.value);
	});

	mulFirstNum.addEventListener("change", function () {
		mulRes.innerText = parseInt(mulFirstNum.value) * parseInt(mulSecondNum.value);
	});
	mulSecondNum.addEventListener("change", function () {
		mulRes.innerText = parseInt(mulFirstNum.value) * parseInt(mulSecondNum.value);
	});
}); //end of load

window.addEventListener("load", function () {
	document.getElementsByTagName("input")[0].addEventListener("change", function () {
		mainBranch = document.getElementsByTagName("span")[0];
		mainBranch.classList.toggle("change");
		if (this.checked) {
			$(".leftLocation div:not(:nth-child(1))").hide();
			$(".rightLocation div").hide();
			$(".leftLocation div span:nth-child(1)").css("color", "red");
		} else {
			$(".leftLocation div:not(:nth-child(1))").show();
			$(".rightLocation div").show();
			$(".leftLocation div span:nth-child(1)").css("color", "gray");
		}
	});

	document.getElementsByTagName("input")[1].addEventListener("change", function () {
		mainBranch = document.getElementsByTagName("span")[0];
		mainBranch.classList.toggle("change");
		if (this.checked) {
			$(".leftLocation div:nth-child(1)").hide();
			$(".leftLocation div span:nth-child(1)").css("color", "blue");
			$(".rightLocation div span").css("color", "blue");
		} else {
			$(".leftLocation div:nth-child(1)").show();
			$(".leftLocation div span:nth-child(1)").css("color", "gray");
			$(".rightLocation div span").css("color", "gray");
		}
	});
}); //end of load function

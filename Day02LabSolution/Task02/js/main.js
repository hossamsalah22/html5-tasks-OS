window.addEventListener("load", function () {
	document.getElementsByTagName("input")[0].addEventListener("change", function () {
		mainBranch = document.getElementsByTagName("span")[0];
		mainBranch.classList.toggle("change");
		if (this.checked) {
			$(".locationSection div:not(:nth-child(1))").hide();
			$(".SecondlocationSection div").hide();
			$(".locationSection div span:nth-child(1)").css("color", "red");
		} else {
			$(".locationSection div:not(:nth-child(1))").show();
			$(".SecondlocationSection div").show();
			$(".locationSection div span:nth-child(1)").css("color", "gray");
		}
	});

	document.getElementsByTagName("input")[1].addEventListener("change", function () {
		mainBranch = document.getElementsByTagName("span")[0];
		mainBranch.classList.toggle("change");
		if (this.checked) {
			$(".locationSection div:nth-child(1)").hide();
			$(".locationSection div span:nth-child(1)").css("color", "blue");
			$(".SecondlocationSection div span").css("color", "blue");
		} else {
			$(".locationSection div:nth-child(1)").show();
			$(".locationSection div span:nth-child(1)").css("color", "gray");
			$(".SecondlocationSection div span").css("color", "gray");
		}
	});
}); //end of load function

const starLinks = document.querySelectorAll(".star-link");

starLinks.forEach((link, index) => {
	link.addEventListener("mouseover", () => {
		for (let i = 0; i <= index; i++) {
			const starPath = starLinks[i].querySelector(".star-path");
			starPath.classList.add("filled");
		}
	});

	link.addEventListener("mouseout", () => {
		for (let i = 0; i <= index; i++) {
			const starPath = starLinks[i].querySelector(".star-path");
			starPath.classList.remove("filled");
		}
	});
});

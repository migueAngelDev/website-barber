const stars = document.querySelectorAll(".stars");
const form = document.getElementById("formOpiniones");

let clickedStarIndex = -1;

stars.forEach((star, index) => {
	star.addEventListener("click", () => {
		clickedStarIndex = index;
		updateStarsColor();
	});

	star.addEventListener("mouseover", () => {
		if (clickedStarIndex === -1) {
			for (let i = 0; i <= index; i++) {
				const starPath = stars[i].querySelector("polygon");
				starPath.classList.add("filled");
			}
		}
	});

	star.addEventListener("mouseout", () => {
		if (clickedStarIndex === -1) {
			for (let i = 0; i <= index; i++) {
				const starPath = stars[i].querySelector("polygon");

				starPath.classList.remove("filled");
			}
		}
	});
});

function updateStarsColor() {
	stars.forEach((star, index) => {
		if (index <= clickedStarIndex) {
			const starPath = stars[index].querySelector("polygon");

			starPath.classList.add("filled");
		} else {
			const starPath = stars[index].querySelector("polygon");

			starPath.classList.remove("filled");
		}
	});
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	resetStars();
});

function resetStars() {
	clickedStarIndex = -1;
	updateStarsColor();
}

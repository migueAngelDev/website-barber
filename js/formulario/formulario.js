import { getOpinones, saveOpinion } from "./firebase.js";
/* Referencias */

const form = document.getElementById("formOpiniones");
const nameUsr = document.getElementById("nameUser");
const lastNameUsr = document.getElementById("lastName");
const email = document.getElementById("emailUser");
const photo = document.getElementById("photo");
/* stars */
const star1 = document.getElementById("star1");
const star2 = document.getElementById("star2");
const star3 = document.getElementById("star3");
const star4 = document.getElementById("star4");
const star5 = document.getElementById("star5");
/* stars */
const opinion = document.getElementById("opinion");
const btnSubmit = document.getElementById("btn-submit");

const imgUsrDefault = "/imgs/formulario/default-user.jpeg";

/* Referencias */

window.addEventListener("DOMContentLoaded", async () => {
	const querySnapshot = await getOpinones();

	console.log(querySnapshot);
});

const photoDefault = document.getElementById("previewPhoto");

photoDefault.innerHTML = `<img src="${imgUsrDefault}" alt="preview" id="photoUsrDefault">`;

photo.addEventListener("change", ({ target: { files } }) => {
	let reader = new FileReader();
	reader.readAsDataURL(files[0]);
	reader.onload = () => {
		const previewPhoto = document.getElementById("previewPhoto");

		previewPhoto.innerHTML = `<img src="${reader.result}" alt="preview" data-result ="${reader.result}" id="preview-photo-user">`;
	};
});

let rankingStars = 0;
star1.addEventListener("click", (e) => {
	e.preventDefault();
	rankingStars = 1;
});

star2.addEventListener("click", (e) => {
	e.preventDefault();
	rankingStars = 2;
});

star3.addEventListener("click", (e) => {
	e.preventDefault();
	rankingStars = 3;
});

star4.addEventListener("click", (e) => {
	e.preventDefault();
	rankingStars = 4;
});

star5.addEventListener("click", (e) => {
	e.preventDefault();
	rankingStars = 5;
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	function resetForm() {
		form.reset();
		photoDefault.innerHTML = `<img src="${imgUsrDefault}" alt="preview" id="photoUsrDefault">`;
		rankingStars = 0;
	}

	if (photo.files.length > 0) {
		const photoUsr = document.getElementById("preview-photo-user").src;
		saveOpinion(
			nameUsr.value,
			lastNameUsr.value,
			email.value,
			photoUsr,
			rankingStars,
			opinion.value
		);
	}

	if (photo.files.length < 1) {
		saveOpinion(
			nameUsr.value,
			lastNameUsr.value,
			email.value,
			imgUsrDefault,
			rankingStars,
			opinion.value
		);
	}

	resetForm();
});

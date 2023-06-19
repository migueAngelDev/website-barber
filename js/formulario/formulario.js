import { getOpinones, saveOpinion } from "./firebase.js";
/* Referencias */

const form = document.getElementById("formOpiniones");
const nameUsr = document.getElementById("nameUser");
const lastNameUsr = document.getElementById("lastName");
const email = document.getElementById("emailUser");
const photo = document.getElementById("photo");
/* stars */
const stars = document.querySelectorAll(".stars");
/* stars */
const opinion = document.getElementById("opinion");
const btnSubmit = document.getElementById("btn-submit");

const imgUsrDefault = "/imgs/formulario/default-user.jpeg";

const maxLength = document.getElementById("maxLengthTextArea");

/* Referencias */

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

stars.forEach((star, index) => {
	star.addEventListener("click", (e) => {
		e.preventDefault();
		rankingStars = index + 1;
	});
});

opinion.addEventListener("input", (e) => {
	e.preventDefault();
	let text = opinion.value;
	maxLength.innerHTML = `${text.length}/175`;
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

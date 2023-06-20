import { getOpinones, saveOpinion } from "./firebase.js";

const form = document.getElementById("formOpiniones");
const nameUsr = document.getElementById("nameUser");
const lastNameUsr = document.getElementById("lastName");
const email = document.getElementById("emailUser");
const photo = document.getElementById("photo");
const stars = document.querySelectorAll(".stars");
const opinion = document.getElementById("opinion");
const contentModal = document.querySelector(".content-modal");
const modal = document.getElementById("modal-msg");

const imgUsrDefault = "/imgs/formulario/default-user.jpeg";
const maxLength = document.getElementById("maxLengthTextArea");
const photoDefault = document.getElementById("previewPhoto");

photoDefault.innerHTML = `<img src="${imgUsrDefault}" alt="preview" id="photoUsrDefault">`;

photo.addEventListener("change", ({ target: { files } }) => {
	let reader = new FileReader();
	reader.readAsDataURL(files[0]);
	const sizePhoto = photo.files[0].size;
	if (sizePhoto > 1048487) {
		alert(
			"La imagen es demasiado pesada, por favor agrega una imagen menor a 1.04 MB."
		);
	}
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

form.addEventListener("submit", async (e) => {
	e.preventDefault();

	function resetForm() {
		form.reset();
		photoDefault.innerHTML = `<img src="${imgUsrDefault}" alt="preview" id="photoUsrDefault">`;
		rankingStars = 0;
	}

	try {
		if (photo.files.length > 0) {
			const photoUsr = document.getElementById("preview-photo-user").src;
			const sizePhoto = photo.files[0].size;
			if (sizePhoto < 1048487) {
				await saveOpinion(
					nameUsr.value,
					lastNameUsr.value,
					email.value,
					photoUsr,
					rankingStars,
					opinion.value
				);
			} else {
				throw new Error("La imagen es demasiada pesada");
			}
		} else {
			await saveOpinion(
				nameUsr.value,
				lastNameUsr.value,
				email.value,
				imgUsrDefault,
				rankingStars,
				opinion.value
			);
		}

		// Envío exitoso, muestra un mensaje de éxito
		// alert("El mensaje se envió correctamente");
		modal.innerHTML = "El mensaje se envió correctamente";
		contentModal.classList.remove("hidden");

		setTimeout(() => {
			contentModal.classList.add("hidden");
		}, 2200);

		resetForm();
	} catch (error) {
		// Error al enviar, muestra un mensaje de error
		modal.innerHTML = `Ocurrió un error al enviar el mensaje: ${error.message}`;
		contentModal.classList.remove("hidden");

		setTimeout(() => {
			contentModal.classList.add("hidden");
		}, 2200);
		// alert("Ocurrió un error al enviar el mensaje: " + error.message);
	}
});

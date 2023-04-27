const wrapperCards = document.getElementById("wrapperCards");
const PRODUCTS = [
	{
		nombre: "Regular",
		imagen: "./imgs/servicios/pedicura/regular.jpg",
		precio: 200,
		descripcion:
			"Es el tratamiento ideal para mantener tus pies en perfecto estado. Nuestros expertos se encargan eliminar celulas muertas de tu piel, dar forma y limar tus uñas, hidratar y suavisar la piel de tus pies.",
	},
	{
		nombre: "Spa",
		imagen: "./imgs/servicios/pedicura/spa.jpg",
		precio: 300,
		descripcion:
			"Es un tratamiento de cuidado de pies que combina técnicas de relajación con el cuidado estético. Incluye exfoliacion para eliminar celulas muertas, cuidado de uñas y una hidratacion intensiva de la piel",
	},
	{
		nombre: "Piedras",
		imagen: "./imgs/servicios/pedicura/piedras.jpg",
		precio: 500,
		descripcion:
			"Este es un tratamiento de relajación profunda que combina el cuidado de los pies con las propiedades terapeuticas de las piedras volcanicas calientes que reducen la tension muscular, mejora la circulación sanguínea y elimina el estres acumulado",
	},
];

for (let i = 0; i < PRODUCTS.length; i++) {
	const li = document.createElement("li");
	li.classList.add("card");
	wrapperCards.appendChild(li);

	const lineColor = document.createElement("div");
	lineColor.classList.add("line-color");
	li.appendChild(lineColor);

	const portada = document.createElement("img");
	portada.classList.add("card-img");
	portada.src = PRODUCTS[i].imagen;
	li.appendChild(portada);

	const sectionPadding = document.createElement("section");
	sectionPadding.classList.add("section-padding");
	li.appendChild(sectionPadding);

	const contentTitle = document.createElement("div");
	contentTitle.classList.add("content-title");
	sectionPadding.appendChild(contentTitle);

	const title = document.createElement("p");
	title.classList.add("titleCard");
	title.textContent = PRODUCTS[i].nombre;
	contentTitle.appendChild(title);

	const contentDescription = document.createElement("div");
	contentDescription.classList.add("contentDescriptionCard");
	sectionPadding.appendChild(contentDescription);

	const description = document.createElement("p");
	description.classList.add("descriptionCard");
	description.textContent = PRODUCTS[i].descripcion;
	contentDescription.appendChild(description);

	const contentPrice = document.createElement("div");
	contentPrice.classList.add("contentPriceCard");
	sectionPadding.appendChild(contentPrice);

	const price = document.createElement("p");
	price.classList.add("priceCard");
	price.textContent = `$${PRODUCTS[i].precio.toFixed(2)} MX`;
	contentPrice.appendChild(price);
}

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
	{
		nombre: "Tijeras de peluquería",
		imagen: "./imgs/stocks/tijeras-peluqueria.jpg",
		precio: 600,
		descripcion:
			"Un par de tijeras de peluquería de alta calidad son esenciales para cualquier barbero. Pueden ser utilizadas para cortar y dar forma al cabello.",
	},
	{
		nombre: "Peine para barba",
		imagen: "./imgs/stocks/peine-barba.jpg",
		precio: 80,
		descripcion:
			"Un buen peine para barba es importante para mantener la barba limpia y bien peinada. Los peines de madera son una opción popular.",
	},
	{
		nombre: "Champú para barba",
		imagen: "./imgs/stocks/champu-barba.jpg",
		precio: 340,
		descripcion:
			"Un champú para barba de alta calidad puede ayudar a mantener la barba limpia y libre de caspa. También puede ayudar a prevenir la irritación y la picazón.",
	},
	{
		nombre: "Loción después del afeitado",
		imagen: "./imgs/stocks/locion-barba.jpg",
		precio: 400,
		descripcion:
			"Una loción para después del afeitado puede ayudar a calmar la piel después del afeitado y reducir la irritación. También puede ayudar a hidratar y suavizar la piel.",
	},
	{
		nombre: "Gel para peinar",
		imagen: "./imgs/stocks/gel.jpeg",
		precio: 200,
		descripcion:
			"El gel para peinar puede ser utilizado para darle forma al cabello y mantenerlo en su lugar durante todo el día. También puede ser utilizado para crear peinados más elaborados.",
	},
	{
		nombre: "Afeitadora eléctrica",
		imagen: "./imgs/stocks/afeitadora-corte.jpg",
		precio: 1800,
		descripcion:
			"Las afeitadoras eléctricas son una opción popular para aquellos que buscan un afeitado rápido y fácil. Están disponibles en diferentes modelos y marcas.",
	},
	{
		nombre: "Crema para afeitar",
		imagen: "./imgs/stocks/crema-afeitar.jpg",
		precio: 300,
		descripcion:
			"La crema para afeitar puede ayudar a ablandar el vello facial y reducir la irritación durante el afeitado. También puede ayudar a hidratar la piel.",
	},
	{
		nombre: "Toallas calientes",
		imagen: "./imgs/stocks/toallas-calientes.jpg",
		precio: 500,
		descripcion:
			"Las toallas calientes son una forma fácil de abrir los poros y preparar la piel para el afeitado. También pueden ayudar a reducir la irritación y la picazón.",
	},
	{
		nombre: "Gel para barba",
		imagen: "./imgs/stocks/gel-barba.jpeg",
		precio: 300,
		descripcion:
			"El gel para barba puede ayudar a mantener la barba en su lugar y darle un aspecto más definido. También puede ayudar a hidratar y suavizar el vello facial.",
	},
	{
		nombre: "Maquinilla para afeitar",
		imagen: "./imgs/stocks/maquinilla-afeitar.jpeg",
		precio: 500,
		descripcion:
			"Las maquinillas de afeitar son una opción popular para aquellos que buscan un afeitado suave y cómodo. Están disponibles en diferentes marcas y modelos.",
	},
	{
		nombre: "Spray de peinado",
		imagen: "./imgs/stocks/spray.jpeg",
		precio: 240,
		descripcion:
			"El spray de peinado puede ser utilizado para darle forma al cabello y mantenerlo en su lugar durante todo el día. También puede ayudar a proteger el cabello del calor y la humedad.",
	},
	{
		nombre: "kit de cuidado para la barba",
		imagen: "./imgs/stocks/kit-barba.jpeg",
		precio: 1000,
		descripcion:
			"Los kit de cuidado para barba son una excelente opción para aquellos que buscan múltiples productos en uno. Estos kits pueden incluir aceite para barba, champú para barba, peine para barba y otros productos de cuidado para barba.",
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

const wrapperCards = document.getElementById("wrapperCards");
const filterPrice = document.getElementById("filter-price");
const filterPriceInicial = document.getElementById("priceInicial");
const filterPriceFinal = document.getElementById("priceFinal");
const PRODUCTS = [
	{
		nombre: "Aceite para barba",
		imagen: "./imgs/productos/aceite-barba.jpeg",
		precio: 300,
		estado: "activo",
	},
	{
		nombre: "Cera para bigote",
		imagen: "./imgs/productos/gel-barba.jpeg",
		precio: 200,
		estado: "",
	},
	{
		nombre: "Navaja para afeitar",
		imagen: "./imgs/productos/navaja-afeitar.jpg",
		precio: 500,
		estado: "activo",
	},
	{
		nombre: "Tijeras de peluquería",
		imagen: "./imgs/productos/tijeras-peluqueria.jpg",
		precio: 600,
		estado: "",
	},
	{
		nombre: "Peine para barba",
		imagen: "./imgs/productos/peine-barba.jpg",
		precio: 80,
		estado: "activo",
	},
	{
		nombre: "Champú para barba",
		imagen: "./imgs/productos/champu-barba.jpg",
		precio: 340,
		estado: "activo",
	},
	{
		nombre: "Loción después del afeitado",
		imagen: "./imgs/productos/locion-barba.jpg",
		precio: 400,
		estado: "activo",
	},
	{
		nombre: "Gel para peinar",
		imagen: "./imgs/productos/gel.jpeg",
		precio: 200,
		estado: "",
	},
	{
		nombre: "Afeitadora eléctrica",
		imagen: "./imgs/productos/afeitadora-corte.jpg",
		precio: 1800,
		estado: "activo",
	},
	{
		nombre: "Crema para afeitar",
		imagen: "./imgs/productos/crema-afeitar.jpg",
		precio: 300,
		estado: "activo",
	},
	{
		nombre: "Toallas calientes",
		imagen: "./imgs/productos/toallas-calientes.jpg",
		precio: 500,
		estado: "activo",
	},
	{
		nombre: "Gel para barba",
		imagen: "./imgs/productos/gel-barba.jpeg",
		precio: 300,
		estado: "activo",
	},
	{
		nombre: "Maquinilla para afeitar",
		imagen: "./imgs/productos/maquinilla-afeitar.jpeg",
		precio: 500,
		estado: "activo",
	},
	{
		nombre: "Spray de peinado",
		imagen: "./imgs/productos/spray.jpeg",
		precio: 240,
		estado: "activo",
	},
	{
		nombre: "kit de cuidado para la barba",
		imagen: "./imgs/productos/kit-barba.jpeg",
		precio: 1000,
		estado: "activo",
	},
];

function mostrarCards() {
	for (let i = 0; i < PRODUCTS.length; i++) {
		const li = document.createElement("li");
		li.classList.add("card");
		wrapperCards.appendChild(li);
		const imgStatus = document.createElement("section");
		imgStatus.classList.add("sectionImg");
		li.appendChild(imgStatus);
		const portada = document.createElement("img");
		portada.classList.add("card-img");
		portada.src = PRODUCTS[i].imagen;
		imgStatus.appendChild(portada);
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
		const contentPrice = document.createElement("div");
		contentPrice.classList.add("contentPriceCard");
		sectionPadding.appendChild(contentPrice);
		const price = document.createElement("p");
		price.classList.add("priceCard");
		price.textContent = `$${PRODUCTS[i].precio.toFixed(2)}`;
		contentPrice.appendChild(price);
		const sectionCounter = document.createElement("section");
		const addItemProduct = document.createElement("button");
		let counterItem = document.createElement("p");
		const removeItemProduct = document.createElement("button");
		sectionPadding.appendChild(sectionCounter);
		addItemProduct.textContent = "+";
		counterItem.textContent = 0;
		removeItemProduct.textContent = "-";
		sectionCounter.classList.add("section-counter");
		sectionCounter.appendChild(removeItemProduct);
		sectionCounter.appendChild(counterItem);
		sectionCounter.appendChild(addItemProduct);
		/* function of carrito de compras */
		addItemProduct.addEventListener("click", () => {
			counterItem.textContent++;
		});
		removeItemProduct.addEventListener("click", () => {
			if (counterItem.textContent > 0) counterItem.textContent--;
		});
		/* ****** */
		const btnAddToShoppingCart = document.createElement("button");
		btnAddToShoppingCart.textContent = "Agregar";
		btnAddToShoppingCart.classList.add("btn-add-to-shopping-cart");
		const sectionAddItemCart = document.createElement("section");
		sectionPadding.appendChild(sectionAddItemCart);
		sectionAddItemCart.classList.add("section-add-item-cart");
		sectionAddItemCart.appendChild(btnAddToShoppingCart);
		const msgSuccessAddItem = document.createElement("p");
		msgSuccessAddItem.textContent =
			"Se ha agregado el producto al carrito de compras";
		const msgErrorAddItem = document.createElement("p");
		msgErrorAddItem.textContent =
			"Por favor, agregue un producto para añadirlo al carrito.";
		btnAddToShoppingCart.addEventListener("click", () => {
			if (counterItem.textContent > 0) {
				btnAddToShoppingCart.style.display = "none";
				if (msgSuccessAddItem.style.display === "none") {
					msgSuccessAddItem.style.display = "block";
				} else {
					sectionAddItemCart.appendChild(msgSuccessAddItem);
				}
				setTimeout(() => {
					msgSuccessAddItem.style.display = "none";
					counterItem.textContent = 0;
					btnAddToShoppingCart.style.display = "block";
				}, 2200);
			} else {
				btnAddToShoppingCart.style.display = "none";
				if (msgErrorAddItem.style.display === "none") {
					msgErrorAddItem.style.display = "block";
				} else {
					sectionAddItemCart.appendChild(msgErrorAddItem);
				}
				sectionAddItemCart.appendChild(msgErrorAddItem);
				setTimeout(() => {
					msgErrorAddItem.style.display = "none";
					btnAddToShoppingCart.style.display = "block";
				}, 2500);
			}
		});
	}
}

mostrarCards();

filterPrice.addEventListener("click", (e) => {
	e.preventDefault();

	PRODUCTS.forEach((elem) => {
		if (
			elem.precio >= priceInicial.value &&
			elem.precio <= priceFinal.value
		) {
			// li.textContent = "";
			const li = document.createElement("li");
			li.classList.add("card");
			wrapperCards.appendChild(li);

			const imgStatus = document.createElement("section");
			imgStatus.classList.add("sectionImg");
			li.appendChild(imgStatus);

			const portada = document.createElement("img");
			portada.classList.add("card-img");
			portada.src = elem.imagen;
			imgStatus.appendChild(portada);

			const sectionPadding = document.createElement("section");
			sectionPadding.classList.add("section-padding");
			li.appendChild(sectionPadding);

			const contentTitle = document.createElement("div");
			contentTitle.classList.add("content-title");
			sectionPadding.appendChild(contentTitle);

			const title = document.createElement("p");
			title.classList.add("titleCard");
			title.textContent = elem.nombre;
			contentTitle.appendChild(title);

			const contentPrice = document.createElement("div");
			contentPrice.classList.add("contentPriceCard");
			sectionPadding.appendChild(contentPrice);

			const price = document.createElement("p");
			price.classList.add("priceCard");
			price.textContent = `$${elem.precio.toFixed(2)}`;
			contentPrice.appendChild(price);

			const sectionCounter = document.createElement("section");

			const addItemProduct = document.createElement("button");

			let counterItem = document.createElement("p");

			const removeItemProduct = document.createElement("button");

			sectionPadding.appendChild(sectionCounter);

			addItemProduct.textContent = "+";

			counterItem.textContent = 0;

			removeItemProduct.textContent = "-";

			sectionCounter.classList.add("section-counter");

			sectionCounter.appendChild(removeItemProduct);

			sectionCounter.appendChild(counterItem);

			sectionCounter.appendChild(addItemProduct);

			/* function of carrito de compras */

			addItemProduct.addEventListener("click", () => {
				counterItem.textContent++;
			});

			removeItemProduct.addEventListener("click", () => {
				if (counterItem.textContent > 0) counterItem.textContent--;
			});

			/* ****** */

			const btnAddToShoppingCart = document.createElement("button");

			btnAddToShoppingCart.textContent = "Agregar";

			btnAddToShoppingCart.classList.add("btn-add-to-shopping-cart");

			const sectionAddItemCart = document.createElement("section");
			sectionPadding.appendChild(sectionAddItemCart);

			sectionAddItemCart.classList.add("section-add-item-cart");

			sectionAddItemCart.appendChild(btnAddToShoppingCart);

			const msgSuccessAddItem = document.createElement("p");
			msgSuccessAddItem.textContent =
				"Se ha agregado el producto al carrito de compras";

			const msgErrorAddItem = document.createElement("p");
			msgErrorAddItem.textContent =
				"Por favor, agregue un producto para añadirlo al carrito.";

			btnAddToShoppingCart.addEventListener("click", () => {
				if (counterItem.textContent > 0) {
					btnAddToShoppingCart.style.display = "none";

					if (msgSuccessAddItem.style.display === "none") {
						msgSuccessAddItem.style.display = "block";
					} else {
						sectionAddItemCart.appendChild(msgSuccessAddItem);
					}

					setTimeout(() => {
						msgSuccessAddItem.style.display = "none";

						counterItem.textContent = 0;

						btnAddToShoppingCart.style.display = "block";
					}, 2200);
				} else {
					btnAddToShoppingCart.style.display = "none";

					if (msgErrorAddItem.style.display === "none") {
						msgErrorAddItem.style.display = "block";
					} else {
						sectionAddItemCart.appendChild(msgErrorAddItem);
					}

					sectionAddItemCart.appendChild(msgErrorAddItem);

					setTimeout(() => {
						msgErrorAddItem.style.display = "none";

						btnAddToShoppingCart.style.display = "block";
					}, 2500);
				}
			});
		}
	});
});

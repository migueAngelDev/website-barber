const wrapperCards = document.getElementById("wrapperCards");
const btnPrice = document.getElementById("filter-price");
const btnReset = document.getElementById("filter-reset");
const priceMin = document.getElementById("priceMin");
const priceMax = document.getElementById("priceMax");
const inputSearch = document.getElementById("search-item");
const containerCartShopping = document.querySelector(".counter-items-cart");
const listItemsProductsCart = document.querySelector(".list-items-products");
const PRODUCTS = [
	{
		nombre: "Aceite para barba",
		imagen: "./imgs/productos/aceite-barba.jpeg",
		precio: 300,
		contador: 0,
	},
	{
		nombre: "Cera para bigote",
		imagen: "./imgs/productos/gel-barba.jpeg",
		precio: 200,
		contador: 0,
	},
	{
		nombre: "Navaja para afeitar",
		imagen: "./imgs/productos/navaja-afeitar.jpg",
		precio: 500,
		contador: 0,
	},
	{
		nombre: "Tijeras de peluquería",
		imagen: "./imgs/productos/tijeras-peluqueria.jpg",
		precio: 600,
		contador: 0,
	},
	{
		nombre: "Peine para barba",
		imagen: "./imgs/productos/peine-barba.jpg",
		precio: 80,
		contador: 0,
	},
	{
		nombre: "Champú para barba",
		imagen: "./imgs/productos/champu-barba.jpg",
		precio: 340,
		contador: 0,
	},
	{
		nombre: "Loción después del afeitado",
		imagen: "./imgs/productos/locion-barba.jpg",
		precio: 400,
		contador: 0,
	},
	{
		nombre: "Gel para peinar",
		imagen: "./imgs/productos/gel.jpeg",
		precio: 200,
		contador: 0,
	},
	{
		nombre: "Afeitadora eléctrica",
		imagen: "./imgs/productos/afeitadora-corte.jpg",
		precio: 1800,
		contador: 0,
	},
	{
		nombre: "Crema para afeitar",
		imagen: "./imgs/productos/crema-afeitar.jpg",
		precio: 300,
		contador: 0,
	},
	{
		nombre: "Toallas calientes",
		imagen: "./imgs/productos/toallas-calientes.jpg",
		precio: 500,
		contador: 0,
	},
	{
		nombre: "Gel para barba",
		imagen: "./imgs/productos/gel-barba.jpeg",
		precio: 300,
		contador: 0,
	},
	{
		nombre: "Maquinilla para afeitar",
		imagen: "./imgs/productos/maquinilla-afeitar.jpeg",
		precio: 500,
		contador: 0,
	},
	{
		nombre: "Spray de peinado",
		imagen: "./imgs/productos/spray.jpeg",
		precio: 240,
		contador: 0,
	},
	{
		nombre: "kit de cuidado para la barba",
		imagen: "./imgs/productos/kit-barba.jpeg",
		precio: 1000,
		contador: 0,
	},
];

function renderingProducts(array) {
	let rendering = "";
	array.forEach((producto, index) => {
		rendering += `
	<li class="card" id="${index}">
		<section class="sectionImg">
			<img src="${producto.imagen}" alt="${producto.nombre}" class="card-img" >
		</section>
		<section class="section-padding">
			<div class="content-title">
				<p class="title-card">${producto.nombre}</p>
			</div>
			<div class="contentPriceCard">
				<p class="priceCard">$${producto.precio.toFixed(2)}</p>
			</div>
			<div class="section-counter">
				<button class="remove-product" data-index="${index}">
					-
				</button>
				<p class="counter-product" data-index="${index}">${producto.contador}</p>
				<button class="add-product" data-index="${index}">
					+
				</button>
			</div>
			<section class="section-add-item-cart" data-index="${index}">
				<button class="btn-add-to-shopping-cart" data-index="${index}">
					Agregar
				</button>
			</section>
		</section>
	</li>
	`;

		wrapperCards.innerHTML = rendering;
	});

	const removeProduct = document.querySelectorAll(".remove-product");
	const addProduct = document.querySelectorAll(".add-product");
	const addProductCart = document.querySelectorAll(
		".btn-add-to-shopping-cart"
	);

	removeProduct.forEach((btnRemove) => {
		btnRemove.addEventListener(
			"click",
			({
				target: {
					dataset: { index },
				},
			}) => {
				const counterElement = document.querySelector(
					`.counter-product[data-index="${index}"]`
				);
				const product = PRODUCTS[index];
				if (product.contador > 0) {
					product.contador--;
				}
				counterElement.textContent = product.contador;
			}
		);
	});

	addProduct.forEach((btnAdd) => {
		btnAdd.addEventListener(
			"click",
			({
				target: {
					dataset: { index },
				},
			}) => {
				const counterElement = document.querySelector(
					`.counter-product[data-index="${index}"]`
				);
				const product = PRODUCTS[index];
				product.contador++;
				counterElement.textContent = product.contador;
			}
		);
	});

	addProductCart.forEach((addCart) => {
		addCart.addEventListener(
			"click",
			({
				target: {
					dataset: { index },
				},
			}) => {
				const idItemProduct = document.getElementById(`${index}`);
				const titleItemProduct =
					idItemProduct.querySelector(".title-card");
				const priceItemProduct =
					idItemProduct.querySelector(".priceCard");
				let itemsProduct =
					idItemProduct.querySelector(".counter-product");

				if (itemsProduct.textContent > 0) {
					console.log(idItemProduct);
					console.log(titleItemProduct.textContent);
					console.log(priceItemProduct.textContent);
					console.log(itemsProduct.textContent);
					itemsProduct.textContent = 0;
					PRODUCTS[index].contador = 0;
					console.log(PRODUCTS[index]);
				}
			}
		);
	});
}

function notFoundItem() {
	wrapperCards.innerHTML = "";
	return (wrapperCards.innerHTML = `
				<section class="not-found-item">
							<p>!Ups, no se ha encontrado ninguna coincidencia</p>
				</section>
	`);
}

function filterPriceProducts() {
	const minPrice = parseInt(priceMin.value);
	const maxPrice = parseInt(priceMax.value);
	const filteredProducts = PRODUCTS.filter((product) => {
		if (product.precio >= minPrice && product.precio <= maxPrice) {
			return product;
		}

		if (product.precio >= minPrice && !maxPrice) {
			return product;
		}

		if (product.precio <= maxPrice && !minPrice) {
			return product;
		}

		if (
			product.precio >= minPrice !== product.precio &&
			product.precio <= maxPrice !== product.precio
		) {
			notFoundItem();
		}
	});

	renderingProducts(filteredProducts);
}

function resetProducts() {
	priceMax.value = "";
	priceMin.value = "";
	renderingProducts(PRODUCTS);
}

btnPrice.addEventListener("click", (e) => {
	e.preventDefault();
	filterPriceProducts();
});

btnReset.addEventListener("click", (e) => {
	e.preventDefault();
	resetProducts();
});

inputSearch.addEventListener("keyup", ({ target: { value } }) => {
	const resultSearch = PRODUCTS.filter((product) => {
		let itemFound = product.nombre
			.toLocaleLowerCase()
			.includes(value.toLocaleLowerCase());

		if (itemFound) {
			return product;
		} else {
			notFoundItem();
		}
	});

	renderingProducts(resultSearch);
});

renderingProducts(PRODUCTS);

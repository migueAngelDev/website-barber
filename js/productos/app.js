const wrapperCards = document.getElementById("wrapperCards");
const filterPrice = document.getElementById("filter-price");
const filterPriceInicial = document.getElementById("priceInicial");
const filterPriceFinal = document.getElementById("priceFinal");
const PRODUCTS = [
	{
		nombre: "Aceite para barba",
		imagen: "./imgs/productos/aceite-barba.jpeg",
		precio: 300,
		contador: 0,
		estado: "activo",
	},
	{
		nombre: "Cera para bigote",
		imagen: "./imgs/productos/gel-barba.jpeg",
		precio: 200,
		contador: 0,
		estado: "",
	},
	{
		nombre: "Navaja para afeitar",
		imagen: "./imgs/productos/navaja-afeitar.jpg",
		precio: 500,
		contador: 0,
		estado: "activo",
	},
	{
		nombre: "Tijeras de peluquería",
		imagen: "./imgs/productos/tijeras-peluqueria.jpg",
		precio: 600,
		contador: 0,
		estado: "",
	},
	{
		nombre: "Peine para barba",
		imagen: "./imgs/productos/peine-barba.jpg",
		precio: 80,
		contador: 0,
		estado: "activo",
	},
	{
		nombre: "Champú para barba",
		imagen: "./imgs/productos/champu-barba.jpg",
		precio: 340,
		contador: 0,
		estado: "activo",
	},
	{
		nombre: "Loción después del afeitado",
		imagen: "./imgs/productos/locion-barba.jpg",
		precio: 400,
		contador: 0,
		estado: "activo",
	},
	{
		nombre: "Gel para peinar",
		imagen: "./imgs/productos/gel.jpeg",
		precio: 200,
		contador: 0,
		estado: "",
	},
	{
		nombre: "Afeitadora eléctrica",
		imagen: "./imgs/productos/afeitadora-corte.jpg",
		precio: 1800,
		contador: 0,
		estado: "activo",
	},
	{
		nombre: "Crema para afeitar",
		imagen: "./imgs/productos/crema-afeitar.jpg",
		precio: 300,
		contador: 0,
		estado: "activo",
	},
	{
		nombre: "Toallas calientes",
		imagen: "./imgs/productos/toallas-calientes.jpg",
		precio: 500,
		contador: 0,
		estado: "activo",
	},
	{
		nombre: "Gel para barba",
		imagen: "./imgs/productos/gel-barba.jpeg",
		precio: 300,
		contador: 0,
		estado: "activo",
	},
	{
		nombre: "Maquinilla para afeitar",
		imagen: "./imgs/productos/maquinilla-afeitar.jpeg",
		precio: 500,
		contador: 0,
		estado: "activo",
	},
	{
		nombre: "Spray de peinado",
		imagen: "./imgs/productos/spray.jpeg",
		precio: 240,
		contador: 0,
		estado: "activo",
	},
	{
		nombre: "kit de cuidado para la barba",
		imagen: "./imgs/productos/kit-barba.jpeg",
		precio: 1000,
		contador: 0,
		estado: "activo",
	},
];

PRODUCTS.forEach((producto, index) => {
	const RENDERING = `
	<li class="card">
		<section class="sectionImg">
			<img src="${producto.imagen}" alt="${producto.nombre}" class="card-img" >
		</section>
		<section class="section-padding">
			<div class="content-title">
				<p class="title-card">
					${producto.nombre}
				</p>
			</div>
			<div class="contentPriceCard">
				<p class="priceCard">
					$${producto.precio.toFixed(2)}
				</p>
			</div>
			<div class="section-counter">
				<button class="remove-product" data-index="${index}">
					-
				</button>
				<p class="counter-product" data-index="${index}">
					${producto.contador}
				</p>
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
	wrapperCards.innerHTML += RENDERING;
});

const removeProduct = document.querySelectorAll(".remove-product");
const addProduct = document.querySelectorAll(".add-product");
const addProductCart = document.querySelectorAll(".btn-add-to-shopping-cart");

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
			const counterItem = PRODUCTS[index].contador;
			if (counterItem > 0) {
				const msg = document.querySelector(
					`.section-add-item-cart[data-index="${index}"]`
				);
				msg.innerHTML = "";
				msg.innerHTML += `
				<p class="msg-success" data-index="${index}">Se ha agregado el producto correctamente</p>
				`;
				const msgSuccess = document.querySelector(
					`.msg-success[data-index="${index}"]`
				);
				setTimeout(() => {
					msg.innerHTML = "";
					msg.appendChild(addCart);
					PRODUCTS[index].contador = 0;
					const counterElement = document.querySelector(
						`.counter-product[data-index="${index}"]`
					);
					counterElement.textContent = 0;
				}, 2500);
			}
		}
	);
});

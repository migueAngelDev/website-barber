import { getOpinones } from "../formulario/firebase.js";
const containerOpinions = document.getElementById("container-testimonials");

/* Funcionalidad del menu */

(function () {
  const listElements = document.querySelectorAll(".menu-wrapper--show");
  const list = document.querySelector(".menu-content");
  const menu = document.querySelector(".menu__hamburguer");

  const addClick = () => {
    listElements.forEach((element) => {
      element.addEventListener("click", () => {
        let subMenu = element.children[1];
        let height = 0;

        if (subMenu.clientHeight === 0) {
          height = subMenu.scrollHeight;
        }

        subMenu.style.height = `${height}px`;
      });
    });
  };

  const deleteStyleHeight = () => {
    listElements.forEach((element) => {
      if (element.children[1].getAttribute("style")) {
        element.children[1].removeAttribute("style");
      }
    });
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      deleteStyleHeight();
      if (list.classList.contains("menu-content--show"))
        list.classList.remove("menu-content--show");
    } else {
      addClick();
    }
  });

  if (window.innerWidth <= 800) {
    addClick();
  }

  menu.addEventListener("click", () =>
    list.classList.toggle("menu-content--show")
  );
})();

/* Funcionalidad de las estrellas del footer */

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

/* Este es la seccion 2 de los servicos */
const container = document.getElementById("container-services");

const services = [
  {
    imagen: "./imgs/servicios/cortes/hairstyles/womens_hairstyles.jpg",
    titulo: "Cortes de cabello",
    servicio:
      "Ofrecemos cortes de cabello personalizados, tomando en cuenta sus necesidades y preferencias.",
  },
  {
    imagen: "./imgs/home/section-servicios/vista-primer-plano.jpg",
    titulo: "Permanentes",
    servicio:
      "Ofrecemos servicios de permanentes para rizar el cabello de forma duradera y natural.",
  },
  {
    imagen: "./imgs/home/section-servicios/vista-primer-plano.jpg",
    titulo: "Líneas",
    servicio:
      "Ofrecemos servicios de arreglo de líneas de barba, patillas y nuca para hombres.",
  },
  {
    imagen: "./imgs/home/section-servicios/vista-primer-plano.jpg",
    titulo: "Limpieza de Cejas",
    servicio:
      "Ofrecemos servicios de diseño y arreglo de cejas para lucir unas cejas perfectas y definidas.",
  },
  {
    imagen: "./imgs/home/section-servicios/vista-primer-plano.jpg",
    titulo: "Pestañas",
    servicio:
      "Si deseas lucir pestañas más largas, espesas y definidas, ofrecemos servicios de extenciones de pestañas.",
  },
  {
    imagen: "./imgs/servicios/unas/manicura.jpg",
    titulo: "Manicure",
    servicio:
      "Ofrecemos servicios de manicure que incluyen limido, limpieza, tratamiento e hidratación.",
  },
  {
    imagen: "./imgs/servicios/cortes/hairstyles/beard_1.jpg",
    titulo: "Barba",
    servicio:
      "Para los amantes de la barba, ofrecemos servicios de corte, afeitado, diseño de barba y bigote.",
  },
  {
    imagen: "./imgs/home/section-servicios/vista-primer-plano.jpg",
    titulo: "Tintes",
    servicio:
      "Si buscas un cambio de imagen, te ofrecemos servicios de tintes de cabello para darle un nuevo estilo.",
  },
];

services.forEach((servicio) => {
  const RENDERING = `
    <div class="wrapper-service">
      <div class="img-service">
        <img src="${servicio.imagen}" />
      </div>
      <div class="title-service">
        <p>${servicio.titulo}</p>
      </div>
      <div class="text-service">
        <p>${servicio.servicio}</p>
      </div>
    </div>
  `;

  container.innerHTML += RENDERING;
});

/**************************************************/
/* Este es la seccion 4 de estilos y tendencias */

const contenedor = document.getElementById("swiper-wrapper");

const newService = [
  {
    imagen: "./imgs/servicios/cortes/hombre/largo_y_suelto.jpg",
    titulo: "Largo y suelto",
  },
  {
    imagen: "./imgs/servicios/cortes/hombre/punta.jpg",
    titulo: "De punta",
  },
  {
    imagen: "./imgs/servicios/cortes/hombre/texturizado.jpg",
    titulo: "Texturizado",
  },
  {
    imagen: "./imgs/servicios/cortes/hombre/conico.jpg",
    titulo: "Cónico",
  },
  {
    imagen: "./imgs/servicios/cortes/hombre/mohicano.jpg",
    titulo: "Mohicano",
  },
  {
    imagen: "./imgs/servicios/cortes/hairstyles/womens_hairstyles.jpg",
    titulo: "Bob",
  },
];

newService.forEach((service) => {
  const newHTML = `
    <div class="swiper-slide">
      <div class="hairstyle-file">
        <div class="hairstyle-image">
          <img src="${service.imagen}" />
        </div>
        <div class="swiper-slide-title">
          <p>${service.titulo}</p>
        </div>
      </div>
    </div>
  `;

  contenedor.innerHTML += newHTML;
});

/**************************************************/
/* Este es la seccion 5 de los Testimonios */
/* window.addEventListener("DOMContentLoaded", async () => {
  const querySnapshot = await getOpinones();
  let structureHTML = "";

  querySnapshot.forEach((doc) => {
    const item = doc.data();
    structureHTML += `
     <div class="card-opinion">
        <section class="description-usr">
          <div>
            <img src="${item.foto}" alt="${item.nombre}">
            <p>${item.nombre}</p>
          </div>
          <section class="container-ranking">
            ${item.calificacion}
          </section>
        </section>
        <div class="content-comments">
          <p>${item.opinion}</p>
        </div>
     </div>
     `;
  });
  containerOpinions.innerHTML = structureHTML;
}); */

window.addEventListener("DOMContentLoaded", async () => {
  const querySnapshot = await getOpinones();
  let structureHTML = "";

  querySnapshot.forEach((doc) => {
    const item = doc.data();
    let rankingHTML = "";

    for (let i = 1; i <= 5; i++) {
      if (i <= item.calificacion) {
        rankingHTML += `
          <svg
            class="star-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="stroke: #f1b955; fill: #f1b955"
          >
            <path
              class="star-path"
              d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
             style="fill: #f1b955"
              ></path>
          </svg>`;
      } else {
        rankingHTML += `
          <svg
            class="star-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="stroke: #f1b955"
          >
            <path
              class="star-path"
              d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
             
            ></path>
          </svg>`;
      }
    }

    structureHTML += `
      <div class="card-opinion">
        <section class="description-usr">
          <div>
            <img src="${item.foto}" alt="${item.nombre}">
            <p>${item.nombre}</p>
          </div>
          <section class="container-ranking">
            ${rankingHTML}
          </section>
        </section>
        <div class="content-comments">
          <p>${item.opinion}</p>
        </div>
      </div>
    `;
  });

  containerOpinions.innerHTML = structureHTML;
});

/* Este es la seccion 2 de los servicos */
const container = document.getElementById("container-services");

const motivos = {
  nombre: "ines",
  razon: "separacion",
};

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
const contenedorTestimonios = document.getElementById("container-testimonios");

const testimonios = [
  {
    imagen: "./imgs/home/seccionTestimonios/prueba2.jpg",
    nombre: "Alexandra",
    comentario:
      "La mejor experiencia en una barbería que he tenido. El personal es amable y experto en su trabajo. Me encantó mi corte de pelo, definitivamente regresaré.",
  },
  {
    imagen: "./imgs/home/seccionTestimonios/prueba1.webp",
    nombre: "Marisol",
    comentario:
      "La atención personalizada en esta barbería es excelente. Siempre comprenden mis necesidades y se aseguran de que esté satisfecha.",
  },
  {
    imagen: "./imgs/home/seccionTestimonios/prueba3.jpg",
    nombre: "Rex",
    comentario:
      "No puedo decir suficientes cosas buenas sobre esta barbería. Siempre me tratan bien y me hacen sentir como en casa. Además, mi corte de pelo siempre es perfecto.",
  },
];

testimonios.forEach((testimonio) => {
  const valoracion = `
    <div class="wrapper-testimonios">
      <div class="wrapper-testimonios-credenciales">
        <div class="credenciales">
          <div class="img-testimonios">
            <img src="${testimonio.imagen}" alt="" srcset="" />
          </div>
          <div class="names-testimonios">
            <p>${testimonio.nombre}</p>
          </div>
        </div>
        <div class="valoracion-testimonios">
          <img src="/svg/star.svg" alt="Puntaje 1" />
          <img src="/svg/star.svg" alt="Puntaje 2" />
          <img src="/svg/star.svg" alt="Puntaje 3" />
          <img src="/svg/star.svg" alt="Puntaje 4" />
          <img src="/svg/star.svg" alt="Puntaje 5" />
        </div>
      </div>
      <div class="testimonio-comentario">
        <p>${testimonio.comentario}</p>
      </div>
    </div>
  `;

  contenedorTestimonios.innerHTML += valoracion;
});

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

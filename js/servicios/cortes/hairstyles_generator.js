//SE CREA UNA CONSTANTE CON EL ELEMENTO HTML DONDE SE COLOCARÁN LOS CORTES
const galeriaLacio = document.getElementById("galeria-lacio");
const galeriaOndulado = document.getElementById("galeria-ondulado");
const galeriaRizado = document.getElementById("galeria-rizado");
const sliderAdultos = document.getElementById("slider-adultos");
const sliderJovenes = document.getElementById("slider-jovenes");
const sliderNinos = document.getElementById("slider-ninos");
const selector = document.getElementById("hairstyles-ages");
let selectorValue;

//SE BUSCA EL ARCHIVO .json PARA INICIAR LA FUNCIÓN QUE REÚNE LOS DATOS
fetch("js/servicios/cortes/data.json")
    .then(response => response.json())
    .then(data => {
        //POR CADA OBJETO SE REALIZARÁ LA FUNCIÓN HAIRSTYLE
        data.hairstyles.forEach(function(hairstyle) {

            const hairstyleLi = document.createElement("li");
            hairstyleLi.setAttribute("category", hairstyle.category);
            hairstyleLi.setAttribute("hair-type", hairstyle.type);
            hairstyleLi.setAttribute("age", hairstyle.age);
            hairstyleLi.classList.add("hairstyle-container");
            //SE CREA EL DIV PRINCIPAL DE LA CARTA Y SE LE AGREGA LA CLASE PREVIAMENTE CREADA EN CSS PARA DICHO ELEMENTO
            const hairstyleDiv = document.createElement("div");
            hairstyleDiv.classList.add("hairstyle-card");
            
            //SE CREA LA CONSTANTE QUE CONTENDRÁ LA IMAGEN DEL CORTE, COMO ELEMENTO SE REQUIERE CREAR UN "img"
            const hairstyleImg = document.createElement("img");
            hairstyleImg.classList.add("hairstyle-card-img");
            //A LA CONSTANTE DE IMAGEN SE LE AGREGA COMO VALOR DEL ATRIBUTO src LOS DATOS COLOCADOS EN "img" DEL .json (COLOCAR AHÍ EL URL DE LA IMAGEN) Y PARA EL ATRIBUTO alt DE LA IMAGEN SE OCUPA EL DATO INGRESADO EN "name" DEL .json
            hairstyleImg.src = hairstyle.img;
            hairstyleImg.alt = hairstyle.name;

            //SE AGREGA LA CONSTANTE QUE CONTENDRÁ EL NOMBRE DEL CORTE, UTILIZO UN h2 PARA ELLO
            const hairstyleIntro = document.createElement("p");
            hairstyleIntro.classList.add("hairstyle-card-text");
            hairstyleIntro.textContent = `Corte de cabello estilo`;

            const hairstyleName = document.createElement("h4");
            hairstyleName.classList.add("hairstyle-card-name");
            hairstyleName.textContent = `"${hairstyle.name}"`;

            //SE ESPECIFICA QUE LA IMAGEN, EL NOMBRE Y EL PRECIO SON HIJOS DEL DIV DE LA CARTA
            hairstyleDiv.appendChild(hairstyleImg);
            hairstyleDiv.appendChild(hairstyleIntro);
            hairstyleDiv.appendChild(hairstyleName);

            hairstyleLi.appendChild(hairstyleDiv);            
            //SE ESPECIFICA QUE EL DIV DE LA CARTA (AL QUE SE LE ACABAN DE ADJUNTAR LAS DEMÁS CONSTANTES), ES HIJO DEL ELEMENTO QUE PERTENECE A LA CONSTANTE CREADA AL INICIO DEL CÓDIGO (LA section EN EL HTML)
            
            let galleryType = hairstyleLi.getAttribute("hair-type");
            
            if(galleryType == "lacio"){
                galeriaLacio.appendChild(hairstyleLi);
            } else if (galleryType == "ondulado"){
                galeriaOndulado.appendChild(hairstyleLi);
            } else if (galleryType == "rizado"){
                galeriaRizado.appendChild(hairstyleLi);
            }

            /***************** SLIDERS **********************/

            const hairstyleSlide = document.createElement("div");
            hairstyleSlide.classList.add("swiper-slide");
            hairstyleSlide.classList.add("hairstyle-container-slider");
            hairstyleSlide.setAttribute("category", hairstyle.category);
            hairstyleSlide.setAttribute("hair-type", hairstyle.type);
            hairstyleSlide.setAttribute("age", hairstyle.age);
            
            const hairstyleSlideCard = document.createElement("div");
            hairstyleSlideCard.classList.add("hairstyle-file");

            const hairstyleSlideImage = document.createElement("div");
            hairstyleSlideImage.classList.add("hairstyle-image");

            const hairstyleSlideImg = document.createElement("img");
            hairstyleSlideImg.src = hairstyle.img;
            hairstyleSlideImg.alt = hairstyle.name;
            hairstyleSlideImg.classList.add("hairstyle-img");

            hairstyleSlideImage.appendChild(hairstyleSlideImg);

            const hairstyleSlideText = document.createElement("p");
            hairstyleSlideText.textContent = `Corte de cabello estilo`;

            const hairstyleSlideName = document.createElement("h4");
            hairstyleSlideName.textContent = `"${hairstyle.name}"`;

            hairstyleSlideCard.appendChild(hairstyleSlideImage);
            hairstyleSlideCard.appendChild(hairstyleSlideText);
            hairstyleSlideCard.appendChild(hairstyleSlideName);

            hairstyleSlide.appendChild(hairstyleSlideCard);

            let slideAge = hairstyleSlide.getAttribute("age");
            if(slideAge == "adulto"){
                sliderAdultos.appendChild(hairstyleSlide);
            } else if (slideAge == "joven"){
                sliderJovenes.appendChild(hairstyleSlide);
            } else if (slideAge == "nino"){
                sliderNinos.appendChild(hairstyleSlide);
            }
        });

    })

    .catch(error => console.error(error));
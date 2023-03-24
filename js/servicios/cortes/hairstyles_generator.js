//SE CREA UNA CONSTANTE CON EL ELEMENTO HTML DONDE SE COLOCARÁN LOS CORTES
const containerHairstyles = document.getElementById("hairstyles-container");

//SE BUSCA EL ARCHIVO .json PARA INICIAR LA FUNCIÓN QUE REÚNE LOS DATOS
fetch("js/servicios/cortes/data.json")
    .then(response => response.json())
    .then(data => {
        //POR CADA OBJETO SE REALIZARÁ LA FUNCIÓN HAIRSTYLE
        data.hairstyles.forEach(function(hairstyle) {

            //SE CREA EL DIV PRINCIPAL DE LA CARTA Y SE LE AGREGA LA CLASE PREVIAMENTE CREADA EN CSS PARA DICHO ELEMENTO
            const hairstyleDiv = document.createElement("div");
            hairstyleDiv.classList.add("hairstyle-file");
            //SE LE COLOCA AL DIV UN ATRIBUTO LLAMADO "category", ESTE CONTENDRÁ COMO VALOR EL COLOCADO EN "category" DEL .json, QUE A SU VEZ DEBE COINCIDIR CON EL VALOR PUESTO EN LOS ELEMENTOS DEL DIV CON CLASE "category-list" (REVISAR HTML) PARA QUE SE MUESTRE LA TARJETA AL SELECCIONAR DETERMINADO GÉNERO
            hairstyleDiv.setAttribute("category", hairstyle.category);

            //SE CREA LA CONSTANTE QUE CONTENDRÁ LA IMAGEN DEL CORTE, COMO ELEMENTO SE REQUIERE CREAR UN "img"
            const hairstyleImg = document.createElement("img");
            //A LA CONSTANTE DE IMAGEN SE LE AGREGA COMO VALOR DEL ATRIBUTO src LOS DATOS COLOCADOS EN "img" DEL .json (COLOCAR AHÍ EL URL DE LA IMAGEN) Y PARA EL ATRIBUTO alt DE LA IMAGEN SE OCUPA EL DATO INGRESADO EN "name" DEL .json
            hairstyleImg.src = hairstyle.img;
            hairstyleImg.alt = hairstyle.name;

            //SE AGREGA LA CONSTANTE QUE CONTENDRÁ EL NOMBRE DEL CORTE, UTILIZO UN h2 PARA ELLO
            const hairstyleName = document.createElement("h2");
            //AL h2 SE LE ADJUNTA EL VALOR DE "name" COLOCADO EN EL .json
            hairstyleName.innerHTML = hairstyle.name;

            const hairstyleDescription = document.createElement("p");
            hairstyleDescription.innerHTML = hairstyle.description;

            //SE AGREGA LA CONSTANTE QUE CONTENDRÁ EL PRECIO DEL CORTE, UTILIZO UN h3 PARA ELLO
            const hairstylePrice = document.createElement("h3");
            //AL h3 SE LE ADJUNTA EL VALOR DE "price" COLOCADO EN EL .json
            hairstylePrice.innerHTML = hairstyle.price;

            //SE ESPECIFICA QUE LA IMAGEN, EL NOMBRE Y EL PRECIO SON HIJOS DEL DIV DE LA CARTA
            hairstyleDiv.appendChild(hairstyleImg);
            hairstyleDiv.appendChild(hairstyleName);
            hairstyleDiv.appendChild(hairstyleDescription);
            hairstyleDiv.appendChild(hairstylePrice);

            //SE ESPECIFICA QUE EL DIV DE LA CARTA (AL QUE SE LE ACABAN DE ADJUNTAR LAS DEMÁS CONSTANTES), ES HIJO DEL ELEMENTO QUE PERTENECE A LA CONSTANTE CREADA AL INICIO DEL CÓDIGO (LA section EN EL HTML)
            containerHairstyles.appendChild(hairstyleDiv);
        });

        //SENTENCIAS IF, DEPENDIENDO DE LA PÁGINA A LA QUE SE ACCEDA ES EL CONTENIDO QUE SE MOSTRARÁ DE INICIO

        if(window.location.pathname.includes('women_hairstyles.html')){
            $('.category-gender[category="womens"]').addClass('category-gender-active');
            $('.category-gender[category="womens"]').removeClass('category-gender-shadow');
            $('.hairstyles-container').show();
            $('.hairstyle-file').hide();
            $('.hairstyle-file[category="womens"]').show();
        }
        
        else if(window.location.pathname.includes('men_hairstyles.html')){
            $('.category-gender[category="mens"]').addClass('category-gender-active');
            $('.category-gender[category="mens"]').removeClass('category-gender-shadow');
            $('.hairstyles-container').show();
            $('.subcategory-list').show();
            $('.subcategory-gender[category="mens"').addClass('subcategory-gender-active');
            $('.subcategory-gender[category="mens"').removeClass('subcategory-gender-shadow');
            $('.hairstyle-file').hide();
            $('.hairstyle-file[category="mens"]').show();
        }

        else if(window.location.pathname.includes('boy_hairstyles.html')){
            $('.category-gender[category="boys"]').addClass('category-gender-active');
            $('.category-gender[category="boys"]').removeClass('category-gender-shadow');
            $('.hairstyles-container').show();
            $('.hairstyle-file').hide();
            $('.hairstyle-file[category="boys"]').show();
        }

        else if(window.location.pathname.includes('girl_hairstyles.html')){
            $('.category-gender[category="girls"]').addClass('category-gender-active');
            $('.category-gender[category="girls"]').removeClass('category-gender-shadow');
            $('.hairstyles-container').show();
            $('.hairstyle-file').hide();
            $('.hairstyle-file[category="girls"]').show();
        }

    })

    .catch(error => console.error(error));
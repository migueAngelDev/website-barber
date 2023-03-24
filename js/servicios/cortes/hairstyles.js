$(document).ready(function(){
    
    //ESCONDIENDO SUBCATEGORÍA DE HOMBRES Y LISTA DE CORTES
    $('.subcategory-list').hide();
    $('.hairstyles-container').hide();

    //ACTIVACIÓN DE GÉNERO ELEGIDO (SOMBRA DORADA)
    $('.category-gender').click(function(){
        let categoryHairstyle = $(this).attr('category');
        //SE ACTIVA LA SECCIÓN QUE CONTIENE EL LISTADO DE CORTES
        $('.hairstyles-container').show();
        //SE LE REMUEVE LA CLASE ACTIVE (SOMBRA DORADA) AL ANTERIOR SELECCIONADO PARA COLOCÁRSELA SOLO AL ACTUAL
        //TAMBIÉN SE LE AGREGA LA CLASE DE EFECTO HOVER (SOMBRA BLANCA) A TODOS LOS DEMÁS GÉNEROS NO SELECCIONADAS Y ESTA MISMA SE LE ELIMINA AL SELECCIONADO PARA QUE NO ESTORBE
        $('.category-gender').addClass('category-gender-shadow');
        $('.category-gender').removeClass('category-gender-active');
        $(this).addClass('category-gender-active');
        $(this).removeClass('category-gender-shadow');

        //OCULTANDO CORTES QUE NO SON DEL GÉNERO SELECCIONADO
        $('.hairstyle-file').hide();
        //MOSTRANDO CORTES DEL GÉNERO SELECCIONADO
        $('.hairstyle-file[category="'+categoryHairstyle+'"]').fadeIn(1000);
    });

    //SE MUESTRA LA SUBCATEGORÍA DE CABELLO Y BARBA AL PULSAR EL GÉNERO "HOMBRES"
    $('.category-gender[category="mens"]').click(function(){
        $('.subcategory-list').fadeIn(1000);
        $('.subcategory-list .subcategory-gender[category="mens"]').addClass('subcategory-gender-active');
        $('.subcategory-list .subcategory-gender[category="mens"]').removeClass('subcategory-gender-shadow');
        //SE LE ELIMINA LA CLASE ACTIVE AL SUBGÉNERO BARBA (POR SI SE VISITA DESPUÉS DE HABERLA VISITADO PREVIAMENTE NO SE QUEDE MARCADA, PROVOCANDO DOBLE MARCA DORADA EN LA SUBCATEGORÍA)
        $('.subcategory-list .subcategory-gender[category="beards"]').removeClass('subcategory-gender-active');
    });

    //SI NO ESTÁ ACTIVA LA CATEGORÍA HOMBRES, SE ESCONDE EL SUBMENÚ
    $('.category-gender[category!="mens"]').click(function(){
        $('.subcategory-list').hide();
    });

    //ACTIVACIÓN DE SUBGÉNERO ELEGIDO
    $('.subcategory-gender').click(function(){
        let categoryHairstyle = $(this).attr('category');

        //SE LE REMUEVE LA CLASE ACTIVE (SOMBRA DORADA) AL ANTERIOR SELECCIONADO PARA COLOCÁRSELA SOLO AL ACTUAL
        //TAMBIÉN SE LE AGREGA LA CLASE DE EFECTO HOVER (SOMBRA BLANCA) A EL GÉNERO NO SELECCIONADO Y ESTA MISMA SE LE ELIMINA AL SELECCIONADO PARA QUE NO ESTORBE
        $('.subcategory-gender').addClass('subcategory-gender-shadow');
        $('.subcategory-gender').removeClass('subcategory-gender-active');
        $(this).addClass('subcategory-gender-active');
        $(this).removeClass('subcategory-gender-shadow');

        //OCULTANDO CORTES QUE NO SON DEL SUBGÉNERO SELECCIONADO
        $('.hairstyle-file').hide();
        //MOSTRANDO CORTES DEL SUBGÉNERO SELECCIONADO
        $('.hairstyle-file[category="'+categoryHairstyle+'"]').fadeIn(1000);
    });
});
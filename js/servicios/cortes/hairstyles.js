$(document).ready(function () {

    //ESCONDIENDO SUBCATEGORÍA DE HOMBRES Y LISTA DE CORTES
    let band = 0;
    let categoryHairstyle;
    let selectorValue;
    if (band === 0) {
        $('.hairstyle-container-slider').hide();
        $('.hairstyle-container-slider[category="mens"]').show();
        $('.hairstyle-container').hide();
        $('.hairstyle-container[category="mens"]').show();
    }

    $('.category-gender').click(function () {
        categoryHairstyle = $(this).attr('category');
        band++;
        //SE ACTIVA LA SECCIÓN QUE CONTIENE EL LISTADO DE CORTES
        //SE LE REMUEVE LA CLASE ACTIVE (SOMBRA DORADA) AL ANTERIOR SELECCIONADO PARA COLOCÁRSELA SOLO AL ACTUAL
        //TAMBIÉN SE LE AGREGA LA CLASE DE EFECTO HOVER (SOMBRA BLANCA) A TODOS LOS DEMÁS GÉNEROS NO SELECCIONADAS Y ESTA MISMA SE LE ELIMINA AL SELECCIONADO PARA QUE NO ESTORBE
        $('.category-gender').addClass('category-gender-shadow');
        $('.category-gender').removeClass('category-gender-active');
        $(this).addClass('category-gender-active');
        $(this).removeClass('category-gender-shadow');

        //OCULTANDO CORTES QUE NO SON DEL GÉNERO SELECCIONADO
        $('.hairstyle-container').hide();
        //MOSTRANDO CORTES DEL GÉNERO SELECCIONADO
        $('.hairstyle-container[age="' + selectorValue + '"][category="' + categoryHairstyle + '"]').show();

        $('.hairstyle-container-slider').hide();
        //MOSTRANDO CORTES DEL GÉNERO SELECCIONADO
        $('.hairstyle-container-slider[category="' + categoryHairstyle + '"]').show();
    });

    $('#hairstyles-ages').change(function () {
        selectorValue = $('#hairstyles-ages').val();

        if (band === 0) {
            $('.hairstyle-container').hide();
            //MOSTRANDO CORTES DEL GÉNERO SELECCIONADO
            $('.hairstyle-container[age="' + selectorValue + '"][category="mens"]').show();
        } else {
            $('.hairstyle-container').hide();
            //MOSTRANDO CORTES DEL GÉNERO SELECCIONADO
            $('.hairstyle-container[age="' + selectorValue + '"][category="' + categoryHairstyle + '"]').show();
        }
    });
});
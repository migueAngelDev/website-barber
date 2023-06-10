<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/formulario/style.css" />
    <script src="https://kit.fontawesome.com/336c091e50.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <section class="section-form">
      <div class="header-section">
        <span class="line"></span>
        <div class="title-section">
          <h2>Cuéntanos tu experiencia</h2>
        </div>
        <span class="line"></span>
      </div>

      <div class="container-unas">
        <div class="content-unas-img">
          <p>Recibir opiniones de nuestros clientes es fundamental para mejorar nuestro servicio 
          y mantenernos actualizados en las tendencias y necesidades del mercado. Además, nos 
          permite conocer la experiencia que han tenido en nuestro establecimiento y poder 
          corregir posibles errores o aspectos a mejorar.<br>
      <br>Asimismo, las opiniones positivas pueden servir como referencia para nuevos clientes 
          interesados en nuestros servicios. Por todo esto, valoramos y agradecemos la 
          retroalimentación de nuestros clientes.</p>
          <img src="imgs/formulario/valoracion.jpg" alt="pedicura" />
        </div>
        <div class="content-info">
          <div class="form">
            <form method="POST" action="PHP/formulario/insertar.php">
              <label for="nombre">Ingresa tu nombre(s)</label>
              <input type="text" id="nombre" name="nombre" required>
              
              <label for="apellidos">Ingresa tus apellidos</label>
              <input type="text" id="apellidos" name="apellidos" required>
              
              <label for="email">Ingresa tu correo electronico</label>
              <input type="email" id="email" name="email" required>

              <label for="imagen">Sube una foto para agregar a tu foto de perfil.</label>
              <input type="file" id="imagen" name="imagen" required>

              <label for="valoration__output">Califíca tu experiencia</label>
              <div class="container">
                <div class="valoration">
                    <div class="stars__container">
                        <i class="fa-solid fa-star valoration__star" id="star__1"></i>
                        <i class="fa-solid fa-star valoration__star" id="star__2"></i>
                        <i class="fa-solid fa-star valoration__star" id="star__3"></i>
                        <i class="fa-solid fa-star valoration__star" id="star__4"></i>
                        <i class="fa-solid fa-star valoration__star" id="star__5"></i>
                    </div>
                    <div class="valoration__output">
                        <input type="number" name="valoration__output" id="valoration__output" value="" autocomplete="off" readonly>
                    </div>
                </div>
            </div>
            <script src="js/formulario/main.js"></script>

              <label for="comentario">Compartenos tu opinión</label>
              <textarea name="comentario" id="comentario" cols="30" rows="10" required></textarea>
             <!-- <input type="text" id="comentario" name="comentario"> -->
                  
              <input type="submit" value="Insertar" id="insertar">  
            </form>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>
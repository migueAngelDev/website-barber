<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/formulario/style.css" />
  </head>
  <body>
    <header>
      <div class="logo">
        <img
          src="imgs/home/section-one/logo_Barbería.png"
          alt="logo de la barberia"
        />
      </div>
      <div class="logo_2">Barber Shop: Los Ángeles</div>
      <nav class="nav-bar">
        <ul class="nav-bar-ul">
          <li>
            <a href="index.html">Inicio</a>
          </li>
          <li class="groups">
            <a href="#"
              >Servicios
              <span><img src="./imgs/home/icons/dropdown.svg" /></span>
            </a>
            <ul class="category">
              <li><a href="hairstyles.html">Cortes de cabello y barba</a></li>
              <li><a href="unas.html">Manicure</a></li>
              <li><a href="unas.html">Pedicure</a></li>
              <li><a href="#">Tintes y permanentes</a></li>
            </ul>
          </li>
          <li>
            <a href="products.html">Productos</a>
          </li>
          <li>
            <a href="#">Formulario</a>
          </li>
        </ul>
      </nav>
    </header>
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
              <p>Ingresa tu nombre(s)</p>
              <input type="text" id="nombre" name="nombre">
              
              <p>Ingresa tus apellidos</p>
              <input type="text" id="apellidos" name="apellidos">
              
              <p>Ingresa tu correo electronico</p>
              <input type="email" id="email" name="email">

              <p>Sube una foto para agregar a tu foto de perfil.</p>
              <input type="file" id="imagen" name="imagen"/>

              <p>Compartenos tu opinión</p>
              <textarea name="comentario" id="comentario" cols="30" rows="10"></textarea>
             <!-- <input type="text" id="comentario" name="comentario"> -->
                  
              <input type="submit" value="Insertar" id="insertar">  
            </form>
          </div>
          <?php if(isset($_GET['register'])) { ?>
          <p>Comentarios enviados</p>
          <?php } ?>
        </div>
      </div>
    </section>
  </body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="main.css" media="screen">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <title>Document</title>
</head>
<body>
    <header>
    <!-- Image and text -->
        <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src="https://i.pinimg.com/originals/95/36/20/9536201d6babddecc3923f43f1b6d9c2.png" alt="" width="30" height="24" class="d-inline-block align-top">
            companow
            </a>
        </div>
        </nav>
    </header>

    <div class="titulo__h1">
    <h1 id="titulo_principal">Simulador de creditos</h1>
    </div>

<div class="contain__accordion">
    <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
            <h2 class="accordion-header contain__button" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                ¿ Como funciona ?
            </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias odio eius repellat quibusdam culpa, adipisci voluptate sint explicabo, nemo quod est. Odio, consequatur? Voluptatibus aspernatur, eligendi rerum numquam natus corrupti? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat eligendi quam deleniti, voluptatibus veritatis unde cum facilis et ullam, quod at dolore beatae exercitationem velit nisi repellat in? Nobis. Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header contain__button" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                ¿ Que información se obtendrá ?
            </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, fugit ad? Similique accusantium illum laborum consequuntur qui nesciunt excepturi voluptates voluptas doloribus necessitatibus illo sunt, hic cumque ipsum neque placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rerum veniam, eius ad dicta dolores necessitatibus consequatur. Vero modi esse consequuntur rem nulla rerum sequi, ipsum, quod maxime, libero dolorum. Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
        </div>
    </div>
</div>

<div class="form__inputs">
<div class="form__inputs2" id="formulario">
<form id="formAjax">
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">monto a pedir</label>

    <div class="col-sm-10 contain__inputs">
      <input type="number" class="form-control inputs__form" id="inputEmail3">
    </div>

  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">numero de cuotas</label>

    <div class="col-sm-10 contain__inputs">
      <input type="number" class="form-control inputs__form" id="inputPassword3">
    </div>

  </div>
  
  <div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Comparar</button>
</form>
</div>
</div>

    <script>
        $("#formAjax").submit(function(event){

            event.preventDefault();

            $("#formulario").html("<h1 id='mostrar_datos'>mostrar resultados</h1> <a class='btn btn-primary' href='index.php' role='button'>calcular de nuevo</a>");
            
        });

    </script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>
</body>
</html>
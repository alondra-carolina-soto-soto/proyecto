<template>
  <div class="contenido">
 <h2 class="animate__animated animate__rubberBand titulo-css">Sección de CSS</h2>

<p class="descripcion">
  CSS es el lenguaje que se encarga de dar estilo y presentación visual a una página web.
  Define cómo se ven los elementos HTML: colores, tamaños, fuentes, márgenes, animaciones, etc.
</p>

<h2 class="subtitulo">Características principales:</h2>

<ul class="lista-css">
  <li>Cambiar colores, tipografías y fondos</li>
  <li>Organizar el diseño con flexbox o grid</li>
  <li>Hacer que el sitio sea responsivo (adaptable a móviles)</li>
  <li>Agregar transiciones y animaciones suaves</li>
</ul>


  <center> <img src="@/assets/css.jpg" alt="CSS" class="imagen" /></center>   
  </div>
</template>

<script>
export default {
  name: 'CSSView'
}
</script>

<style scoped>
.contenido {
  padding: 2rem;
}

.imagen {
  width: 200px;
  margin: 1rem;
}
.titulo-css {
  font-size: 2rem;
  color: #000000;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 6px #00000060;
}

.descripcion {
  font-size: 1.1rem;
  color: #e0ffe7;
  margin: 0 auto 2rem;
  max-width: 700px;
  line-height: 1.6;
  text-align: center;
}

.subtitulo {
  font-size: 1.5rem;
  color: #ffffff;
  margin-top: 2rem;
  text-align: center;
  text-decoration: underline;
}

.lista-css {
  list-style-type: square;
  padding: 0 2rem;
  color: #c7f6d1;
  font-size: 1rem;
  line-height: 1.8;
}
</style>

<template>
  <div class="contenido">
    <h2>Sección de CSS</h2>
    <p>CSS es el lenguaje que se encarga de dar estilo y presentación visual a una página web. 
        Define cómo se ven los elementos HTML: colores, tamaños, fuentes, márgenes, animaciones, etc.
</p>
<h2> principales:</h2>
<p>
    <ul>
  <li>Cambiar colores, tipografías y fondos</li>
  <li>Organizar el diseño con flexbox o grid</li>
  <li>Hacer que el sitio sea responsivo (adaptable a móviles)</li>
  <li>Agregar transiciones y animaciones suaves</li>
</ul>
</p>
      <img src="@/assets/css.jpg" alt="CSS" class="imagen" />
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
</style>

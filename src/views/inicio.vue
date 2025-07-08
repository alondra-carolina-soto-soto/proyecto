<template>
  <div class="inicio">
    <header></header>
    
    <section>
     <center> <h2>Bienvenido</h2>
<p class="animate__animated animate__swing animate__repeat">
  Aprende sobre los lenguajes de JavaScript y CSS.
</p>
      <img src="@/assets/js.jpg" alt="JavaScript" class="imagen" />
      <img src="@/assets/css.jpg" alt="CSS" class="imagen" />
    </center>
</section>
  </div>
  
</template>
<script>
export default {
  name: 'InicioView'
}
</script>

<style scoped>
.encabezado {
  display: flex;
  align-items: center;
  background-color: #333;
  color: rgb(7, 75, 78);
  padding: 1rem;
}
.logo {
  width: 50px;
  margin-right: 1rem;
}
.titulo {
  font-size: 1.8rem;
}
.imagen {
  width: 200px;
  margin: 1rem;
}
</style>
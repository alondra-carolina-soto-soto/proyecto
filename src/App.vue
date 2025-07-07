<template>
  <div id="app">
    <header class="navbar">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <h1 class="titulo">codifica con stylo</h1>
      <nav class="menu">
        <router-link to="/" class="btn">Inicio</router-link>
        <router-link to="/javascript" class="btn">JavaScript</router-link>
        <router-link to="/css" class="btn">CSS</router-link>
      </nav>
    </header>

    <main class="contenido">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* Estilos del encabezado fijo */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #222;
  color: white;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  z-index: 1000;
}

.logo {
  width: 40px;
  margin-right: 1rem;
}

.titulo {
  flex: 1;
  font-size: 1.4rem;
}

.menu {
  display: flex;
  gap: 1rem;
}

.btn {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  background-color: #444;
  border-radius: 5px;
}

.btn:hover {
  background-color: #666;
}

/* Espacio extra para que no se esconda el contenido bajo el navbar */
.contenido {
  margin-top: 80px;
  padding: 1rem 2rem;
}
</style>
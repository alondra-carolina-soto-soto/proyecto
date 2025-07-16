<template>
  <div class="inicio">
    <header></header>

    <!-- Sección bienvenida -->
    <section class="bienvenida animate__animated animate__fadeInDown">
      <h2 class="mensaje">
        Bienvenida a <span>codifica con stylo</span>
      </h2>
      <p class="frase">
        Aprende sobre los lenguajes de JavaScript y CSS de forma creativa y visual 
      </p>

      <!-- Carrusel -->
      <div class="carrusel animate__animated animate__zoomIn">
        <img
          :src="fotos[fotoActual]"
          :alt="'Imagen ' + (fotoActual + 1)"
          class="imagen img-fluid"
        />
      </div>
    </section>

    
  </div>
  <!-- Footer -->
    <footer class="footer animate__animated animate__fadeInUp">
      <div class="texto-footer">
© 2025 Codifica con Stylo — Proyecto con fines educativos para práctica universitaria

 
      </div>
    </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import js from '@/assets/js.jpg'
import css from '@/assets/css.jpg'

const fotos = [js, css]
const fotoActual = ref(0)

onMounted(() => {
  setInterval(() => {
    fotoActual.value = (fotoActual.value + 1) % fotos.length
  }, 3000)
})
</script>

<script>
export default {
  name: 'InicioView'
}
</script>

<style scoped>
/* Fondo total del componente */
.inicio {
  background: linear-gradient(to right, #ed9358, #b19885); /* rosa pastel a lila claro */
  min-height: 100vh;
  padding-bottom: 3rem;
  font-family: 'Segoe UI', sans-serif;
}

/* Bienvenida */
.bienvenida {
  text-align: center;
  padding: 3rem 1rem;
  color: #080609;
}

.mensaje {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.mensaje span {
  color: #e05b13; /* rosa fuerte femenino */
  font-weight: 900;
}

.frase {
  font-size: 1.25rem;
  color: #000000;
  margin-bottom: 2rem;
}

/* Carrusel */
.carrusel {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
}

.imagen {
  width: 300px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.5s ease;
}

.imagen:hover {
  transform: scale(1.05);
}

/* Footer femenino */
.footer {
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  padding: 1.2rem 1rem;
  font-size: 0.95rem;
  border-top: 4px solid #ffffff;
  position: relative;
  bottom: 0;
  width: 100%;
}

.texto-footer {
  font-style: italic;
}
</style>

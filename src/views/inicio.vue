<template>
  <div class="inicio">
    <header></header>

    <section class="bienvenida">
      <h2 class="mensaje">
        Bienvenido a <span>codifica con stylo</span>
      </h2>
      <p class="frase">
        Aprende sobre los lenguajes de JavaScript y CSS 💡.
      </p>

      <div class="carrusel">
        <img
          :src="fotos[fotoActual]"
          :alt="'Imagen ' + (fotoActual + 1)"
          class="imagen"
        />
      </div>
    </section>
  </div>
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
  }, 3000) // cambia cada 3 segundos
})
</script>

<script>
export default {
  name: 'InicioView'
}
</script>

<style scoped>
.bienvenida {
  text-align: center;
  padding: 2rem 1rem;
}

.mensaje {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.mensaje span {
  color: #81591e;
  font-weight: bold;
}

.frase {
  font-size: 1.2rem;
  color: #000000;
  margin-bottom: 2rem;
}

.carrusel {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
}

.imagen {
  width: 280px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: opacity 0.5s ease-in-out;
}
</style>
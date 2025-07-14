<template>
  <div class="contenido">
    <center>
      <h2 class="animate__animated animate__rubberBand titulo-css">¿Qué es JavaScript?</h2>
            <img src="@/assets/js.jpg" alt="JavaScript" class="imagen" />

      

      <p class="resumen">
        JavaScript (JS) es un lenguaje de programación dinámico utilizado para crear contenido interactivo en páginas web. 
        Fue desarrollado por Brendan Eich en 1995 y es esencial junto con HTML y CSS.
       JavaScript te permite implementar funciones
        complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas,
         muestra oportunas actualizaciones de contenido, 
       mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc.,
       
       <br /><br /> 
        <strong>Características:</strong><br />
        • Funciona en cliente (navegador) y servidor (Node.js).<br />
        • Responde a eventos como clics o movimientos.<br />
        • Interpretado, sin necesidad de compilación.<br />
        • Tipado dinámico y multiplataforma.<br /><br />
        <strong>¿Qué puedes crear?</strong><br />
        • Menús, sliders, formularios, servidores, apps móviles y hasta juegos 3D.<br /><br />
        <strong>Conceptos clave:</strong><br />
        • <em>Variables:</em> let, const, var.<br />
        • <em>Funciones:</em> definiciones y llamadas.<br />
        • <em>Condicionales:</em> if, else.<br />
        • <em>Bucles:</em> for, while.<br />
        • <em>DOM:</em> manipulación de elementos con JS.<br /><br />
        <strong>Frameworks populares:</strong> Vue.js, React, Angular, Node.js.<br />
        <strong>Ventajas:</strong> Fácil, rápido, gran comunidad.<br />
        <strong>Desventajas:</strong> Seguridad y diferencias entre navegadores.
      </p>

      <!-- VIDEO INSERTADO -->
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4LqcbfibXj8"
          title="Video de JavaScript"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

    </center>

    <ul>
      <!-- Ejemplos prácticos -->
      <li>1. Mostrar un mensaje al hacer clic</li>
      <div class="codigo">
        document.getElementById("btnSaludo").addEventListener("click", () => {
          alert("¡Hola!");
        });
      </div>

      <li>2. Cambiar imagen automáticamente como carrusel</li>
      <div class="codigo">
        let imagenes = ["img1.jpg", "img2.jpg", "img3.jpg"];
        let indice = 0;
        setInterval(() => {
          document.getElementById("miImagen").src = imagenes[indice];
          indice = (indice + 1) % imagenes.length;
        }, 3000);
      </div>

      <li>3. Ocultar elemento al hacer clic</li>
      <div class="codigo">
        document.getElementById("btnOcultar").addEventListener("click", () => {
          document.getElementById("miDiv").style.display = "none";
        });
      </div>

      <li>4. Validar si un valor es numérico</li>
      <div class="codigo">
        let valor = prompt("Ingresa un número:");
        if (isNaN(valor)) {
          alert("Eso no parece ser un número válido");
        }
      </div>

      <li>5. Recorrer una lista y mostrar elementos</li>
      <div class="codigo">
        let lista = ["Vue.js", "CSS", "JavaScript"];
        lista.forEach((item, i) => console.log(`${i + 1}. ${item}`));
      </div>

      <li>6. Capturar errores</li>
      <div class="codigo">
        try {
          let resultado = 10 / 0;
          if (!isFinite(resultado)) throw "División no válida";
        } catch (error) {
          console.warn("Error detectado:", error);
        }
      </div>

      <li>HTML necesario para que funcione</li>
      <div class="codigo">
        &lt;button id="btnSaludo"&gt;Saludar&lt;/button&gt;<br />
        &lt;button id="btnOcultar"&gt;Ocultar sección&lt;/button&gt;<br />
        &lt;img id="miImagen" src="img1.jpg"&gt;<br />
        &lt;div id="miDiv"&gt;Esto se puede ocultar&lt;/div&gt;
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'JavaScriptView'
}
</script>

<style scoped>
.contenido {
  padding: 2rem;
  background: #f9f8fc;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(90, 24, 154, 0.2);
}

/* Imagen principal */
.imagen {
  width: 200px;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

/* Encabezado */
.titulo-css {
  color: #5A189A;
  font-weight: bold;
  font-size: 1.8rem;
}

/* Párrafo introductorio */
.intro {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1rem;
}

/* Resumen estilizado */
.resumen {
  text-align: left;
  background-color: #f0ebf8;
  border: 1px solid #d4c3f1;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 8px;
  max-width: 8000px;
  line-height: 1.6;
  color: #3b3b3b;
}

/* Video embebido */
.video {
  margin: 1.5rem auto;
  text-align: center;
}

/* Lista general */
li {
  color: #5A189A;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

/* Bloques de código */
.codigo {
  background-color: #e0dbdb;
  border-left: 4px solid #5A189A;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  color: #000000;
  white-space: pre-wrap;
  word-wrap: break-word;
  border-radius: 5px;
}
</style>
<template>
  <div class="container py-5">
    <h2 class="text-center titulo-css mb-4">Introducción a CSS</h2>

    <p class="descripcion mx-auto text-center mb-5">
      CSS (Cascading Style Sheets), creado en 1994 por Håkon Wium Lie y Bert Bos, es el lenguaje que define el estilo visual de las páginas web. Permite transformar contenido simple en experiencias atractivas y dinámicas, facilitando diseño, mantenimiento y adaptabilidad.
    </p>

    <section class="mb-5">
      <h3 class="subtitulo mb-4 text-center">¿Para qué sirve CSS?</h3>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card shadow-sm h-100 border-primary">
            <div class="card-body text-center">
              <i class="bi bi-palette-fill display-4 text-primary mb-3"></i>
              <h5 class="card-title">Control de Estilos</h5>
              <p class="card-text">Define colores, fuentes, tamaños y estilos visuales para todos los elementos HTML.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm h-100 border-success">
            <div class="card-body text-center">
              <i class="bi bi-layout-text-window-reverse display-4 text-success mb-3"></i>
              <h5 class="card-title">Diseño Adaptable</h5>
              <p class="card-text">Crea layouts responsivos con Flexbox, Grid y media queries para dispositivos móviles y pantallas grandes.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm h-100 border-warning">
            <div class="card-body text-center">
              <i class="bi bi-lightning-fill display-4 text-warning mb-3"></i>
              <h5 class="card-title">Animaciones y Transiciones</h5>
              <p class="card-text">Agrega movimientos suaves y efectos visuales para mejorar la experiencia del usuario.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-5">
      <h3 class="subtitulo mb-4 text-center">Beneficios y ventajas</h3>
      <ul class="lista-css mx-auto">
        <li><strong>Separación clara:</strong> Contenido y diseño separados para mejor mantenimiento.</li>
        <li><strong>Reutilización:</strong> Aplica estilos consistentes y evita código repetido.</li>
        <li><strong>Compatibilidad:</strong> Funciona en todos los navegadores modernos.</li>
        <li><strong>Velocidad:</strong> Carga rápida y mejora el rendimiento web.</li>
        <li><strong>Creatividad:</strong> Posibilita diseños modernos y llamativos.</li>
      </ul>
    </section>

    <section>
      <h3 class="subtitulo mb-4 text-center">Ejemplos prácticos visuales</h3>

      <!-- Ejemplo 1 -->
      <div class="row align-items-center mb-4">
        <div class="col-md-6">
          <pre class="codigo">
&lt;p style="color: #af3bcf; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"&gt;
  Texto azul violeta.
&lt;/p&gt;
          </pre>
        </div>
        <div class="col-md-6 text-center">
          <p style="color: #af3bcf; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 1.3rem;">
            Texto azul violeta.
          </p>
        </div>
      </div>

      <!-- Ejemplo 2 -->
      <div class="row align-items-center mb-4">
        <div class="col-md-6">
          <pre class="codigo">
&lt;div style="background: #e7f1ff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);"&gt;
  Caja con fondo azul suave y sombra.
&lt;/div&gt;
          </pre>
        </div>
        <div class="col-md-6 text-center">
          <div
            style="background: #e7f1ff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);"
          >
            Caja con fondo azul suave y sombra.
          </div>
        </div>
      </div>

      <!-- Ejemplo 3 -->
      <div class="row align-items-center mb-4">
        <div class="col-md-6">
          <pre class="codigo">
&lt;div style="display: flex; justify-content: space-between; background: #f8f9fa; padding: 15px; border-radius: 12px;"&gt;
  &lt;div style="background: #0d6efd; width: 50px; height: 50px; border-radius: 8px;"&gt;&lt;/div&gt;
  &lt;div style="background: #6610f2; width: 50px; height: 50px; border-radius: 8px;"&gt;&lt;/div&gt;
  &lt;div style="background: #0dcaf0; width: 50px; height: 50px; border-radius: 8px;"&gt;&lt;/div&gt;
&lt;/div&gt;
          </pre>
        </div>
        <div class="col-md-6 text-center">
          <div
            style="display: flex; justify-content: space-between; background: #f8f9fa; padding: 15px; border-radius: 12px;"
          >
            <div style="background: #0d6efd; width: 50px; height: 50px; border-radius: 8px;"></div>
            <div style="background: #6610f2; width: 50px; height: 50px; border-radius: 8px;"></div>
            <div style="background: #0dcaf0; width: 50px; height: 50px; border-radius: 8px;"></div>
          </div>
        </div>
      </div>

      <!-- ejemplo numero 4 -->
      <div class="row align-items-center mb-4">
        <div class="col-md-6">
          <pre class="codigo">
&lt;button class="btn-animar"&gt;Pasa el mouse aquí&lt;/button&gt;

&lt;style&gt;
.btn-animar {
  background: #198754;
  color: white;
  padding: 14px 32px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.btn-animar:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(25, 135, 84, 0.6);
}
&lt;/style&gt;
          </pre>
        </div>
        <div class="col-md-6 text-center">
          <button class="btn-animar">Pasa el mouse aquí</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CSSView",
};
</script>

<style scoped>
/* Tipografía y colores */
.titulo-css {
  font-size: 2.5rem;
  font-weight: 900;
  color: #222;
  text-shadow: 1px 1px 5px #ddc9c9;
  margin-bottom: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.descripcion {
  font-size: 1.2rem;
  color: #000000;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.7;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.subtitulo {
  font-size: 1.7rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.lista-css {
  max-width: 700px;
  margin: 0 auto 3rem;
  color: #000000;
  font-size: 1.1rem;
  line-height: 1.6;
  list-style-type: disc;
  padding-left: 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Caja de código */
.codigo {
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #433737;
  padding: 1.2rem 1rem;
  font-family: 'Source Code Pro', monospace, monospace;
  font-size: 0.95rem;
  white-space: pre-wrap;
  user-select: all;
  box-shadow: 0 3px 8px rgba(0,0,0,0.07);
}

/* Botón animado */
.btn-animar {
  background: #198754;
  color: white;
  padding: 14px 32px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.btn-animar:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(25, 135, 84, 0.6);
}
</style>

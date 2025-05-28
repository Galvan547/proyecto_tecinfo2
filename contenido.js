function mostrarPasos() {
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = `
    <div class="card">
      <h2>📝 Paso 1: Recolectar papel usado</h2>
      <p>Junta hojas, cuadernos viejos, servilletas limpias o folletos que ya no necesites.</p>
    </div>
    <div class="card">
      <h2>💧 Paso 2: Cortar y remojar</h2>
      <p>Corta el papel en trozos pequeños y colócalos en un recipiente con agua por varias horas.</p>
    </div>
    <div class="card">
      <h2>🌀 Paso 3: Licuar la mezcla</h2>
      <p>Licúa el papel remojado hasta obtener una pasta espesa.</p>
    </div>
    <div class="card">
      <h2>🧺 Paso 4: Colar y extender</h2>
      <p>Usa un colador o malla para retirar el exceso de agua. Extiende la pasta sobre una tela o malla.</p>
    </div>
    <div class="card">
      <h2>🌞 Paso 5: Dejar secar</h2>
      <p>Deja secar al sol por un día. ¡Tu papel reciclado estará listo para usarse!</p>
    </div>
  `;
}

function mostrarConsejos() {
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = `
    <div class="card">
      <h2>✨ Consejo 1:</h2>
      <p>Agrega flores secas o colorante natural a la mezcla para darle un toque especial a tu papel reciclado.</p>
    </div>
    <div class="card">
      <h2>🧼 Consejo 2:</h2>
      <p>Usa sólo papel sin plastificado ni cinta adhesiva para obtener mejores resultados.</p>
    </div>
    <div class="card">
      <h2>♻️ Consejo 3:</h2>
      <p>Recicla en familia o en grupo. ¡Es una excelente actividad educativa y ecológica!</p>
    </div>
  `;
}

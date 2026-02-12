function evaluarTest() {
  let puntos = 0;
  
  // Contar checkboxes marcados
  if (document.getElementById("p1").checked) puntos++;
  if (document.getElementById("p2").checked) puntos++;
  if (document.getElementById("p3").checked) puntos++;
  if (document.getElementById("p4").checked) puntos++;
  
  const resultado = document.getElementById("resultado");
  
  // Mostrar resultado según puntos
  if (puntos === 0) {
    resultado.innerHTML = "✅ <strong>¡EXCELENTE!</strong><br>Tus hábitos parecen responsables. Sigue así manteniendo límites claros.";
    resultado.style.background = "#d4edda";
    resultado.style.color = "#155724";
  } else if (puntos === 1) {
    resultado.innerHTML = "⚠️ <strong>ATENCIÓN</strong><br>Hay una señal de riesgo. Establece límites estrictos de tiempo y dinero.";
    resultado.style.background = "#fff3cd";
    resultado.style.color = "#856404";
  } else if (puntos <= 3) {
    resultado.innerHTML = "🚨 <strong>RIESGO ALTO</strong><br>Varias señales de alarma. Considera parar y buscar ayuda profesional.";
    resultado.style.background = "#f8d7da";
    resultado.style.color = "#721c24";
  } else {
    resultado.innerHTML = "🆘 <strong>URGENTE</strong><br>Es muy probable que tengas un problema serio con el juego. Busca ayuda YA.";
    resultado.style.background = "#f5c6cb";
    resultado.style.color = "#721c24";
  }
}

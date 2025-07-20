const boton = document.getElementById("btn-animado");

boton.addEventListener("click", (e) => {
  e.preventDefault(); // Evitar redirección inmediata

  // Crear círculo ripple
  const circle = document.createElement("span");
  circle.classList.add("ripple");

  // Calcular posición del click relativa al botón
  const rect = boton.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  circle.style.width = circle.style.height = size + "px";

  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  circle.style.left = x + "px";
  circle.style.top = y + "px";

  boton.appendChild(circle);

  // Quitar el círculo después de la animación
  circle.addEventListener("animationend", () => {
    circle.remove();
  });

  // Agregar la clase para pulso
  boton.classList.add("clicked");

  // Quitar clase después de la animación pulse (600ms)
  setTimeout(() => {
    boton.classList.remove("clicked");
    // Redirigir a la página
    window.location.href = boton.href;
  }, 600);
});

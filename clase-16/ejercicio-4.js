document.querySelector("#ejercicio-4").addEventListener("submit", function(e) {
  e.preventDefault(); // evita que la página se recargue

  // 1️⃣ Obtener los valores de los inputs
  const listaStr = document.querySelector("#lista").value;
  const palabra = document.querySelector("#palabra").value;

  // 2️⃣ Convertir la cadena en un array
  const listaArray = listaStr.split(",").map(p => p.trim()); // quitar espacios

  // 3️⃣ Función para verificar si la palabra está en la lista
  function estaEnLista(lista, palabraBuscada) {
    return lista.includes(palabraBuscada);
  }

  // 4️⃣ Mostrar el resultado
  if (estaEnLista(listaArray, palabra)) {
    document.querySelector("#mensaje-ejercicio-4").innerHTML = `<p>¡La palabra sí está en la lista!</p>`;
  } else {
    document.querySelector("#mensaje-ejercicio-4").innerHTML = `<p>La palabra no está en la lista.</p>`;
  }
});

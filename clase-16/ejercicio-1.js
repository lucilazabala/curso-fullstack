document.querySelector("#ejercicio-1").addEventListener("submit", function (e) {
  e.preventDefault();

  const num = Number(document.querySelector("#num1").value);

  let tabla = "";
  let i = 1;

  while (i <= 10) {
    tabla = tabla + num + " × " + i + " = " + num * i + "<br>";
    i++;
  }

  document.querySelector("#mensaje-ejercicio-1").innerHTML = tabla;
});

// mientras i sea menor o igual a 10, agrega a tabla una línea que diga num × i = resultado y luego suma 1 a i para pasar al siguiente número
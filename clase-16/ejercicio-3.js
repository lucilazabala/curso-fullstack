document.querySelector("#ejercicio-3").addEventListener("submit", function (e) {
  e.preventDefault();

  const numeros = [];

  for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
  }

  let pares = 0;
  let impares = 0;

  function esPar(num) {
    return num % 2 === 0;
  }

  for (let i = 0; i < numeros.length; i++) {
    if (esPar(numeros[i])) {
      pares++;
    } else {
      impares++;
    }
  }

  document.querySelector("#mensaje-ejercicio-3").innerHTML = `
    <p>Números generados: ${numeros.join(", ")}</p>
    <p>Pares: ${pares}</p>
    <p>Impares: ${impares}</p>
  `;
});

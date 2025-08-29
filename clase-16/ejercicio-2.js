document.querySelector("#ejercicio-2").addEventListener("submit", function (e) {
  e.preventDefault();

  function suma(a, b, c, d, e) {
    return a + b + c + d + e;
  }

  const num1 = Number(document.querySelector("#num1").value);
  const num2 = Number(document.querySelector("#num2").value);
  const num3 = Number(document.querySelector("#num3").value);
  const num4 = Number(document.querySelector("#num4").value);
  const num5 = Number(document.querySelector("#num5").value);

  const total = suma(num1, num2, num3, num4, num5);

  document.querySelector("#mensaje-ejercicio-2").innerHTML = `
    <p>La suma total de los números es: ${total}</p>
  `;
});

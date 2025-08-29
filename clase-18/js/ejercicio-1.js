const contador = document.querySelector("#contador");
const btnIncrementar = document.querySelector("#incrementar");
const btnDecrementar = document.querySelector("#decrementar");
const btnReiniciar = document.querySelector("#reiniciar");

let valor = 0;

function handleContador() {
  contador.textContent = valor;

  if (valor >= 0) contador.style.color = "green";
  else contador.style.color = "red";
}

btnIncrementar.addEventListener("click", e => {
  valor++;
  handleContador();
});

btnDecrementar.addEventListener("click", e => {
  valor--;
  handleContador();
});

btnReiniciar.addEventListener("click", e => {
  valor = 0;
  handleContador();
});

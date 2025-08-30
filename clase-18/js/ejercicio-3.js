const form = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const contra = document.querySelector("#contra");
const contraConfirmar = document.querySelector("#contraConfirmar");
const btnEnviar = document.querySelector("#btnEnviar");

const errorNombre = document.querySelector("#errorNombre");
const errorEmail = document.querySelector("#errorEmail");
const errorContra = document.querySelector("#errorContra");
const errorContraConfirmar = document.querySelector("#errorContraConfirmar");

const expresiones = {
  nombreE: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // letras y espacios, mínimo 3 caracteres
  emailE: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // formato de email
  contraE: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, // min 8 caracteres, mayúsculas, minúsculas y números
};

// Evitar que se recargue la pagina
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Nombre
nombre.addEventListener("input", () => {
  if (!expresiones.nombreE.test(nombre.value)) {
    errorNombre.textContent = "El nombre debe tener mínimo 3 caracteres y no puede contener números";
  } else {
    errorNombre.textContent = "";
  }
  activarBtn();
});

// Email
email.addEventListener("input", () => {
  if (!expresiones.emailE.test(email.value)) {
    errorEmail.textContent = "Ingresa un email válido";
  } else {
    errorEmail.textContent = "";
  }
  activarBtn();
});

// Contraseña
contra.addEventListener("input", () => {
  if (!expresiones.contraE.test(contra.value)) {
    errorContra.textContent = "La contraseña debe tener mínimo 8 caracteres, incluir mayúsculas, minúsculas, números y no puede contener simbolos";
  } else {
    errorContra.textContent = "";
  }
  activarBtn();
});

// Confirmar contraseña
contraConfirmar.addEventListener("input", () => {
  if (contraConfirmar.value !== contra.value) {
    errorContraConfirmar.textContent = "Las contraseñas no coinciden";
  } else {
    errorContraConfirmar.textContent = "";
  }

  activarBtn();
});

// Activar boton
function activarBtn() {
  const nombreValido = expresiones.nombreE.test(nombre.value);
  const emailValido = expresiones.emailE.test(email.value);
  const contraValido = expresiones.contraE.test(contra.value);
  const confirmValido = contra.value === contraConfirmar.value && contraConfirmar.value !== "";

  btnEnviar.disabled = !(nombreValido && emailValido && contraValido && confirmValido);
}


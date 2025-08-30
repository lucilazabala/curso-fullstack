// Array vacio para los filtros
const filtrarTareas = [];

// Filtro botones
const btnTodas = document.querySelector("#btnTodas");
const btnCompletadas = document.querySelector("#btnCompletadas");
const btnPendientes = document.querySelector("#btnPendientes");

// Mostrar todas las tareas
btnTodas.addEventListener("click", function () {
  filtrarTareas.forEach(function (filtrar) {
    filtrar.li.style.display = "list-item";
  });
});

// Mostrar solo tareas completadas
btnCompletadas.addEventListener("click", function () {
  filtrarTareas.forEach(function (filtrar) {
    if (filtrar.completada) {
      filtrar.li.style.display = "list-item"; // muestra la tarea en el filtro
    } else {
      filtrar.li.style.display = "none"; // oculta la tarea en el filtro
    }
  });
});

// Mostrar solo tareas pendientes
btnPendientes.addEventListener("click", function () {
  filtrarTareas.forEach(function (filtrar) {
    if (!filtrar.completada) { // ! niega/invierte el valor
      filtrar.li.style.display = "list-item"; // muestra la tarea en el filtro
    } else {
      filtrar.li.style.display = "none"; // oculta la tarea en el filtro
    }
  });
});

// Conectar el boton agregar con la funcion
document.querySelector("#btnAgregar").addEventListener("click", btnAgregar);

function btnAgregar() {
  // Obtener el valor
  const nuevaTarea = document.querySelector("#nuevaTarea").value;

  // Validar que el valor no este vacio
  if (nuevaTarea === "") {
    alert("Por favor, ingrese una tarea");
    return;
  }

  // Crear tarea en la lista (li)
  const agregarNuevaTarea = document.createElement("li");
  agregarNuevaTarea.textContent = nuevaTarea;

  // Filtros
  const filtrarTarea = {
    texto: nuevaTarea, // se pone nuevaTarea porque es el valor que obtenemos del "const nuevaTarea = document.querySelector("#nuevaTarea").value;"
    completada: false, // se pone false porque la tarea al principio no esta completada
    li: agregarNuevaTarea, // se pone para que funcione los filtros de los botones
  }
  filtrarTareas.push(filtrarTarea); // se hace un push para cargar las tareas

  // Click para marcar/desmarcar tarea como completada
  agregarNuevaTarea.onclick = function () {
    if (agregarNuevaTarea.classList.contains("completada")) {
      agregarNuevaTarea.classList.remove("completada");
      filtrarTarea.completada = false;
    } else {
      agregarNuevaTarea.classList.add("completada");
      filtrarTarea.completada = true;
    }
  };

  // Crear boton eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "x";
  btnEliminar.classList.add("btnEliminar"); // agregar la clase
  btnEliminar.onclick = function () {
    agregarNuevaTarea.remove();
  };

  // Agregar boton eliminar al elemento de la lista (las tareas)
  agregarNuevaTarea.appendChild(btnEliminar);

  // Agregar la tarea a la lista
  document.querySelector("#listaTareas").appendChild(agregarNuevaTarea);

  // Limpiar el input
  document.querySelector("#nuevaTarea").value = "";
}

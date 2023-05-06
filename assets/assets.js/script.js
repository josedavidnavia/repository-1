const form = document.getElementById("form");
const usuariosDiv = document.getElementById("usuarios");

// Obtener lista de usuarios del LocalStorage
const obtenerUsuarios = () =>
  JSON.parse(localStorage.getItem("usuarios")|| []) ;

// Almacenar un usuario en el LocalStorage
const almacenarUsuario = (nombre, apellido) => {
  const usuarios = obtenerUsuarios();
  usuarios.push({ nombre, apellido });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
};

// Renderizar la lista de usuarios
const renderizarUsuarios = () => {
  const usuarios = obtenerUsuarios();
  usuariosDiv.innerHTML = "";
  usuarios.forEach((usuario) => {
    const usuarioDiv = document.createElement("div");
    usuarioDiv.textContent = `${usuario.nombre} ${usuario.apellido}`;
    usuariosDiv.appendChild(usuarioDiv);
  });
};

// Agregar evento submit al formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  almacenarUsuario(nombre, apellido);
  renderizarUsuarios();
  form.reset();
});

// Renderizar usuarios al cargar la página
renderizarUsuarios();
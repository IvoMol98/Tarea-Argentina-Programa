//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!


const titulo = document.querySelector('#mi-titulo');
const nombreUsuario = document.querySelector('#nombre-usuario');
const segundoNombreUsuario = document.querySelector('#nombre2-usuario');
const apellidoUsuario = document.querySelector('#apellido-usuario');
const boton = document.querySelector("#bienvenida-usuario");

boton.addEventListener('click', function() {
    event.preventDefault();
    titulo.textContent = `Bienvenido ${nombreUsuario.value} ${segundoNombreUsuario.value} ${apellidoUsuario.value}!`;
  });
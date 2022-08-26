"use strict";

/*
1- El usuario tiene que llenar los campos para registrarse y sumarse al array. 
Cuando envie el form, deben guardarse los datos en el storage.

Si el usuario ya esta registrado y esta guardado en el storage, tiene que aparecer sus datos. Y sino, tiene que aparecer el formulario.

*/

class Usuario {
  constructor(nombre, apellido, user, envio, categoriaFav) {
    this.nombre = nombre.toUpperCase();
    this.apellido = apellido.toUpperCase();
    this.user = user.toUpperCase();
    this.envio = envio.toLowerCase();
    this.categoriaFav = categoriaFav.toLowerCase();
  }
}

let usuarios = [];

let inputNombre = document.getElementById("inputNombre");
let inputApellido = document.getElementById("inputApellido");
let inputUser = document.getElementById("inputUser");
let preferenciaEnvio = document.getElementById("preferenciaEnvio");
let categoriaFavorita = document.getElementById("categoriaFav");
let botonEnviar = document.getElementById("btn-enviar");
let bienvenidaUser = document.getElementById("bienvenidaUser");

botonEnviar.addEventListener("click", dibujarBienvenida);

function dibujarBienvenida() {
  let nombreIngresado = inputNombre.value.toUpperCase();
  let apellidoIngresado = inputApellido.value.toUpperCase();
  let userIngresado = inputUser.value.toUpperCase();
  let envioIngresado = preferenciaEnvio.value.toLowerCase();
  let categoriaIngresada = categoriaFavorita.value.toLowerCase();

  let nuevoUsuario = new Usuario(
    nombreIngresado,
    apellidoIngresado,
    userIngresado,
    envioIngresado,
    categoriaIngresada
  );

  usuarios.push(nuevoUsuario);
  console.log(usuarios);

  //Guardar el array en el storage
  const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
  };
  guardarLocal("usuarioNuevo", JSON.stringify(usuarios));

  for (let usuario of usuarios) {
    usuarios = JSON.parse(localStorage.getItem("usuarioNuevo"));
    console.log(usuarios);
    bienvenidaUser.innerHTML += `
                <p> Hola ${usuario.nombre} ${usuario.apellido} ! </p>
                <p> Tu nombre de usuario es ${usuario.user} </p>
                <p> Tu preferencia de envío es ${usuario.envio} </p>
                <p> Tu categoria preferida es ${usuario.categoriaFav} </p>
            `;
    let containerForm = document.getElementById("container-form-user").remove();
  }
}





//usuarios=JSON.parse(localStorage.getItem("usuarioNuevo"));

// for (let usuario of usuarios) {
//   if (localStorage.getItem("usuarioNuevo") != null) {
//     usuarios = JSON.parse(localStorage.getItem("usuarioNuevo"));
//     bienvenidaUser.innerHTML = `
//         <p> Hola ${usuario.nombre} ${usuario.apellido} ! </p>
//         <p> Tu nombre de usuario es ${usuario.user} </p>
//         <p> Tu preferencia de envío es ${usuario.envio} </p>
//         <p> Tu categoria preferida es ${usuario.categoriaFav} </p>
//     `;
//     let containerForm = document.getElementById("container-form-user").remove();
//   } else {
//     bienvenidaUser.innerHTML = `
//         <p> Bienvenido! Llena el siguiente formulario para ser parte de esta comunidad! </p>
//     `;
//   }
// }



/* Desestructuracion para pedir el nombre del objeto usuario */ 
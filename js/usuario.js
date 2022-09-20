"use strict";

/*
1- El usuario tiene que llenar los campos para registrarse y sumarse al array. 
Cuando envie el form, deben guardarse los datos en el storage.

Si el usuario ya esta registrado y esta guardado en el storage, tiene que aparecer sus datos. Y sino, tiene que aparecer el formulario.

Arreglar boton enviar 

Agregar confeti cuando se registra

*/

let carrito=JSON.parse(localStorage.getItem("carrito")) || [] ;

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

  if((inputNombre.value=="")||(inputApellido.value=="")||(inputUser.value=="")){
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Completa todos los campos'
    })
    e.preventDefault();
  }

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

  //Guardar el array en el storage
  const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
  };
  guardarLocal("usuarioNuevo", JSON.stringify(usuarios));

  Swal.fire({
    title: 'Excelente!',
    text: 'Ya formas parte de esta comunidad!',
    icon: 'success',
    confirmButtonText:'Genial'
  });

  for (let usuario of usuarios) {

    usuarios = JSON.parse(localStorage.getItem("usuarioNuevo"));

    bienvenidaUser.innerHTML = `
            <p> Hola <strong> ${usuario.nombre} ${usuario.apellido} </strong>! </p>
            <p> Tu nombre de usuario es <strong> ${usuario.user} </strong></p>
            <p> Tu preferencia de envío es <strong> ${usuario.envio} </strong></p>
            <p> Tu categoria preferida es <strong> ${usuario.categoriaFav} </strong></p>
            `;

    let containerForm = document.getElementById("container-form-user").remove();
  }

}


if (localStorage.getItem("usuarioNuevo") != null) {
  usuarios = JSON.parse(localStorage.getItem("usuarioNuevo"));
  
  for (let usuario of usuarios) {
    bienvenidaUser.innerHTML = `
        <p> Hola <strong> ${usuario.nombre} ${usuario.apellido} </strong>! </p>
        <p> Tu nombre de usuario es <strong> ${usuario.user} </strong></p>
        <p> Tu preferencia de envío es <strong> ${usuario.envio} </strong></p>
        <p> Tu categoria preferida es <strong> ${usuario.categoriaFav} </strong></p>
    `;
    let containerForm = document.getElementById("container-form-user").remove();
  }
} else {
  bienvenidaUser.innerHTML = `
      <p> Bienvenido! Llena el siguiente formulario para ser parte de esta comunidad! </p>
  `;
}


inputNombre.oninput=()=>{
  if(isNaN(inputNombre.value)){
      inputNombre.style.color="";
  }else{
      inputNombre.style.color="red";
  }
}

inputApellido.oninput=()=>{
  if(isNaN(inputApellido.value)){
      inputApellido.style.color="";
  }else{
      inputApellido.style.color="red";
  }
}


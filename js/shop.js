"use strict";

//Objeto de elementos que se agregan al carrito
class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

//Formato de $moneda
const estandarMoneda = Intl.NumberFormat('es-AR');

//Arrays de productos por categorias
let aros=[];
let anillos=[];
let pulseras=[];
let collares=[];
let dijes=[];
let alhajeros=[];

//Array de objetos del carrito
let carrito=[];

//Agarro cada contenedor de productos por categoria y me posiciono en el primer elemento
const contenedorAros=document.getElementById("contenedor-aros").getElementsByClassName("row");
const rowContenedorAros=contenedorAros[0];

const contenedorAnillos=document.getElementById("contenedor-anillos").getElementsByClassName("row");
const rowContenedorAnillos=contenedorAnillos[0];

const contenedorPulseras=document.getElementById("contenedor-pulseras").getElementsByClassName("row");
const rowContenedorPulseras=contenedorPulseras[0];

const contenedorCollares=document.getElementById("contenedor-collares").getElementsByClassName("row");
const rowContenedorCollares=contenedorCollares[0];

const contenedorDijes=document.getElementById("contenedor-dijes").getElementsByClassName("row");
const rowContenedorDijes=contenedorDijes[0];

const contenedorAlhajeros=document.getElementById("contenedor-alhajeros").getElementsByClassName("row");
const rowContenedorAlhajeros=contenedorAlhajeros[0];

const containerBusqueda=document.getElementById("container-busqueda").getElementsByClassName("row");
const rowContenedorEncontrado=containerBusqueda[0];

const tituloResultados=document.getElementById("tituloResultados");

//Tomo el contenedor donde se va a dibujar el cuerpo de la tabla del carrito
const contenedorCarritoCompras = document.querySelector("#items");
//Tomo el footer del carrito para poner como vacio o poner el $total
const contenedorFooterCarrito = document.querySelector("#footer");


await cargarAros().then(a=>{aros=a;
    dibujarCatalogoAros();
});

await cargarAnillos().then(a=>{anillos=a;
    dibujarCatalogoAnillos();
});

await cargarPulseras().then(a=>{pulseras=a;
    dibujarCatalogoPulseras();
});

await cargarCollares().then(a=>{collares=a;
    dibujarCatalogoCollares();
});

await cargarDijes().then(a=>{dijes=a;
    dibujarCatalogoDijes();
});

await cargarAlhajeros().then(a=>{alhajeros=a;
    dibujarCatalogoAlhajeros();
});

//Array de todos los productos juntos
let productos=aros.concat(anillos,pulseras,collares,dijes,alhajeros);

//Traer los productos de la api local
async function cargarAros(){
    //aros.push(new Producto("Aros","Pasantes","AR-0001","Aros pasante corona","Plata 925"," ",1480,5,'../assets/img/shop/aros_corona.jpg'));
    const URLJSONAROS="../js/aros.json";
    const resp=await fetch(URLJSONAROS);
    const data=await resp.json();
    return data;
}

async function cargarAnillos(){
    const URLJSONANILLOS="../js/anillos.json";
    const resp=await fetch(URLJSONANILLOS);
    const data=await resp.json();
    return data;
}

async function cargarPulseras(){
    const URLJSONPULSERAS="../js/pulseras.json";
    const resp= await fetch(URLJSONPULSERAS);
    const data=await resp.json();
    return data;
}

async function cargarCollares(){
    const URLJSONCOLLARES="../js/collares.json";
    const resp=await fetch(URLJSONCOLLARES);
    const data=await resp.json();
    return data;
}

async function cargarDijes(){
    const URLJSONDIJES="../js/dijes.json";
    const resp=await fetch (URLJSONDIJES);
    const data= await resp.json();
    return data;
}

async function cargarAlhajeros(){
    const URLJSONALHAJEROS="../js/alhajeros.json";
    const resp=await fetch(URLJSONALHAJEROS);
    const data=await resp.json();
    return data;
}

// ***** Crear cards
function crearCard(producto){
    //Creo un boton
    let botonAgregar = document.createElement("button");
    botonAgregar.className="filter__ul-li-a";
    botonAgregar.style.border="none";
    botonAgregar.innerHTML="Agregar al carrito";

    //CARD BODY: creo un div para los datos
    let cuerpoCarta = document.createElement("figcaption");
    cuerpoCarta.className="shop-categorias__article-figure-figcaption";
    cuerpoCarta.innerHTML=`
        <p>${producto.nombre}</p>
        <p>$ ${estandarMoneda.format(producto.precio)}</p>
        <p>Stock: ${producto.stock}</p>
    `;
    cuerpoCarta.append(botonAgregar);

    //Imagen
    let imagen=document.createElement("img");
    imagen.src=producto.foto;
    imagen.className="shop-categorias__article-figure-img";
    imagen.alt=producto.nombre;

    //figure
    let figure=document.createElement("figure");
    figure.className="shop-categorias__article-figure";
    figure.append(imagen);
    figure.append(cuerpoCarta);

    //CARD
    let carta=document.createElement("article");
    carta.className="shop-categorias__article";
    carta.append(figure);

    //CONTENEDOR de la card
    let contenedorCarta=document.createElement("div");
    contenedorCarta.className="col-sm-6 col-md-4 col-xl-3";
    contenedorCarta.append(carta);

    //agregar productos al carrito
    botonAgregar.onclick = () => {
        //Cambia el texto del boton al agregar producto
        botonAgregar.innerHTML="Agregado al carrito <i class='fa-solid fa-heart-circle-check'></i>";
        
        //Agrego/instancio un nuevo elemento en el objeto Elemento carrito
        let elementoCarrito = new ElementoCarrito (producto, 1);

        //Creo una variable. Busca si ya existe dentro del array carrito ese id 
        let elementoExistente=carrito.find((elemento) => elemento.producto.id == producto.id);
        //si esta el elemento existente..
        if(elementoExistente){
            //sumar uno
            elementoExistente.cantidad+=1;
        }else{
            //si no esta, pushearlo al carrito
            carrito.push(elementoCarrito);
        }
        dibujarCarrito();
    }
    
    return contenedorCarta;
}




// ***** Mostrar cards
function dibujarCatalogoAros(){
    rowContenedorAros.innerHTML="";
    aros.forEach(
        (producto) =>{
            let contenedorCarta=crearCard(producto);
            rowContenedorAros.append(contenedorCarta);
            
        }
    );    
}

function dibujarCatalogoAnillos(){
    rowContenedorAnillos.innerHTML="";
    anillos.forEach(
        (producto) =>{
            let contenedorCarta=crearCard(producto);
            rowContenedorAnillos.append(contenedorCarta);
        }
    );
}

function dibujarCatalogoPulseras(){
    rowContenedorPulseras.innerHTML="";
    pulseras.forEach(
        (producto) =>{
            let contenedorCarta=crearCard(producto);
            rowContenedorPulseras.append(contenedorCarta);
        }
    );
}

function dibujarCatalogoCollares(){
    rowContenedorCollares.innerHTML="";
    collares.forEach(
        (producto) =>{
            let contenedorCarta=crearCard(producto);
            rowContenedorCollares.append(contenedorCarta);
        }
    );
}

function dibujarCatalogoDijes(){
    rowContenedorDijes.innerHTML="";
    dijes.forEach(
        (producto) =>{
            let contenedorCarta=crearCard(producto);
            rowContenedorDijes.append(contenedorCarta);
        }
    );
}

function dibujarCatalogoAlhajeros(){
    rowContenedorAlhajeros.innerHTML="";
    alhajeros.forEach(
        (producto) =>{
            let contenedorCarta=crearCard(producto);
            rowContenedorAlhajeros.append(contenedorCarta);
        }
    );
}



// ***** Estructura carrito (Tabla con productos y footer)
function dibujarCarrito(){

    let precioTotal=0;

    //Contenedor donde se va a dibujar la tabla, la pongo en 0/vacia
    contenedorCarritoCompras.innerHTML = "";

    //Recorro el array carrito
    carrito.forEach(
        (elemento) => {
            
            //Creo un elemento tr al que lo guardo en una variable
            let renglonesCarrito= document.createElement("tr");
            
            //En esa variable le escribo:
            renglonesCarrito.innerHTML=`

                <td>${elemento.producto.id}</td>

                <td><img class="imagenCarrito" src=" ${elemento.producto.foto}" width="150px"></td>

                <td>${elemento.producto.nombre}</td>
                
                <td><input id="cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="${elemento.producto.stock}" step="1" /> </td>

                <td>$ ${estandarMoneda.format(elemento.producto.precio)}</td>

                <td class="precioColor">$ ${estandarMoneda.format(elemento.producto.precio*elemento.cantidad)}</td>

                <td><button id ="eliminar-producto-${elemento.producto.id}" type="button" class="btn btn-danger"> <i class="fa-solid fa-trash"></i></button> </td>
            `; 

            //Le agrego al contenedor, los renglones, la tabla
            contenedorCarritoCompras.append(renglonesCarrito);

            //Al precio inicializado en 0, le sumo el precio del producto por la cantidad que esta en input
            precioTotal+=elemento.producto.precio*elemento.cantidad;

            //Creo una variable para agarrar al input de cantidad
            let cantidadProductos = document.getElementById(`cantidad-producto-${elemento.producto.id}`);
            
            //Llamo a la variable para crear un evento que escucha la cantidad ingresada por el usuario
            cantidadProductos.addEventListener("change", (e) => {
                //creo una variable que guarda el dato (el valor) del input
                let nuevaCantidad = e.target.value;
                //El input "cantidad" ahora tiene un nuevo valor que es la variable nuevaCantidad
                elemento.cantidad = nuevaCantidad;
                dibujarCarrito();
            });

            //Creo una variable para agarrar el boton eliminar
            let botonBorrarProducto = document.getElementById(`eliminar-producto-${elemento.producto.id}`);

            //Al boton eliminar le creo un evento
            botonBorrarProducto.addEventListener("click", (e)=>{
                //La accion de borrar esta guardada en una funcion
                removerProductoCarrito(elemento);
                dibujarCarrito();
            });

        }
   
    );

    //Crear un elemento con ENVIO
    let precioEnvio=500;
    let renglonEnvio=document.createElement("tr");  

    if(precioTotal>=5000){
        precioEnvio=0;
        renglonEnvio.innerHTML+=`
        <th scope="row" colspan="6" class="precioColor">Envio gratis!!</th>
    `;
    }else{
        renglonEnvio.innerHTML+=`
        <th scope="row" colspan="6">Envio <span class="precioColor">$${precioEnvio}</span></th>
    `;
    }

    contenedorCarritoCompras.append(renglonEnvio);

    //Si la longitud del array carrito es 0, o sea que esta vacio...
    if (carrito.length==0){
        contenedorFooterCarrito.innerHTML=`
        <th scope="row" colspan="6">Carrito vacío</th>
        `;
    }else{
        contenedorFooterCarrito.innerHTML=`
        <th scope="row" colspan="6">Total de la compra:<span class="precioColor"> $ ${estandarMoneda.format(precioTotal+precioEnvio)}</span></th>
        `;
    }
    
    //Guardar el carrito en el storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}




// ***** Recuperar carrito abandonado
//Pregunto al entrar al html, si hay algo en el storage que se llame carrito y si hay algo lo tengo que asignar a la estructura
//Al array de carrito, le asigno el JSON, lo vuelvo a convertir a array de objeto y se lo asigno a carrito

// *********** Operador condicional ||
carrito=JSON.parse(localStorage.getItem("carrito")) || [] ;
dibujarCarrito();
// if(localStorage.getItem("carrito")!=null){
//     carrito=JSON.parse(localStorage.getItem("carrito"));
//     dibujarCarrito();
// }

// ***** Eliminar un producto del carrito
function removerProductoCarrito(elementoAEliminar){
    //Filtro (deja pasar) solo los elementos que tengan el ID diferente al ID del producto que quiero eliminar. Este nuevo listado me lo guarda en este const
    const elementosAMantener = carrito.filter((elemento) => elementoAEliminar.producto.id != elemento.producto.id);
    //Elimino todos los productos del carrito, lo vacio
    carrito.length=0;
    //Pusheo al carrito, el nuevo listado de los elementos a mantener
    elementosAMantener.forEach((elemento) => carrito.push(elemento));
}






// *********** Buscador de productos 

//array
let encontrado=[];
let encontradoHtml=[];

//tomo elementos del DOM
let inputSearch = document.getElementById("inputSearch");
let btnLupa=document.getElementById("btn-lupa");

//llamo al input para crear un evento que escuche lo que ponga el usuario
inputSearch.addEventListener("change",buscarProducto);

//funcion que busca
function buscarProducto(){  
    let textoIngresado=inputSearch.value.toUpperCase();
    encontrado=productos.filter((producto)=>producto.nombre.includes(textoIngresado));
    dibujarEncontrado(encontrado);
}

function buscarProductoHtml(textoIngresadoHtml){  
    encontradoHtml=productos.filter((producto)=>producto.nombre.includes(encontradoHtml));
    dibujarEncontradoHtml(encontradoHtml);
}

if(sessionStorage.getItem("encontrado")!=null){
    encontradoHtml=JSON.parse(sessionStorage.getItem("encontrado"));
    buscarProductoHtml(encontradoHtml);
}

//Mostrar encontrado
function dibujarEncontrado(producto){  
    rowContenedorEncontrado.innerHTML="";
    encontrado.forEach(
        (producto) => {       
            let contenedorCarta=crearCard(producto);
            rowContenedorEncontrado.append(contenedorCarta);        
        }
    );

    // *********** Ternario
    (encontrado!=0) ? tituloResultados.innerText=`Resultados`:tituloResultados.innerText=`Lo sentimos, no existe ese producto. ¡Probá con otro nombre!`;
}

//Mostrar encontrado
function dibujarEncontradoHtml(producto){   
    rowContenedorEncontrado.innerHTML="";
    encontradoHtml.forEach(
        (producto) => {       
            let contenedorCarta=crearCard(producto);
            rowContenedorEncontrado.append(contenedorCarta);        
        }
    );

    // *********** Ternario
    (encontradoHtml!=0) ? tituloResultados.innerText=`Resultados`:tituloResultados.innerText=`Lo sentimos, no existe ese producto. ¡Probá con otro nombre!`;
   
    sessionStorage.removeItem("encontrado");
}
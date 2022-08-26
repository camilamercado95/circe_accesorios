/*
Filtrar un producto por su nombre y aparezcan sugerencias, si no hay coincidencia que aparezca "No existe"
Eliminar cantidad de stock y que aparezca "sin stock" cuando llegue a 0 en vez de "agregar al carrito"

Dibujar carrito en el html de carrito
Elegir metodos de pago en el html de carrito
Calcular valor final del carrito en función de descuentos
Cambiar estetica del carrito
*/

"use strict";

//Funcion de descuento en efectivo 5%
function descuento(valor){
    return valor*0.95;
}

//Objeto de todos los productos
class Producto{
    constructor(tipo,categoria,id,nombre,material,tamanio,precio, stock, foto){
        this.tipo=tipo;
        this.categoria=categoria;
        this.id=id;
        this.nombre=nombre.toUpperCase();
        this.material=material;
        this.tamanio=tamanio;
        this.precio=Number(precio);
        this.stock=parseInt(stock);
        this.foto=foto;
    }
}

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
const aros=[];
const anillos=[];
const pulseras=[];
const collares=[];
const dijes=[];
const alhajeros=[];
//Funciones para agregar productos al objeto Productos
cargarAros();
cargarAnillos();
cargarPulseras();
cargarCollares();
cargarDijes();
cargarAlhajeros();

//Array de todos los productos juntos
const productos=aros.concat(anillos,pulseras,collares,dijes,alhajeros);

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


//Funciones que dibujan las cards en el DOM
dibujarCatalogoAros();
dibujarCatalogoAnillos();
dibujarCatalogoPulseras();
dibujarCatalogoCollares();
dibujarCatalogoDijes();
dibujarCatalogoAlhajeros();

//Pushear los productos al objeto Productos
function cargarAros(){
    aros.push(new Producto("Aros","Pasantes","AR-0001","Aros pasante corona","Plata 925"," ",1480,5,'../assets/img/shop/aros_corona.jpg'));
    aros.push(new Producto("Aros","Pasantes","AR-0002","Aros nube y rayo","Plata 925","6mm",3270,10,"../assets/img/shop/aros_nubeyrayo.jpg"));
    aros.push(new Producto("Aros","Trepadores","AR-0003","Trepadores cristal","Plata 925","16mm",4680,2,"../assets/img/shop/trepadores_cristal.jpg"));
    aros.push(new Producto("Aros","Argollas","AR-0004","Argollas rayo multicolor","Plata 925","14mm",3280,1,"../assets/img/shop/aros_rayo_multicolor.jpg"));
    aros.push(new Producto("Aros","Argollas","AR-0005","Argollas florcitas","Plata 925","12mm",1790,10,"../assets/img/shop/argollas_florcitas.jpg"));
    aros.push(new Producto("Aros","Argollas","AR-0006","Argolla destello","Plata 925","14mm",3090,2,"../assets/img/shop/argollas_destello.jpg"));
    aros.push(new Producto("Aros","Bidu","AR-0007","Cuff cruzado","Plata 925"," ",700,15,"../assets/img/shop/aros_cuff_cruzado.jpg"));
    aros.push(new Producto("Aros","Bidu","AR-0008","Solitario corazon cubic","Plata 925"," ",1480,5,"../assets/img/shop/solitario_corazoncubic.jpg"));
}

function cargarAnillos(){
    anillos.push(new Producto("Anillos","Comun","AN-0001","Anillo cruzado","Plata 925","18",2100,3,"../assets/img/shop/anillos_cruzado.jpg"));
    anillos.push(new Producto("Anillos","Comun","AN-0002","Anillo corona","Plata 925","19",2500,1,"../assets/img/shop/anillo_corona.jpg"));
    anillos.push(new Producto("Anillos","Comun","AN-0003","Anillo luna","Plata 925","17",2410,3,"../assets/img/shop/anillo_luna.jpg"));
    anillos.push(new Producto("Anillos","Comun","AN-0004","Anillo tiara","Plata 925","18",4620,5,"../assets/img/shop/anillo_tiara.jpg"));
}

function cargarPulseras(){
    pulseras.push(new Producto("Pulseras","Comun","P-0001","Pulsera corazones","Plata 925","18cm",3050,2,"../assets/img/shop/pulsera_corazones.jpg"));
    pulseras.push(new Producto("Pulseras","Elastizada","P-0002","Pulsera elastizada","Plata 925"," ",4220,1,"../assets/img/shop/pulsera_elastizada.jpg"));
    pulseras.push(new Producto("Pulseras","Comun","P-0003","Pulsera espejo","Plata 925","18cm",2470,1,"../assets/img/shop/pulsera_espejo.jpg"));
    pulseras.push(new Producto("Pulseras","Comun","P-0004","Pulsera tourbillon","Plata 925","18cm",2450,1,"../assets/img/shop/pulsera_tourbillon.jpg"));
    
}

function cargarCollares(){
    collares.push(new Producto("Collares","Comun","C-0001","Collar lunas","Plata 925","40-45cm",5870,1,"../assets/img/shop/collar_lunas.jpg"));
    collares.push(new Producto("Collares","Comun","C-0002","Collar corazones","Plata 925","40-45cm",4600,1,"../assets/img/shop/collar_corazones.jpg"));
    collares.push(new Producto("Collares","Comun","C-0003","Collar destello y luna","Plata 925","40-45cm",6430,5,"../assets/img/shop/collar_doble_destello_luna.jpg"));
    collares.push(new Producto("Collares","Comun","C-0004","Collar infinito","Plata 925","40-45cm",4520,3,"../assets/img/shop/collar_infinito.jpg"));
}

function cargarDijes(){
    dijes.push(new Producto("Dijes","Comun","D-0001","Dije rayo","Plata 925"," ",2760,2,"../assets/img/shop/dije-rayo.jpg"));
    dijes.push(new Producto("Dijes","Comun","D-0002","Dije corazon","Plata 925"," ",1750,2,"../assets/img/shop/dije_corazon_cubic.jpg"));
    dijes.push(new Producto("Dijes","Comun","D-0003","Dije cruz","Plata 925"," ",1520,3,"../assets/img/shop/dije_cruz_grande.jpg"));
    dijes.push(new Producto("Dijes","Comun","D-0004","Dije iniciales","Plata 925"," ",2040,10,"../assets/img/shop/dije_iniciales.jpg"));
}

function cargarAlhajeros(){
    alhajeros.push(new Producto("Alhajeros","Comun","A-0001","Alhajero rosa"," "," ",6880,2,"../assets/img/shop/alhajero.jpg"));
    alhajeros.push(new Producto("Alhajeros","Comun","A-0002","Alhajero natural"," "," ",6880,2,"../assets/img/shop/alhajero_natural.jpg"));
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

                <td>${elemento.producto.nombre}</td>
                
                <td><input id="cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="${elemento.producto.stock}" step="1" /> </td>

                <td>$ ${estandarMoneda.format(elemento.producto.precio)}</td>

                <td>$ ${estandarMoneda.format(elemento.producto.precio*elemento.cantidad)}</td>

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

            /*
            //Tomo el boton "iniciar compra" y aplico evento para eliminar stock
            let iniciarCompra=document.getElementById("iniciarCompra");
            iniciarCompra.addEventListener("click", (e)=>{
                //let nuevoStock=elemento.producto.stock;
                //nuevoStock-=elemento.producto.cantidad;
                //restarStock(elemento.producto.stock,elemento.producto.cantidad);
            });
            */
        }
   
    );

    //Crear un elemento con ENVIO
    let precioEnvio=500;
    let renglonEnvio=document.createElement("tr");  

    if(precioTotal>=5000){
        precioEnvio=0;
        renglonEnvio.innerHTML+=`
        <td>Envio gratis!!</td>
    `;
    }else{
        renglonEnvio.innerHTML+=`
        <td>Envio $ ${precioEnvio}</td>
    `;
    }

    contenedorCarritoCompras.append(renglonEnvio);

    //Si la longitud del array carrito es 0, o sea que esta vacio...
    if (carrito.length==0){
        contenedorFooterCarrito.innerHTML=`
        <th scope="row" colspan="5">Carrito vacío</th>
        `;
    }else{
        contenedorFooterCarrito.innerHTML=`
        <th scope="row" colspan="5">Total de la compra: $ ${estandarMoneda.format(precioTotal+precioEnvio)}</th>
        `;
    }

    

    
    
    //Guardar el carrito en el storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// ***** Eliminar un producto del carrito
function removerProductoCarrito(elementoAEliminar){
    //Filtro (deja pasar) solo los elementos que tengan el ID diferente al ID del producto que quiero eliminar. Este nuevo listado me lo guarda en este const
    const elementosAMantener = carrito.filter((elemento) => elementoAEliminar.producto.id != elemento.producto.id);
    //Elimino todos los productos del carrito, lo vacio
    carrito.length=0;
    //Pusheo al carrito, el nuevo listado de los elementos a mantener
    elementosAMantener.forEach((elemento) => carrito.push(elemento));
}

// ***** Restar stock (NO ANDA)
/*
// Para restar stock: tomar la cantidad de stock que tengo en el objeto y el valor del input del carrito y restarselo 
function restarStock(stock,cantidad){
    return stock-cantidad; 
}
*/



// ***** Recuperar carrito abandonado
//Pregunto al entrar al html, si hay algo en el storage que se llame carrito y si hay algo lo tengo que asignar a la estructura
//A el array de carrito, le asigno el JSON, lo vuelvo a convertir a array de objeto y se lo asigno a carrito

// *********** Operador condicional ||
carrito=JSON.parse(localStorage.getItem("carrito")) || [] ;
dibujarCarrito();




// *********** Buscador de productos 
let encontrado=[];

let inputSearch = document.getElementById("inputSearch");
let btnLupa=document.getElementById("btn-lupa");
//funcion que busca
function buscarProducto(){
    let textoIngresado=inputSearch.value.toUpperCase();
    encontrado=productos.filter((producto)=>producto.nombre.includes(textoIngresado));
    dibujarEncontrado(encontrado);
}
//llamo al input para crear un evento que escuche lo que ponga el usuario
inputSearch.addEventListener("change",buscarProducto);

//Mostrar encontrado
//Funcion de dibuja
function dibujarEncontrado(producto){   
    encontrado.forEach(
        (producto) => {
            console.log(encontrado);
            let contenedorCarta=crearCard(producto);
            rowContenedorEncontrado.append(contenedorCarta);        
        }
        );
        // *********** Ternario
        (encontrado!=0) ? tituloResultados.innerText=`Resultados`:tituloResultados.innerText=`Lo sentimos, no existe ese producto. ¡Probá con otro nombre!`;
}
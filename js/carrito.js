// Dibujar carrito en el html de carrito
// Elegir metodos de pago en el html de carrito
// Calcular valor final del carrito en función de descuentos y cuotas

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
let aros=[];
let anillos=[];
let pulseras=[];
let collares=[];
let dijes=[];
let alhajeros=[];

//Funciones para agregar productos al objeto Productos


//Array de todos los productos juntos
let productos=aros.concat(anillos,pulseras,collares,dijes,alhajeros);

//Array de objetos del carrito
let carrito=[];


//Tomo el contenedor donde se va a dibujar el cuerpo de la tabla del carrito
const contenedorCarritoCompras = document.querySelector("#items");
//Tomo el footer del carrito para poner como vacio o poner el $total
const contenedorFooterCarrito = document.querySelector("#footer");


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

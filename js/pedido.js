"use strict";

//Formato de $moneda
const estandarMoneda = Intl.NumberFormat('es-AR');
let precioTotal=0;
let precioEnvio=500;
let carrito=JSON.parse(localStorage.getItem("carrito")) || [] ;

//Tomo el contenedor donde se va a dibujar el cuerpo de la tabla del carrito
const itemsPedidoDom=document.getElementById("itemsPedido");

//Tomo el footer del carrito para poner como vacio o poner el $total
const footerPedidoDom = document.getElementById("footerPedido");

const totalDescuento = document.getElementById("totalDescuento");

const unaCuota=document.getElementById("unaCuota");
const tresCuotas=document.getElementById("tresCuotas");

const btnFinalizar=document.getElementById("btnFinalizar");

if(localStorage.getItem("carrito")!=null){

    //Contenedor donde se va a dibujar la tabla, la pongo en 0/vacia
    itemsPedidoDom.innerHTML = "";

    //Recorro el array carrito
    carrito.forEach(
        (elemento) => {
            
            //Creo un elemento tr al que lo guardo en una variable
            let renglonesCarritoDom = document.createElement("tr");
            
            //En esa variable le escribo:
            renglonesCarritoDom.innerHTML=`

                <td>${elemento.producto.id}</td>

                <td><img class="imagenCarrito" src=" ${elemento.producto.foto}" width="150px"></td>

                <td>${elemento.producto.nombre}</td>

                <td><p id="cantidad-producto-${elemento.producto.id}">  ${elemento.cantidad}  <p/> </td>

                <td>$ ${estandarMoneda.format(elemento.producto.precio)}</td>

                <td><span class="precioColor"> $ ${estandarMoneda.format(elemento.producto.precio*elemento.cantidad)} </span></td>

                
            `; 

            //Le agrego al contenedor, los renglones, la tabla
            itemsPedidoDom.append(renglonesCarritoDom);

            //Al precio inicializado en 0, le sumo el precio del producto por la cantidad que esta en input
            precioTotal+=elemento.producto.precio*elemento.cantidad;            

        }
   
    );

    //Crear un elemento con ENVIO
    let renglonEnvio=document.createElement("tr");  

    if(precioTotal>=5000){
        precioEnvio=0;
        renglonEnvio.innerHTML+=`
        <th scope="row" colspan="6" class="precioColor">¡¡Envio gratis!!</th>
    `;
    }else{
        renglonEnvio.innerHTML+=`
        <th scope="row" colspan="6">Envio <span class="precioColor"> $${precioEnvio} </span></th>
    `;
    }

    itemsPedidoDom.append(renglonEnvio);

    //Si la longitud del array carrito es 0, o sea que esta vacio...
    if (carrito.length==0){
        footerPedidoDom.innerHTML=`
        <th scope="row" colspan="6">Carrito vacío</th>
        `;
    }else{
        footerPedidoDom.innerHTML=`
        <th scope="row" colspan="6">Total de la compra: <span class="precioColor"> $ ${estandarMoneda.format(precioTotal+precioEnvio)} </span> </th>
        `;
    }
}

totalDescuento.innerHTML=`
    <span class="precioColor"> $ ${precioTotal*0.95} </span>
`;

unaCuota.innerText=`
    1 cuota de $${precioTotal}
`;

tresCuotas.innerText=`
    3 cuotas sin interés de $${(precioTotal/3).toFixed(2)}
`;

btnFinalizar.addEventListener("click",finalizarCompra);

function finalizarCompra(){
    Swal.fire(
        'Compra realizada con éxito',
        '¡Muchas gracias por elegirnos!',
        'success'
    );
    let cuerpoPedido=document.getElementById("cuerpoPedido").remove();
    localStorage.removeItem("carrito");
    let graciasPedido=document.getElementById("graciasPedido");
    graciasPedido.innerHTML=`
     <h2 class="graciasPedido">¡Gracias por tu compra!</h2>
     <a class="filter__ul-li-a" href="shop.html">Seguir comprando</a>
    `;
}
/*
1 - Mostrar los productos con sus precios
2 - Filtrar un producto por su nombre
3 - Agregar productos a un carrito
4 - Mostrar el carrito
5 - Elegir metodos de pago
6 - Calcular valor final del carrito en función de descuentos
*/

function descuento(valor){
    return valor*0.95;
}

class Producto{
    constructor(tipo,categoria,id,nombre,material,tamanio,precio, cantidad, foto){
        this.tipo=tipo;
        this.categoria=categoria;
        this.id=id;
        this.nombre=nombre;
        this.material=material;
        this.tamanio=tamanio;
        this.precio=Number(precio);
        this.cantidad=parseInt(cantidad);
        this.foto=foto;
    }
}

class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

const estandarMoneda = Intl.NumberFormat('es-AR');

const aros=[];
const anillos=[];
const pulseras=[];
const collares=[];
const dijes=[];
const alhajeros=[];

const productos=aros.concat(anillos,pulseras,collares,dijes,alhajeros);

const carrito=[];

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

const contenedorCarritoCompras = document.querySelector("#items");
const contenedorFooterCarrito = document.querySelector("#footer");

cargarAros();
cargarAnillos();
cargarPulseras();
cargarCollares();
cargarDijes();
cargarAlhajeros();
dibujarCatalogoAros();
dibujarCatalogoAnillos();
dibujarCatalogoPulseras();
dibujarCatalogoCollares();
dibujarCatalogoDijes();
dibujarCatalogoAlhajeros();

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

//crear cards
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
    `;
    cuerpoCarta.append(botonAgregar);

    //Imagen
    let imagen=document.createElement("img");
    imagen.src=producto.foto;
    imagen.className="shop-categorias__article-figure-img";
    //imagen.style.width="100%";
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
        alert(`Agregaste "${producto.nombre}" al carrito`);

        let elementoCarrito = new ElementoCarrito (producto, 1);

        let elementoExistente=carrito.find((elemento) => elemento.producto.id == producto.id);
        if(elementoExistente){
            elementoExistente.cantidad+=1;
        }else{
            carrito.push(elementoCarrito);
        }


        dibujarCarrito();
    }

    return contenedorCarta;
}

//mostrar cards
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



//Mostrar productos con precios en consola
productos.forEach(producto=>console.log(producto.nombre+" $"+producto.precio));


//Estructura carrito
function dibujarCarrito(){
    let precioTotal=0;
    contenedorCarritoCompras.innerHTML = "";
    //let renglonesCarrito = "";

    carrito.forEach(
        (elemento) => {
            let renglonesCarrito= document.createElement("tr");

            renglonesCarrito.innerHTML=`

                <td>${elemento.producto.id}</td>
                <td>${elemento.producto.nombre}</td>
                <td><input id="cantidad-producto-${elemento.producto.id}" 
                type="number" value="${elemento.cantidad}" min="1" max="100" step="1" /> </td>
                <td>$ ${estandarMoneda.format(elemento.producto.precio)}</td>
                <td>$ ${estandarMoneda.format(elemento.producto.precio*elemento.cantidad)}</td>
                <td><button id ="eliminar-producto-${elemento.producto.id}" type="button" class="btn btn-danger"> <i class="fa-solid fa-trash"></i></button> </td>

            `; 

            contenedorCarritoCompras.append(renglonesCarrito);
            precioTotal+=elemento.producto.precio*elemento.cantidad;

            let cantidadProductos = document.getElementById(`cantidad-producto-${elemento.producto.id}`);
            
            cantidadProductos.addEventListener("change", (e) => {
                let nuevaCantidad = e.target.value;
                elemento.cantidad = nuevaCantidad;
                dibujarCarrito();
            });

            let botonBorrarProducto = document.getElementById(`eliminar-producto-${elemento.producto.id}`);

            botonBorrarProducto.addEventListener("click", (e)=>{
                removerProductoCarrito(elemento);
                dibujarCarrito();
            });
        }
    );
 
    if (carrito.length==0){
        contenedorFooterCarrito.innerHTML=`
        <th scope="row" colspan="5">Carrito vacío</th>
        `;
    }else{
        contenedorFooterCarrito.innerHTML=`
        <th scope="row" colspan="5">Total de la compra: $ ${estandarMoneda.format(precioTotal)}</th>
        `;
    }
    
}

function removerProductoCarrito(elementoAEliminar){
    const elementosAMantener = carrito.filter((elemento) => elementoAEliminar.producto.id != elemento.producto.id);
    carrito.length=0;
    elementosAMantener.forEach((elemento) => carrito.push(elemento));
}


/*
//Filtrar productos x nombre
function buscarProducto(productos,nombre){
    const encontrado = productos.filter((el)=>el.nombre.includes(nombre));
    return encontrado;
}

let nombreIngresado=prompt("Buscar un producto para ver sus detalles. ESC para salir").toUpperCase();
while(nombreIngresado!="ESC"){
    const nombreEncontrado=buscarProducto(productos,nombreIngresado);
    console.table(nombreEncontrado);
    nombreIngresado=prompt("Buscar un producto para ver sus detalles. ESC para salir").toUpperCase();
}

//Calcular valor final de un producto seleccionado en función de descuentos
let medioPago=Number(prompt("¿Como queres pagar? \n 1- Efectivo o transferencia (5% OFF) \n 2-Tarjeta de crédito"));

if(medioPago==1){
    alert("El total con el 5% de descuento es: "+descuento(precioTotal));
}else if(medioPago==2){
    let cuotas=parseInt(prompt("¿En cuantas cuotas sin interés queres hacerlo? \n ¿1 o 3?"));
    if(cuotas==1){
        alert("El total es: "+precioTotal);
    }else if(cuotas==3){
        alert("El total es: "+precioTotal+"\nY por mes debes pagar: "+(precioTotal/3));
    }else{
        cuotas=parseInt(prompt("Error. Escribí 1 para una cuota o 3 para 3 cuotas"));
    }
}else{
    medioPago=parseInt(prompt("Error. Escribí 1 para efectivo o transferencia o 2 para tarjeta de crédito"));
}
*/
/*
1 - Mostrar los productos con sus precios
2 - Filtrar un producto por su nombre
3 - Agregar productos a un carrito
4 - Mostrar el carrito
5 - Elegir metodos de pago
6 - Calcular valor final del carrito en función de descuentos
*/

let precioTotal=0;

function descuento(valor){
    return valor*0.95;
}

class Producto{
    constructor(tipo,categoria,nombre,material,tamanio,precio, cantidad, foto){
        this.tipo=tipo;
        this.categoria=categoria;
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
    aros.push(new Producto("Aros","Pasantes","Aros pasante corona","Plata 925"," ",1480,5,'../assets/img/shop/aros_corona.jpg'));
    aros.push(new Producto("Aros","Pasantes","Aros nube y rayo","Plata 925","6mm",3270,10,"../assets/img/shop/aros_nubeyrayo.jpg"));
    aros.push(new Producto("Aros","Trepadores","Trepadores cristal","Plata 925","16mm",4680,2,"../assets/img/shop/trepadores_cristal.jpg"));
    aros.push(new Producto("Aros","Argollas","Argollas rayo multicolor","Plata 925","14mm",3280,1,"../assets/img/shop/aros_rayo_multicolor.jpg"));
    aros.push(new Producto("Aros","Argollas","Argollas florcitas","Plata 925","12mm",1790,10,"../assets/img/shop/argollas_florcitas.jpg"));
    aros.push(new Producto("Aros","Argollas","Argolla destello","Plata 925","14mm",3090,2,"../assets/img/shop/argollas_destello.jpg"));
    aros.push(new Producto("Aros","Bidu","Cuff cruzado","Plata 925"," ",700,15,"../assets/img/shop/aros_cuff_cruzado.jpg"));
    aros.push(new Producto("Aros","Bidu","Solitario corazon cubic","Plata 925"," ",1480,5,"../assets/img/shop/solitario_corazoncubic.jpg"));
}

function cargarAnillos(){
    anillos.push(new Producto("Anillos","Comun","Anillo cruzado","Plata 925","18",2100,3,"../assets/img/shop/anillos_cruzado.jpg"));
    anillos.push(new Producto("Anillos","Comun","Anillo corona","Plata 925","19",2500,1,"../assets/img/shop/anillo_corona.jpg"));
    anillos.push(new Producto("Anillos","Comun","Anillo luna","Plata 925","17",2410,3,"../assets/img/shop/anillo_luna.jpg"));
    anillos.push(new Producto("Anillos","Comun","Anillo tiara","Plata 925","18",4620,5,"../assets/img/shop/anillo_tiara.jpg"));
}

function cargarPulseras(){
    pulseras.push(new Producto("Pulseras","Comun","Pulsera corazones","Plata 925","18cm",3050,2,"../assets/img/shop/pulsera_corazones.jpg"));
    pulseras.push(new Producto("Pulseras","Elastizada","Pulsera elastizada","Plata 925"," ",4220,1,"../assets/img/shop/pulsera_elastizada.jpg"));
    pulseras.push(new Producto("Pulseras","Comun","Pulsera espejo","Plata 925","18cm",2470,1,"../assets/img/shop/pulsera_espejo.jpg"));
    pulseras.push(new Producto("Pulseras","Comun","Pulsera tourbillon","Plata 925","18cm",2450,1,"../assets/img/shop/pulsera_tourbillon.jpg"));
    
}

function cargarCollares(){
    collares.push(new Producto("Collares","Comun","Collar lunas","Plata 925","40-45cm",5870,1,"../assets/img/shop/collar_lunas.jpg"));
    collares.push(new Producto("Collares","Comun","Collar corazones","Plata 925","40-45cm",4600,1,"../assets/img/shop/collar_corazones.jpg"));
    collares.push(new Producto("Collares","Comun","Collar destello y luna","Plata 925","40-45cm",6430,5,"../assets/img/shop/collar_doble_destello_luna.jpg"));
    collares.push(new Producto("Collares","Comun","Collar infinito","Plata 925","40-45cm",4520,3,"../assets/img/shop/collar_infinito.jpg"));
}

function cargarDijes(){
    dijes.push(new Producto("Dijes","Comun","Dije rayo","Plata 925"," ",2760,2,"../assets/img/shop/dije-rayo.jpg"));
    dijes.push(new Producto("Dijes","Comun","Dije corazon","Plata 925"," ",1750,2,"../assets/img/shop/dije_corazon_cubic.jpg"));
    dijes.push(new Producto("Dijes","Comun","Dije cruz","Plata 925"," ",1520,3,"../assets/img/shop/dije_cruz_grande.jpg"));
    dijes.push(new Producto("Dijes","Comun","Dije iniciales","Plata 925"," ",2040,10,"../assets/img/shop/dije_iniciales.jpg"));
}

function cargarAlhajeros(){
    alhajeros.push(new Producto("Alhajeros","Comun","Alhajero rosa"," "," ",6880,2,"../assets/img/shop/alhajero.jpg"));
    alhajeros.push(new Producto("Alhajeros","Comun","Alhajero natural"," "," ",6880,2,"../assets/img/shop/alhajero_natural.jpg"));
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
        <p>$ ${producto.precio}</p>
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
        carrito.push(elementoCarrito);

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
    let renglonesCarrito = "";

    carrito.forEach(
        (elemento) => {
            renglonesCarrito+=`
            <tr>
                <td>${elemento.producto.tipo}</td>
                <td>${elemento.producto.nombre}</td>
                <td>${elemento.cantidad}</td>
                <td>$ ${elemento.producto.precio}</td>
                </tr>
            `; 
        }
    );
 
    contenedorCarritoCompras.innerHTML=renglonesCarrito;

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
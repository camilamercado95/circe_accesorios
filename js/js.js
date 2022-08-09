//Calcular costo total de productos seleccionados por el usuario.

let precioTotal=0;

function descuento(valor){
    return valor*0.95;
}

class Producto{
    constructor(tipo,categoria,nombre,material,tamanio,precio){
        this.tipo=tipo;
        this.categoria=categoria;
        this.nombre=nombre.toUpperCase();
        this.material=material;
        this.tamanio=tamanio;
        this.precio=Number(precio);
    }
}

const productos=[];
productos.push(new Producto("Aros","Pasantes","Aros pasante corona","Plata 925"," ",1480));
productos.push(new Producto("Aros","Pasantes","Aros nube y rayo","Plata 925","6mm",3270));
productos.push(new Producto("Aros","Trepadores","Trepadores cristal","Plata 925","16mm",4680));
productos.push(new Producto("Aros","Argollas","Argollas rayo multicolor","Plata 925","14mm",3280));
productos.push(new Producto("Aros","Argollas","Argollas florcitas","Plata 925","12mm",1790));
productos.push(new Producto("Aros","Argollas","Argolla destello","Plata 925","14mm",3090));
productos.push(new Producto("Aros","Bidu","Cuff cruzado","Plata 925"," ",700));
productos.push(new Producto("Aros","Bidu","Solitario corazon cubic","Plata 925"," ",1480));

const carrito=[];
let productoAgregado=prompt("Ingresa el nombre del producto que queres agregar al carrito. Cuando termines, escribe 'ESC'").toUpperCase();
while(productoAgregado!="ESC"){
    for(const producto of productos){
        if(producto.nombre==productoAgregado){
            precioTotal+=producto.precio;
            carrito.push(productoAgregado);
        }
    }
    productoAgregado=prompt("Ingresa el nombre del producto que queres agregar al carrito. Cuando termines, escribe 'ESC'").toUpperCase();
}
let aString=carrito.join("\n");
alert("Los productos de tu carrito son "+carrito.length+": \n"+carrito);
alert("El precio total de tu carrito es: "+precioTotal);


//Calcular valor final de un producto seleccionado en función de descuentos. 

let medioPago=Number(prompt("¿Como queres pagar? \n 1- Efectivo o transferencia (5% OFF) \n 2-Tarjeta de credito"));

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
    medioPago=parseInt(prompt("Error. Escribí 1 para efectivo o transferencia o 2 para tarjeta de credito"));
}
//Calcular costo total de productos seleccionados por el usuario. Que ingrese por prompt los nombres de los productos hasta tipear ESC)

const arosCorona=1480;
const argollasRayo=3280;
const cuffCruzado=700;
const trepadoresCristal=4680;
const argollasFlorcitas=1790;
const argollaDestello=3090;
const arosNubeRayo=3270;
const solitarioCorazonCubic=1480;

let precioTotal=0;

function descuento(valor){
    return valor*0.95;
}

/*
funcion flecha:
const descuento=valor=>valor*0.95;
*/

let entradaNombreProducto=prompt("Ingresa el nombre exacto del producto que quieras (SOLO AROS). Cuando termines, escribi 'ESC'");

while(entradaNombreProducto!="ESC"){
    switch(entradaNombreProducto){
        case "Aros pasante corona":
            precioTotal+=arosCorona;
        break;
        case "Argollas rayo multicolor":
            precioTotal+=argollasRayo;
        break;
        case "Cuff cruzado":
            precioTotal+=cuffCruzado;
        break;
        case "Trepadores cristal":
            precioTotal+=trepadoresCristal;
        break;
        case "Argollas florcitas":
            precioTotal+=argollasFlorcitas;
        break;
        case "Argolla destello":
            precioTotal+=argollaDestello;
        break;
        case "Aros nube y rayo":
            precioTotal+=arosNubeRayo;
        break;
        case "Solitario corazon cubic":
            precioTotal+=solitarioCorazonCubic;
        break;
        default:
            alert("Error al escribir el nombre");
        break;        
    }
    entradaNombreProducto=prompt("Ingresa el nombre exacto del producto que quieras (SOLO AROS). Cuando termines, escribi 'ESC'");
}
alert("El precio total es: "+precioTotal);

//Calcular valor final de un producto seleccionado en función de descuentos. 
//preguntar como paga, si paga con transferencia o al retirar en efectivo, 5% off. Si paga con tarjeta de credito, pregunar las cuotas y decirle el monto qe debe pagar por mes) 

let medioPago=parseInt(prompt("¿Como queres pagar? \n 1- Efectivo o transferencia (5% OFF) \n 2-Tarjeta de credito"));

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

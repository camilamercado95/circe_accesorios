// *********** Buscador de productos 

//array
let encontradoHtml=[];

//tomo elementos del DOM
let inputSearch = document.getElementById("inputSearch");
let btnLupa=document.getElementById("btn-lupa");

//funcion que busca
function buscarProducto(){  
    let textoIngresadoHtml=inputSearch.value.toUpperCase();
    encontradoHtml.push(textoIngresadoHtml);
    //Guardar el encontrado en el storage
    sessionStorage.setItem("encontrado", JSON.stringify(encontradoHtml));
    location.href=`pages/shop.html?`;
}

//llamo al input para crear un evento que escuche lo que ponga el usuario
inputSearch.addEventListener("change",buscarProducto);

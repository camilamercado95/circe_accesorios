let campoNum=document.getElementById("campoNum");
let campoNombre=document.getElementById("campoNombre");
let campoApellido=document.getElementById("campoApellido");
let campoTexto=document.getElementById("campoTexto");

campoNum.oninput=()=>{
    if(isNaN(campoNum.value)){
        campoNum.style.color="red";
    }
    else{
        campoNum.style.color="";
    }
}

campoNombre.oninput=()=>{
    if(isNaN(campoNombre.value)){
        campoNombre.style.color="";
    }else{
        campoNombre.style.color="red";
    }
}
campoApellido.oninput=()=>{
    if(isNaN(campoApellido.value)){
        campoApellido.style.color="";
    }else{
        campoApellido.style.color="red";
    }
}

campoTexto.oninput=()=>{
    if(campoTexto.value.length<10){
        campoTexto.style.color="red";
    }else{
        campoTexto.style.color="";
    }
}


function iniciarMap(){
    let coord = {lat: -34.670090, lng:-58.480322};
    let map=new google.maps.Map(document.getElementById("map"),{
        zoom:10,
        center:coord
    });
    let marker=new google.maps.Marker({
        position:coord,
        map:map
    });
}
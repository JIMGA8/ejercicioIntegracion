const valorTicket=200;
let estudiante=80;
let Trainee=50;
let junior=15;

let nombre=document.getElementById("nombre");
let apellido=document.getElementById("apellido");
let email=document.getElementById("email");
let cantidad=document.getElementById("cantidad");
let categoria=document.getElementById("categoria");
let resumen=document.getElementById("resumen");
let borrar=document.getElementById("borrar");


resumen.addEventListener("click", total);
function total()
{
    if(validar()){
        let totalPagar=(cantidad.value)*valorTicket;
        if(categoria.value=="sinCategoria")
        {
            totalPagar=totalPagar;
        }
        if (categoria.value=="estudiante")
        {
            totalPagar=((cantidad.value)*valorTicket)-((totalPagar*estudiante)/100);
        }
        if (categoria.value=="trainee")
        {
            totalPagar=((cantidad.value)*valorTicket)-((totalPagar*Trainee)/100);
        }
        if (categoria.value=="junior")
        {
            totalPagar=((cantidad.value)*valorTicket)-((totalPagar*junior)/100);
        }
        document.getElementById('totalPagar').innerHTML="Total a Pagar: $ " + totalPagar;
        
    }
    else{
        document.getElementById('totalPagar').innerHTML="Total a Pagar: $ ";
    }
}


borrar.addEventListener("click", limpar);
function limpar()
{
    document.getElementById('totalPagar').innerHTML="Total a Pagar: $ ";
    document.getElementById('nombreError').innerHTML="Ingrese su nombre";
    nombre.classList.add("is-invalid");
    document.getElementById('apellidoError').innerHTML="Ingrese su apellido";
    apellido.classList.add("is-invalid");
    document.getElementById('emailError').innerHTML="Ingrese su correo";
    email.classList.add("is-invalid");
    document.getElementById('cantidadError').innerHTML="Ingrese la cantidad de entradas";
    cantidad.classList.add("is-invalid");
    document.getElementById('categoriaError').innerHTML="selecione una Categoria";
    categoria.classList.add("is-invalid");
}


function validar(){
    let todoCorrecto= true;

    if(nombre.value.length <2 ){
        nombre.classList.add("is-invalid");
        document.getElementById('nombreError').innerHTML="Ingrese su nombre";
        todoCorrecto=false;
    }
    else{
        nombre.classList.remove("is-invalid");
        document.getElementById('nombreError').innerHTML="";
    }

    if(apellido.value.length <2){
        apellido.classList.add("is-invalid");
        document.getElementById('apellidoError').innerHTML="Ingrese su apellido";
        todoCorrecto=false;
    }
    else{
        apellido.classList.remove("is-invalid");
        document.getElementById('apellidoError').innerHTML="";
    }

    
    if (!/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(email.value)){
        email.classList.add("is-invalid");
        document.getElementById('emailError').innerHTML="Ingrese su correo";
        todoCorrecto=false;
    } 
    else {
        email.classList.remove("is-invalid");
        document.getElementById('emailError').innerHTML="";
    }

    if((cantidad.value <=0 || isNaN(cantidad.value))){
        console.log(apellido.value)
        cantidad.classList.add("is-invalid");
        document.getElementById('cantidadError').innerHTML="Ingrese la cantidad de entradas";
        todoCorrecto=false;
    }
    else{
        cantidad.classList.remove("is-invalid");
        document.getElementById('cantidadError').innerHTML="";
    }

    if(categoria.value=="Seleciona una Opcion"){
        categoria.classList.add("is-invalid");
        document.getElementById('categoriaError').innerHTML="selecione una Categoria";
        todoCorrecto=false;
    }
    else{
        categoria.classList.remove("is-invalid");
        document.getElementById('categoriaError').innerHTML="";
    }

    return todoCorrecto;
};


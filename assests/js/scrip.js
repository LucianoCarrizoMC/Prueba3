import { registrarP } from "./promesas";


window.addEventListener("load",()=>{
    document.getElementById("btncambioColor").addEventListener("click",cambiarcolor)
    document.getElementById("btnregistar").addEventListener("click",registrar)
   })
function registrar(){

    console.log("hola")
    let eNombre=document.getElementById("nombre");
    let eApellido=document.getElementById("apellido");
    let eRut=document.getElementById("rut");
    //let eGenero=document.getElementById("genero")
    let eEmail=document.getElementById("email")
    let eNumeroTarjeta=document.getElementById("numeroTarjeta")
    let eFechaExpiracion=document.getElementById("fechaExpiracion")
    let eCvv=document.getElementById("cvv")

    let vNombre=eNombre.value
    let vApellido=eApellido.value
    let vRut=eRut.value
    //let vGenero=eGenero.value
    let vEmail=eEmail.value
    let vNumeroTarjeta=eNumeroTarjeta.value
    let vFechaExpiracion=eFechaExpiracion.value
    let vCvv=eCvv.value

    let objeto={nombre:vNombre,
        apellido:vApellido,
        rut:vRut,
        //genero:vGenero,
        email:vEmail,
        numeroTarjeta:vNumeroTarjeta,
        fechaExpiracion:vFechaExpiracion,
        cvv:vCvv}

        registrarP(objeto).then(()=>{
        alert("se registró con exito");
    }).catch((r)=>{
        console.log(r)
    });
    
}

function cambiarcolor(){
    let element123 = document.getElementsByClassName("h1color");
    console.log("aloooo")

    for (let index = 0; index < element123.length; index++) {
        const clase112 = element123[index];
        clase112.classList.remove("h1color");
        clase112.classList.add("h2color");}
        for (let index = 0; index < element123.length; index++) {
            const clase112 = element123[index];
            clase112.classList.remove("h1color");
            clase112.classList.add("h2color");}

    }



    
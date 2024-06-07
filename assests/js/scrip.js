import { obtenerEstrellas,registrarE, editarE ,borrarE} from "./promesas.js";


window.addEventListener("load", () => {
    document.getElementById("btncambioColor").addEventListener("click", cambiarcolor);
    document.getElementById("btnregistar").addEventListener("click", registrar);
    document.getElementById("btnregistar").addEventListener("click", validar);
    document.getElementById("btnActualizar").addEventListener("click", actualizar);
    traerDatos();
    //document.getElementById("btnEliminar").addEventListener("click",eliminar)

    traerDatos()
   })
function registrar() {
    let eNombre = document.getElementById("nombre");
    let eTipoEstrella = document.getElementById("tipoEstrella");
    let eConstelación = document.getElementById("constelación");
    //let eTamanio = document.querySelector("input[name='Tamano']:checked");
    let eDescubridor = document.getElementById("descubridor");
    let eMagnitud = document.getElementById("magnitud");
    let eDistancia = document.getElementById("distancia");
    let eEdad = document.getElementById("edad");
    let eDescripcion = document.getElementById("descripcion");
    let eTemperatura = document.getElementById("temperatura");

    let radios = document.getElementsByName("Tamano");
    let vTamanio = "";
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            vTamanio = radios[i].value;
            break;
        }
    }

    let vNombre = eNombre.value;
    let vTipoEstrella = eTipoEstrella.value;
    let vConstelación = eConstelación.value;
    //let vTamanio = eTamanio ? eTamanio.value : "";
    let vDescubridor = eDescubridor.value;
    let vMagnitud = eMagnitud.value;
    let vDistancia = eDistancia.value;
    let vEdad = eEdad.value;
    let vDescripcion = eDescripcion.value;
    let vTemperatura = eTemperatura.value;

    let objeto = {
        nombre: vNombre,
        tipoEstrella: vTipoEstrella,
        constelación: vConstelación,
        Tamaño: vTamanio,
        descubridor: vDescubridor,
        magnitud: vMagnitud,
        distancia: vDistancia,
        edad: vEdad,
        descripcion: vDescripcion,
        temperatura: vTemperatura
    };

        registrarE(objeto).then(()=>{
        alert("se registró con exito");}).catch((xxx)=>{
        console.log(xxx)
        traerDatos()
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

const traerDatos = ()=>{
     // el parametro que esta dentro del then es un listado de algo
    obtenerEstrellas().then((Estrellas)=>{
        let forma = '';
        console.log(Estrellas);
        Estrellas.forEach((p) => {
            forma += "<tr>";
            forma += "<td>" + p.nombre + "</td>";
            forma += "<td>" + p.tipoEstrella + "</td>";
            forma += "<td>" + p.constelación + "</td>";
            //forma += "<td>" + p.Tamaño + "</td>";
            forma += "<td>" + p.descubridor + "</td>";
            forma += "<td>" + p.magnitud + "</td>";
            forma += "<td>" + p.distancia + "</td>";
            forma += "<td>" + p.edad + "</td>";
            forma += "<td>" + p.descripcion + "</td>"
            forma += "<td>" + p.temperatura + "</td>"
            forma += "<td><button id='UPD" + p.id + "'>Editar</button></td>";
            forma += "<td><button id='DEL" + p.id + "'>Eliminar</button></td>";
            forma += "</tr>";
        });
        console.log(forma);
        document.getElementById("registroTabla").innerHTML = forma;
        Estrellas.forEach((p) => {
            document.getElementById("UPD" + p.id).addEventListener('click', () => {
                document.getElementById("UPDnombre").value = p.nombre;
                document.getElementById("UPDtipoEstrella").value = p.tipoEstrella;
                document.getElementById("UPDconstelación").value = p.constelación;
                document.getElementById("UPDdescubridor").value = p.descubridor;
                document.getElementById("UPDmagnitud").value = p.magnitud;
                document.getElementById("UPDdistancia").value = p.distancia;
                document.getElementById("UPDedad").value = p.edad;
                document.getElementById("UPDdescripcion").value = p.descripcion;
                //document.getElementById("UPDtemperatura").value = p.temperatura;
                

                document.getElementById('btnActualizar').value = p.id;
            });
            let eliminarcosa = document.getElementById('DEL'+p.id);
            eliminarcosa.addEventListener('click', ()=>{
                eliminar(p.id);
    })})})};
function validar(){
    validarVacio("nombre");
    validarVacio("tipoEstrella");
    validarVacio("constelación");
    //validarRadios("tamano")
    validarVacio("descubridor");
    validarVacio("magnitud")
    validarVacio("distancia");
    validarVacio("edad");
    validarVacio("descripcion");
    validarSelect("temperatura")}

function validarVacio(idCampo){
    let elemento = document.getElementById(idCampo);//Recupera el elemento
    console.log(elemento);
    let valor = elemento.value; //Recupera el valor del elemento si es un input
    console.log(valor);
    console.log(valor.length);
    let valorSinEspacios = valor.trim();
    console.log(valorSinEspacios.length);
    let camw123 = document.getElementById("p"+idCampo);
    if(valorSinEspacios==""){
        console.log("Esta vacio");
        console.log(camw123)
        camw123.classList.remove("novisible");
        camw123.classList.add("errorvisible");
    }};

function validarSelect(idCampo) {
    let elemento = document.getElementById(idCampo);
    let valor = elemento.value.trim();
    let mensajeError = document.getElementById("p" + idCampo);
    if (valor === "") {
        mensajeError.classList.remove("novisible");
        mensajeError.classList.add("errorvisible");
    } else {
        mensajeError.classList.remove("errorvisible");
        mensajeError.classList.add("novisible");
    }
}

const actualizar = () => {
    let eNombre = document.getElementById("UPDnombre");
    let eTipoEstrella = document.getElementById("UPDtipoEstrella");
    let eConstelación = document.getElementById("UPDconstelación");
    let eTamanio = document.querySelector("input[name='Tamano']:checked");
    let eDescubridor = document.getElementById("UPDdescubridor");
    let eMagnitud = document.getElementById("UPDmagnitud");
    let eDistancia = document.getElementById("UPDdistancia");
    let eEdad = document.getElementById("UPDedad");
    let eTemperatura = document.getElementById("UPDtemperatura");



    let vNombre = eNombre.value;
    let vTipoEstrella = eTipoEstrella.value;
    let vConstelación = eConstelación.value;
    let vTamanio = eTamanio ? eTamanio.value : "";
    let vDescubridor = eDescubridor.value;
    let vMagnitud = eMagnitud.value;
    let vDistancia = eDistancia.value;
    let vEdad = eEdad.value;
    let vTemperatura = eTemperatura.value;


    let objeto = {
        nombre: vNombre,
        tipoEstrella: vTipoEstrella,
        constelación: vConstelación,
        Tamaño: vTamanio,
        descubridor: vDescubridor,
        magnitud: vMagnitud,
        distancia: vDistancia,
        edad: vEdad,
        temperatura: vTemperatura

    };

    let id=document.getElementById("btnActualizar").value;
    editarE(objeto,id).then(()=>{
        alert("se actualizado correctamente")
        traerDatos()
    }).catch((e)=>{
        console.log(e);
        traerDatos()
    })};


const eliminar = (id) => {
    traerDatos()
    if (confirm("¿Estás seguro de que deseas eliminar este registro?\n")){

            borrarE(id).then(() => {
                alert("Se eliminó correctamente");
                traerDatos(); // Actualizar la tabla después de eliminar
            }).catch((e) => {console.log(e);});
            }};

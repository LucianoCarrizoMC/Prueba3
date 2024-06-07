import { obtenerEstrellas,registrarE, editarE ,borrarE} from "./promesas.js";

// Evento que se dispara cuando la página se ha cargado completamente
window.addEventListener("load", () => {
    // Event listener para el botón de cambiar color
    document.getElementById("btncambioColor").addEventListener("click", cambiarcolor);
    // Event listener para el botón de registrar
    document.getElementById("btnregistar").addEventListener("click", registrar);
    // Event listener para validar campos antes de registrar
    document.getElementById("btnregistar").addEventListener("click", validar);
    // Event listener para el botón de actualizar
    document.getElementById("btnActualizar").addEventListener("click", actualizar);
    // Obtener datos al cargar la página
    //document.getElementById("btnEliminar").addEventListener("click",eliminar)
    traerDatos()
   })

// Función para registrar una nueva estrella
function registrar() {
    // Recupera los valores de los campos del formulario

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

    // Recupera el valor del radio seleccionado
    let radios = document.getElementsByName("Tamano");
    let vTamanio = "";
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            vTamanio = radios[i].value;
            break;
        }
    }

    // Crea un objeto con los valores recuperados
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

    // Llama a la función para registrar la estrella
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
        traerDatos()// Actualizar la tabla después del registro
    });
    
}
// Función para cambiar el color de los elementos
function cambiarcolor(){
    let element123 = document.getElementsByClassName("h1color");
    console.log("aloooo")
    // Ciclo para cambiar la clase de los elementos los 2 a la vez tanto fondo como letras
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
    // Llama a la función que obtiene los datos de las estrellas
    // el parametro que esta dentro del then es un listado de estrellas
    obtenerEstrellas().then((Estrellas)=>{
        let forma="";
        console.log(Estrellas);
        // Ciclo que recorre cada estrella y genera las filas de la tabla
        Estrellas.forEach((p)=>{
            forma+="<tr>";
            forma+="<td>"+p.nombre+"</td>";
            forma+="<td>"+p.tipoEstrella+"</td>";
            forma+="<td>"+p.constelación+"</td>";
            //forma+="<td>"+p.Tamaño+"</td>";
            forma+="<td>"+p.descubridor+"</td>";
            forma+="<td>"+p.magnitud+"</td>";
            forma+="<td>"+p.distancia+"</td>";
            forma+="<td>"+p.edad+"</td>";
            forma+="<td>"+p.descripcion+"</td>"
            forma+="<td>"+p.temperatura+"</td>"
            forma+="<td><button id='UPD"+p.id+"'>Editar</button></td>";
            forma+="<td><button id='DEL"+p.id+"'>Eliminar</button></td>";
            forma+="</tr>";
        console.log(forma);
        });
        // Inserta el contenido HTML en el elemento de la tabla
        document.getElementById("registroTabla").innerHTML = forma;
        // Añade event listeners a los botones de editar y eliminar para cada estrella
        Estrellas.forEach((p) => {
            document.getElementById("UPD"+p.id).addEventListener('click', () => {
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
            // Event listener para el botón de eliminar
            let eliminarcosa = document.getElementById('DEL'+p.id);
            eliminarcosa.addEventListener('click', ()=>{
                eliminar(p.id);
    })})})};
function validar(){
    // Llama a la función validarVacio para cada campo que necesita validación

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
// Validar campos requeridos del formulario


// Función para validar si un campo del formulario está vacío
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
// Función para validar si se ha seleccionado una opción en un elemento <select>
function validarSelect(idCampo) {
    let elemento = document.getElementById(idCampo);// Recupera el elemento select
    let valor = elemento.value.trim(); // Recupera el valor seleccionado
    let mensajeError = document.getElementById("p" + idCampo);
    if (valor === "") {
        mensajeError.classList.remove("novisible");
        mensajeError.classList.add("errorvisible");
    } else {
        mensajeError.classList.remove("errorvisible");
        mensajeError.classList.add("novisible");
    }
}
// Función para actualizar la información de una estrella
const actualizar = () => {
    // Recupera los valores de los campos del formulario de actualización
    let eNombre = document.getElementById("UPDnombre");
    let eTipoEstrella = document.getElementById("UPDtipoEstrella");
    let eConstelación = document.getElementById("UPDconstelación");
    let eTamanio = document.querySelector("input[name='Tamano']:checked");
    let eDescubridor = document.getElementById("UPDdescubridor");
    let eMagnitud = document.getElementById("UPDmagnitud");
    let eDistancia = document.getElementById("UPDdistancia");
    let eEdad = document.getElementById("UPDedad");
    let eTemperatura = document.getElementById("UPDtemperatura");


// Obtiene los valores de los campos del formulario de actualización
    let vNombre = eNombre.value;
    let vTipoEstrella = eTipoEstrella.value;
    let vConstelación = eConstelación.value;
    let vTamanio = eTamanio ? eTamanio.value : "";
    let vDescubridor = eDescubridor.value;
    let vMagnitud = eMagnitud.value;
    let vDistancia = eDistancia.value;
    let vEdad = eEdad.value;
    let vTemperatura = eTemperatura.value;

// Crea un objeto con los valores recuperados
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
    // Recupera el ID de la estrella a actualizar
    let id=document.getElementById("btnActualizar").value;
    // Llama a la función para editar la estrella en el servidor
    editarE(objeto,id).then(()=>{
        alert("se actualizado correctamente")
        traerDatos()
    }).catch((e)=>{
        console.log(e);
        traerDatos()
    })};

// Función para eliminar una estrella
const eliminar = (id) => {
    if (confirm("¿Estás seguro de que deseas eliminar este registro?\n")){
        // Llama a la función para borrar la estrella
            borrarE(id).then(() => {
                alert("Se eliminó correctamente");
                traerDatos(); // Actualizar la tabla después de eliminar
            }).catch((e) => {console.log(e);});
            }};

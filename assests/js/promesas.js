import { addDoc,collection,getDocs,updateDoc,doc,deleteDoc} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
// Importa funciones de Firebase Firestore para realizar operaciones CRUD en la base de datos

import { db } from "./firebase.js";// Importa la instancia de la base de datos Firestore



// Función para registrar una nueva estrella en la base de datos
export const registrarE=async(Estrellas)=>{
    console.log(Estrellas);
// Añade un nuevo documento a la colección "Estrellas" con los datos proporcionados
    const docRef = await addDoc(collection(db, "Estrellas"),Estrellas);
}

// Función para obtener todas las estrellas de la base de datos
export const obtenerEstrellas = async ()=>{// Obtiene la colección "Estrellas" de la base de datos
    const Recuperar = collection(db,"Estrellas");// Obtiene los documentos en la colección "Estrellas"
    const querySnapshot = await getDocs(Recuperar);

    let Estrellas = []
    querySnapshot.forEach((doc) => {// Itera sobre cada documento en el snapshot y los agrega a un array de estrellas

        // console.log(doc.id, " => ", doc.data());
        // los ... desarma el diccionario para poner los datos por separado y ingresarlos al diccionario nuevo
        Estrellas.push({...doc.data(), id:doc.id})
        });
        return Estrellas;// Retorna estrellas
}

// Función para editar la información de una estrella en la base de datos
export const editarE=async(Estrellas,id)=>{
    const ref = doc(db,"Estrellas",id);
    await updateDoc(ref,Estrellas);// Actualiza el documento con los nuevos datos proporcionados
}
// Función para eliminar una estrella de la base de datos
export const borrarE = async(id)=>{
    const ref = doc(db,"Estrellas",id);
    await deleteDoc(ref);// Elimina el documento de la base de datos
}

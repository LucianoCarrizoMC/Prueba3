import { addDoc,collection,getDocs,updateDoc,doc,deleteDoc} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db } from "./firebase.js";

export const registrarE=async(Estrellas)=>{
    console.log(Estrellas);
    const docRef = await addDoc(collection(db, "Estrellas"),Estrellas);
}
export const obtenerEstrellas = async ()=>{
    const Recuperar = collection(db,"Estrellas");
    const querySnapshot = await getDocs(Recuperar);

    let Estrellas = []
    querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        // los ... desarma el diccionario para poner los datos por separado y ingresarlos al diccionario nuevo
        Estrellas.push({...doc.data(), id:doc.id})
        });
        return Estrellas;
}

export const editarE=async(Estrellas,id)=>{
    const ref = doc(db,"Estrellas",id);
    await updateDoc(ref,Estrellas);
}

export const borrarE = async(id)=>{
    const ref = doc(db,"Estrellas",id);
    await deleteDoc(ref);
}

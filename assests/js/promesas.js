import { addDoc,collection,getDocs, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db } from "./firebase.js";

export const registrarP=async(persona)=>{
    console.log(persona);

    const docRef = await addDoc(collection(db, "personas"),persona);
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBg9qLo4vFA4k9dnxzV_HZaOpfvZ-aTBf0",
	authDomain: "website-barber-b54cd.firebaseapp.com",
	projectId: "website-barber-b54cd",
	storageBucket: "website-barber-b54cd.appspot.com",
	messagingSenderId: "698088697984",
	appId: "1:698088697984:web:b056d4e13710164427f665",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const saveOpinion = (
	nombre,
	apellido,
	correo,
	foto,
	calificacion,
	opinion
) =>
	addDoc(collection(db, "opiniones"), {
		nombre,
		apellido,
		correo,
		foto,
		calificacion,
		opinion,
	});

export const getOpinones = () => getDocs(collection(db, "opiniones"));

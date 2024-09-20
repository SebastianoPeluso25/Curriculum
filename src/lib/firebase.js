// Importa le funzioni necessarie da Firebase SDK
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Importa `getAuth` da `firebase/auth`


// La configurazione ottenuta dalla console Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDDxwGlpu9aBSUklG1ia5BQW7S4uuHALyg",
  authDomain: "test-form-61007.firebaseapp.com",
  projectId: "test-form-61007",
  storageBucket: "test-form-61007.appspot.com",
  messagingSenderId: "143060659504",
  appId: "1:143060659504:web:909862eec02bed9f452cf5"
};

// Inizializza Firebase solo se non è già stato fatto
function getFirebaseApp() {
  if (!getApps().length) {
    return initializeApp(firebaseConfig);
  } else {
    return getApp(); // Usa l'app esistente
  }
}

const app = getFirebaseApp();
const db = getFirestore(app);
const auth = getAuth(app); // Inizializza l'oggetto di autenticazione

export { db, auth };

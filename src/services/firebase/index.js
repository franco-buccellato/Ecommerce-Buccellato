import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDdkRczB51uv4GK0dxLzHvo1j0y-2AGArI",
    authDomain: "ecommercer-buccellato.firebaseapp.com",
    projectId: "ecommercer-buccellato",
    storageBucket: "ecommercer-buccellato.appspot.com",
    messagingSenderId: "753113246768",
    appId: "1:753113246768:web:b5dd278a16d2e020ff51f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDB = getFirestore(app);
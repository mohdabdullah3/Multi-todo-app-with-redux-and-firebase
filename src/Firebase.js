import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyB8N2VaVla1GgBhznrM_70XfMSROH_D4Bg",
   authDomain: "todo-app-ccc3b.firebaseapp.com",
   projectId: "todo-app-ccc3b",
   storageBucket: "todo-app-ccc3b.appspot.com",
   messagingSenderId: "923121374282",
   appId: "1:923121374282:web:3770f51eed6516d5e682b3"
 };

 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

 export { db };





import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getDatabase,  ref ,  update, push } from 'https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnLVlB4WFwkZ1Cla99xlkj1wWb2m7kngc",
  authDomain: "caai-143c7.firebaseapp.com",
  projectId: "caai-143c7",
  storageBucket: "caai-143c7.firebasestorage.app",
  messagingSenderId: "688293649652",
  appId: "1:688293649652:web:30a14d1247798e012c12a1",
  measurementId: "G-8RD4FB089L"
};


const app = initializeApp(firebaseConfig);
   
const database = getDatabase(app,"https://caai-143c7-default-rtdb.asia-southeast1.firebasedatabase.app" );

export { ref, database, update, push};

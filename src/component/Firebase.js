import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

    const firebaseConfig = {
        apiKey: "AIzaSyD1y-PtLbGeRi49PSsEm6mselFALBoqsIs",
        authDomain: "project-bd1df.firebaseapp.com",
        databaseURL: "https://project-bd1df-default-rtdb.firebaseio.com/",
        projectId: "project-bd1df",
        storageBucket: "project-bd1df.appspot.com",
        messagingSenderId: "620350236071",
        appId: "1:620350236071:web:9b6393b1b21b3f15dd0282"
      };

      const firebaseApp = initializeApp(firebaseConfig);
      const db = getFirestore(firebaseApp);

export default db;

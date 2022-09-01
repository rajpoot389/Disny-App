import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//     authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//     projectId: "disneyplus-clone-a33d5",
//     storageBucket: "disneyplus-clone-a33d5.appspot.com",
//     messagingSenderId: "37918794208",
//     appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//     measurementId: "G-DRVLJKWRWG",
// };

const firebaseConfig = {
    apiKey: "AIzaSyBNeCzB9VvUEaeaL1-kZ3oNtSqePU-rqz4",
    authDomain: "disny-clone.firebaseapp.com",
    projectId: "disny-clone",
    storageBucket: "disny-clone.appspot.com",
    messagingSenderId: "147289317137",
    appId: "1:147289317137:web:af2799e419a4cf56f436b0",
    measurementId: "G-YQTYQB5LGN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
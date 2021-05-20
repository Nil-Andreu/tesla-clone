import firebase from 'firebase';

//Initializing the database
let firebaseConfig = {
    apiKey: "AIzaSyC1080_Uo7CiaKY7r8XOXmKuHcOMO58IUI",
    authDomain: "savitar-tech.firebaseapp.com",
    projectId: "savitar-tech",
    storageBucket: "savitar-tech.appspot.com",
    messagingSenderId: "8572811506",
    appId: "1:8572811506:web:d5854ea7c5c2630532b86b",
    measurementId: "G-75P7L7BF4C"
};

//Initializing the database
const firebaseApp = firebase.initializeApp(firebaseConfig); //Initializing the firebase app
const analaytics = firebase.analytics(); //For the analytics of the webpage

const auth = firebase.auth(); //The auth is to be able to log in or log out
const provider = new firebase.auth.GoogleAuthProvider(); //As we can have google auth (could use also facebook, instagram, ...)
const storage = firebase.storage();

export {auth, provider, storage };
export default db;

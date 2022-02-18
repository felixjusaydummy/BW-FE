import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCQqivfRP_WQ11p1f0-Kra-4F74VAUDyRM",
    authDomain: "blockwallet-otp.firebaseapp.com",
    projectId: "blockwallet-otp",
    storageBucket: "blockwallet-otp.appspot.com",
    messagingSenderId: "745636460606",
    appId: "1:745636460606:web:e43a86c2b1a127a80f796f"
}

firebase.initializeApp(config);
export default firebase;
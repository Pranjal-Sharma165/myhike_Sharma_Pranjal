//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBTTkeSKe1WdSV-CXvaL04A_dZ6CjIezTo",
    authDomain: "comp1800-demo07-cdca3.firebaseapp.com",
    projectId: "comp1800-demo07-cdca3",
    storageBucket: "comp1800-demo07-cdca3.appspot.com",
    messagingSenderId: "232590003906",
    appId: "1:232590003906:web:4e8aa19f3c9326c33cb55b"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();



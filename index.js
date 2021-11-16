const express = require('express');
const fire = require('firebase/app')
const initializeApp = fire.initializeApp;
const app2 = express();
const firebaseConfig = {
  apiKey: "AIzaSyDvzlzuF2bM37DAST0fD-1pciXa2HRUPZ4",
  authDomain: "lab-simetrico.firebaseapp.com",
  projectId: "lab-simetrico",
  storageBucket: "lab-simetrico.appspot.com",
  messagingSenderId: "609196087056",
  appId: "1:609196087056:web:06146342e08a430f2cb795",
  measurementId: "G-C5KSG33WM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


app2.get('/', (req, res) =>{
    res.send("Holaaaa");
})
app2.listen(process.env.PORT || 3000, () => {
    console.log('Funcionando');
});

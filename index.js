const express = require('express');
const fire = require('firebase/app')
const initializeApp = fire.initializeApp;
const app2 = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Router = require('./routes.js')
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
//Init MongoDB
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect("mongodb+srv://dbMclovin:Javi2602@ggtienda.5rbjo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

}
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app2.use(Router);
app2.get('/', (req, res) =>{
    res.send("Holaaaa");
})
app2.use(express.urlencoded({ extended: false }));
app2.use(express.json());
app2.use(cors());
app2.post('/agregar', (req, res)=>{
  const {ar1, ar2, ar3} = req.body;
  console.log(req.body);
})
app2.listen(process.env.PORT || 3000, () => {
    console.log('Funcionando');
});

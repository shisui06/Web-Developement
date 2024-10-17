//importer le package
const express = require("express");

//initialiser l'application
let app = express();

//Définir le port et démarrer
app.listen("3000"); 

console.log("Server started");



app.get("/",processHome){

}app.get("/", (req, res) => {
    console.log(req.url);		//affiche “/”
    res.send("<h1>Ceci est la home page</h1>");    
});
 
app.get("/help", (req, res) => {
    console.log(req.url);		//affiche “/help”
    res.send("<h1>Ceci est le help</h1>");    
});

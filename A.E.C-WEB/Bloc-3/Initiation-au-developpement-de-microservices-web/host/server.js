const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 81;


app.use(express.json());
app.use(express.static('public'));


app.get("/", (req, res) => {
    console.log(req.url); 
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});


app.get("/productList", (req, res) => {
    console.log(req.url); //affiche “/” res.send("<h1>Ceci est la home page</h1>");
    });




app.listen(PORT, () => {
    console.log(`Server running at http://localhost:81`);
});
const { MongoClient } = require('mongodb');


const uri = mongodb+srv//apou01:admin@cluster0.afy4tzh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const client = new MongoClient(uri);

const databaseName = "school";
const collectionName = "student";

async function run() {
    try {
        await client.connect();
        const db = client.db(databaseName);
        const collection = db.collection(collectionName);

        
        const studentsData = [
            { nom: "Pierre", note1: 55 },
            { nom: "Kamba", note1: 80, note2: 95 },
            { nom: "Marc" },
            { nom: "Toufik", note1: 95, note2: 95, note3: 95 },
            { nom: "Belvita", note1: 85, note2: 50 },
            { nom: "Akerlie", note1: 70, note2: 95, note3: 85 },
            { nom: "Etienne", note1: 75, note3: 78 }
        ];


        await collection.insertMany(studentsData);
        console.log("Données insérées.");

    } catch (err) {
        console.error("Erreur lors de la connexion ou de l'insertion des données:", err);
    } finally {
        await client.close();
    }
}

run();



/*
J'ai esséyer de le faire mais cela m'affiche cette erreur.   


ReferenceError: mongodb is not defined
    at Object.<anonymous> (/Users/tamoor/Documents/GitHub/Web-Developement/A.E.C-WEB/Bloc-3/Initiation-au-developpement-de-microservices-web/mongodb/server.js:4:13)
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Module._load (node:internal/modules/cjs/loader:1104:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49

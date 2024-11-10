const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://apou01:admin@cluster0.afy4tzh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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

        const allStudents = await collection.find({}).toArray();
        console.log("Toutes les données:", allStudents);

        
        await collection.updateMany(
            { note1: { $exists: false } },
            { $set: { note1: 50 } }
        );
        await collection.updateMany(
            { note2: { $exists: false } },
            { $set: { note2: 50 } }
        );
        await collection.updateMany(
            { note3: { $exists: false } },
            { $set: { note3: 50 } }
        );
    

    
        const studentsWithAverage = await collection.find({}).toArray();
        studentsWithAverage.forEach(student => {
            const notes = [student.note1, student.note2, student.note3].filter(n => n !== undefined);
            const average = notes.length > 0 ? notes.reduce((a, b) => a + b) / notes.length : 0;
            console.log(`Moyenne de ${student.nom}: ${average}`);
        });


        await collection.deleteMany({
            $expr: { $lt: [{ $size: { $filter: { input: ["$note1", "$note2", "$note3"], cond: { $gt: ["$$this", null] } } } }, 2] }
        });
        


        await collection.deleteOne({ nom: "Toufik" });
    

    } catch (err) {
        console.error("Erreur lors de la connexion ou de l'insertion des données:", err);
    } finally {
        await client.close();
    }
}

run().catch(console.error);

const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();
const PORT = 81;


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public')); 


mongoose.connect('mongodb://localhost/gameDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const Position = mongoose.model('Position', new mongoose.Schema({
    name: String,
    position: Number,
}));


const loadData = (filePath) => {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
        return null;
    }
};

const saveData = (filePath, data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error(`Error saving ${filePath}:`, error);
        return false;
    }
};


app.post('/login', (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) {
        return res.status(400).json({ success: false, message: "Name and password are required." });
    }

    let users = loadData('./data/users.json') || [];
    const user = users.find(u => u.name === name);

    if (user) {
        if (user.password === password) {
            return res.json({ success: true, name: user.name });
        } else {
            return res.status(401).json({ success: false, message: "Incorrect password." });
        }
    } else {
        const newUser = { name, password, points: 0 };
        users.push(newUser);
        if (saveData('./data/users.json', users)) {
            return res.json({ success: true, name });
        } else {
            return res.status(500).json({ success: false, message: "Error creating user." });
        }
    }
});


app.post('/start', async (req, res) => {
    try {
        await Position.deleteMany();

        const positions = [
            { name: 'player', position: 0 },
            { name: 'enemy1', position: Math.floor(Math.random() * 64) },
            { name: 'enemy2', position: Math.floor(Math.random() * 64) },
            { name: 'enemy3', position: Math.floor(Math.random() * 64) },
            { name: 'key', position: Math.floor(Math.random() * 64) },
        ];

        await Position.insertMany(positions);

        res.json({ status: 'ok', positions });
    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
});


app.post('/move', async (req, res) => {
    const { direction } = req.body;

    if (!direction) {
        return res.status(400).json({ status: 'error', message: 'Direction is required' });
    }

    try {
        const positions = await Position.find();
        const player = positions.find(p => p.name === 'player');
        let newPlayerPos = player.position;

        if (direction === 'up') newPlayerPos -= 8;
        if (direction === 'down') newPlayerPos += 8;
        if (direction === 'left') newPlayerPos -= 1;
        if (direction === 'right') newPlayerPos += 1;

        if (newPlayerPos < 0 || newPlayerPos >= 64) {
            return res.status(400).json({ status: 'error', message: 'Out of bounds' });
        }

        const key = positions.find(p => p.name === 'key');
        const enemies = positions.filter(p => p.name.startsWith('enemy'));
        const hitEnemy = enemies.some(e => e.position === newPlayerPos);
        const hasKey = key.position === newPlayerPos;

        await Position.updateOne({ name: 'player' }, { position: newPlayerPos });

        for (const enemy of enemies) {
            const newEnemyPos = Math.floor(Math.random() * 64);
            await Position.updateOne({ name: enemy.name }, { position: newEnemyPos });
        }

        const newPositions = await Position.find();

        res.json({
            status: 'ok',
            hitEnemy,
            hasKey,
            newPositions
        });
    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
});


app.post('/save-game', (req, res) => {
    const { name, gameState } = req.body;
    if (!name || !gameState) {
        return res.status(400).json({ success: false, message: "Name and game state are required." });
    }

    let gameData = loadData('./data/gameState.json') || {};
    gameData[name] = gameState;

    if (saveData('./data/gameState.json', gameData)) {
        res.json({ success: true });
    } else {
        res.status(500).json({ success: false, message: "Error saving game state." });
    }
});

app.post('/update-points', (req, res) => {
    const { name, points } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: "Name is required." });
    }

    let users = loadData('./data/users.json') || [];
    const userIndex = users.findIndex(u => u.name === name);

    if (userIndex !== -1) {
        users[userIndex].points = points;
        if (saveData('./data/users.json', users)) {
            return res.json({ success: true });
        }
    }

    res.status(500).json({ success: false, message: "Error updating points." });
});


mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:81`);
});

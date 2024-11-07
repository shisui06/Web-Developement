const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 80;


app.use(express.json());
app.use(express.static('public'));


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
        // Create new user
        const newUser = { name, password, points: 0 };
        users.push(newUser);
        if (saveData('./data/users.json', users)) {
            return res.json({ success: true, name });
        } else {
            return res.status(500).json({ success: false, message: "Error creating user." });
        }
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
    
    return res.status(500).json({ success: false, message: "Error updating points." });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:80`);
});
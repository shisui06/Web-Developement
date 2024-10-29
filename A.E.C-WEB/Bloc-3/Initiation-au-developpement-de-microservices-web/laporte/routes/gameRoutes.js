const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Serve the main page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Get game state
router.get('/game-state', (req, res) => {
    const username = req.query.username;
    if (!username) {
        return res.status(400).json({ error: 'Username required' });
    }

    try {
        const users = JSON.parse(fs.readFileSync('./data/users.json'));
        const user = users.find(u => u.name === username);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ points: user.points });
    } catch (error) {
        res.status(500).json({ error: 'Error reading user data' });
    }
});

// Update score
router.post('/update-score', (req, res) => {
    const { username, points } = req.body;
    if (!username || points === undefined) {
        return res.status(400).json({ error: 'Username and points required' });
    }

    try {
        const users = JSON.parse(fs.readFileSync('./data/users.json'));
        const userIndex = users.findIndex(u => u.name === username);
        if (userIndex === -1) {
            return res.status(404).json({ error: 'User not found' });
        }

        users[userIndex].points += points;
        fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2));
        res.json({ success: true, newPoints: users[userIndex].points });
    } catch (error) {
        res.status(500).json({ error: 'Error updating score' });
    }
});

module.exports = router;
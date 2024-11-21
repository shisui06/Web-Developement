const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/gameDB', { useNewUrlParser: true, useUnifiedTopology: true });


const Position = mongoose.model('Position', new mongoose.Schema({
    name: String, 
    position: Number,
}));

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
        return res.json({ status: 'error', message: 'Direction is required' });
    }

    try {
        
        const positions = await Position.find();
        const player = positions.find((p) => p.name === 'player');
        let newPlayerPos = player.position;

        
        if (direction === 'up') newPlayerPos -= 8;
        if (direction === 'down') newPlayerPos += 8;
        if (direction === 'left') newPlayerPos -= 1;
        if (direction === 'right') newPlayerPos += 1;

    
        if (newPlayerPos < 0 || newPlayerPos >= 64) {
            return res.json({ status: 'error', message: 'Out of bounds' });
        }

        
        const key = positions.find((p) => p.name === 'key');
        const enemies = positions.filter((p) => p.name.startsWith('enemy'));
        const hitEnemy = enemies.some((e) => e.position === newPlayerPos);
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


app.get('/position/:id', async (req, res) => {
    try {
        const position = await Position.findById(req.params.id);
        if (!position) {
            return res.json({ status: 'error', message: 'Position not found' });
        }
        res.json({ position });
    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
});


app.put('/position/:id', async (req, res) => {
    const { newPosition } = req.body;

    if (newPosition == null) {
        return res.json({ status: 'error', message: 'New position is required' });
    }

    try {
        await Position.findByIdAndUpdate(req.params.id, { position: newPosition });
        res.json({ status: 'ok' });
    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
});

app.delete('/position', async (req, res) => {
    try {
        await Position.deleteMany();
        res.json({ status: 'ok' });
    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:81`));
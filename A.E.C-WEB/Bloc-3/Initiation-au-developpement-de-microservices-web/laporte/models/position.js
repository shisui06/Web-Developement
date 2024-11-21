const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['player', 'enemy1', 'enemy2', 'enemy3', 'key']
    },
    position: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('position', positionSchema);

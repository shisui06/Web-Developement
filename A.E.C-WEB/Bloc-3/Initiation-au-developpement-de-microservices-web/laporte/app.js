// app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const gameRoutes = require('./routes/gameRoutes');

const app = express();
const PORT = 80;  // Use either 80 or 3000 as your chosen port

// Serve static files (CSS, JS, HTML) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Load users from JSON file
let users = require('./data/users.json');

// Use game routes
app.use('/', gameRoutes);

// Login endpoint
app.post('/login', (req, res) => {
    const { name, password } = req.body;
    const user = users.find(u => u.name === name);

    if (user) {
        if (user.password === password) {
            return res.json({ success: true, name: user.name });
        } else {
            return res.json({ success: false, message: "Incorrect password." });
        }
    } else {
        // Add a new user if not found
        users.push({ name, password, points: 0 });
        fs.writeFileSync('./data/users.json', JSON.stringify(users));
        return res.json({ success: true, name });
    }
});

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:80'`);
});

const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Load JSON data
const loadData = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8'));
const saveData = (filePath, data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

// Route to handle user login
app.post('/login', (req, res) => {
  const { name, password } = req.body;
  let users = loadData('./server/users.json');

  const user = users.find(user => user.name === name);
  if (user) {
    if (user.password === password) {
      res.json({ success: true, name });
    } else {
      res.status(401).json({ success: false, message: 'Incorrect password.' });
    }
  } else {
    // Add new user
    const newUser = { name, password, points: 0 };
    users.push(newUser);
    saveData('./server/users.json', users);
    res.json({ success: true, name });
  }
});

// Route to save game state
app.post('/save-game', (req, res) => {
  const { name, gameState } = req.body;
  let gameData = loadData('./server/gameState.json');

  gameData[name] = gameState;
  saveData('./server/gameState.json', gameData);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:80`);
});

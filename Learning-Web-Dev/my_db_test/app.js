const express = require('express');
const mysql = require('mysql2'); // Use 'mysql2' if you switched to it

// Create Express app
const app = express();
const port = 3000;

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',            // Replace with your MySQL user
  password: '12345678',            // Replace with your MySQL password
  database: 'my_library'   // Replace with your database name
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL database!');
});

// Route for the root path
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Library App!</h1>');
});

// Route to fetch books
app.get('/books', (req, res) => {
  const query = 'SELECT * FROM books';

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error fetching data from the database');
      console.error(err);
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

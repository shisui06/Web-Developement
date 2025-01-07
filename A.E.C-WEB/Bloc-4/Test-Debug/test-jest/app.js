import express from 'express';

export const app = express();

app.use(express.json());

// Route GET
app.get('/hello', (req, res) => {
  res.status(200).send('Hello, World!');
});

// Route POST
app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).send('Invalid input');
  }
  const sum = a + b;
  res.status(200).json({ sum });
});

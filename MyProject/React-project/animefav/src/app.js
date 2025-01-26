import express from 'express';
import dotenv from 'dotenv';
import { setAnimeRoutes } from 'routes/animeRoutes';
import { connectToDatabase } from './db/index';
import routes from './path/to/routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to the database
connectToDatabase();

// Set up routes
setAnimeRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
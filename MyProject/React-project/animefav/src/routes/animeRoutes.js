import express from 'express';
import AnimeController from '../controllers/animeController';

const router = express.Router();
const animeController = new AnimeController();

const setAnimeRoutes = (app) => {
  router.get('/animes', animeController.getAllAnimes);
  router.get('/animes/:id', animeController.getAnimeById);
  router.post('/animes', animeController.createAnime);
  router.put('/animes/:id', animeController.updateAnime);

  app.use('/api', router);
};

export default setAnimeRoutes;
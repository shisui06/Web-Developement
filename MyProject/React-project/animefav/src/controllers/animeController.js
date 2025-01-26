class AnimeController {
    constructor(animeModel) {
        this.animeModel = animeModel;
    }

    async getAllAnimes(req, res) {
        try {
            const animes = await this.animeModel.findAll();
            res.status(200).json(animes);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving animes', error });
        }
    }

    async getAnimeById(req, res) {
        const { id } = req.params;
        try {
            const anime = await this.animeModel.findByPk(id);
            if (anime) {
                res.status(200).json(anime);
            } else {
                res.status(404).json({ message: 'Anime not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving anime', error });
        }
    }

    async createAnime(req, res) {
        const newAnime = req.body;
        try {
            const createdAnime = await this.animeModel.create(newAnime);
            res.status(201).json(createdAnime);
        } catch (error) {
            res.status(500).json({ message: 'Error creating anime', error });
        }
    }

    async updateAnime(req, res) {
        const { id } = req.params;
        const updatedData = req.body;
        try {
            const [updated] = await this.animeModel.update(updatedData, {
                where: { id }
            });
            if (updated) {
                const updatedAnime = await this.animeModel.findByPk(id);
                res.status(200).json(updatedAnime);
            } else {
                res.status(404).json({ message: 'Anime not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating anime', error });
        }
    }
}

export default AnimeController;
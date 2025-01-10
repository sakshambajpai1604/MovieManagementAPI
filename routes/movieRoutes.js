const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/:movieCode', async (req, res) => {
    try {
        const movie = await Movie.findOne({ movieCode: req.params.movieCode });
        if (!movie) return res.status(404).send('Movie not found');
        res.json(movie);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const { movieCode, title, director, releaseYear, genre } = req.body;
        const movie = new Movie({ movieCode, title, director, releaseYear, genre });
        await movie.save();
        res.status(201).json(movie);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.delete('/:movieCode', async (req, res) => {
    try {
        const movie = await Movie.findOneAndDelete({ movieCode: req.params.movieCode });
        if (!movie) return res.status(404).send('Movie not found');
        res.json({ message: 'Movie deleted successfully' });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;

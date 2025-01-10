const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movieCode: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    director: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    genre: { type: String, required: true }
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;

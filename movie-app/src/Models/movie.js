const mongoose = require('mongoose');

// Define the movie schema
const movieSchema = new mongoose.Schema({
    title: String,
    year: String,
    poster: String
});

// Create the movie model
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
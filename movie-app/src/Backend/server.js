// Express server settings
const express = require('express');
const app = express();
const port = 4000;

// Added Cors from Problem Sheet
const cors = require('cors');
app.use(cors());

// Added mongoose
const mongoose = require('mongoose');
mongoose.connect('my_db_connection_string');

// Import the Mongo Model
const Movie = require('../Models/movie');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Body-parser for POST requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Get req on the main page
app.get('/', (req, res) => {
    res.send('Express Backend API for Movie App'); //send this return to the page
});

//Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');  //500 error returns Something Went Wrong
});

//Get from Movie model
app.get('/api/movies', async (req, res) => {
    const movies = await Movie.find({});
    res.json(movies);
  });

//POST Handle Data from CreateJS
app.post('/api/movies', async (req, res)=>{
    const { title, year, poster } = req.body;
    const newMovie = new Movie({ title, year, poster });
    await newMovie.save();

    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
})

//GET Movie by id
app.get('/api/movie/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.send(movie);
  });

//Listener to log server to port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
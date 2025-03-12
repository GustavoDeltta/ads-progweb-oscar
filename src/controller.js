const database = require("./database");
const DatabaseRepository = require("./databaseRepository");

const moviesRepository = new DatabaseRepository(database);

async function allMovies(req, res) {
    const allMovies = await moviesRepository.allMovies();
    const data = {
      movies: allMovies
    };
    res.status(200).json(data);
}

async function addMovie(req, res) {
    let newMovie = req.body;
  
    const dbRes = await moviesRepository.addMovie(newMovie);
  
    if (dbRes.error) {
        res.status(500).json(dbRes.error);
    } else {
        res.status(201).json("Insert class successfully");
    }
}

function deleteMovie(req, res) {
    let { id } = req.params;
  
    const response = moviesRepository.deleteMovie(id);
  
    if (response.error) {
        res.status(404).json(response.error);
        return;
    }
    res.status(200).json("Class delete successfully");
  }

module.exports = { allMovies, addMovie, deleteMovie };
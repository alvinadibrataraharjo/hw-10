const Movies = require('../models/MoviesModels.js');
const path = require('path');

class Controller {
  static showAllMovies(req, res) {
    Movies.showAllMovies().then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
  }

  static showMoviesById(req, res) {
    Movies.showMoviesById(req.params.id).then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
  }

  static delete(req, res) {
    Movies.delete(req.params.id).then(() => {
      res.send('Data movie berhasil di delete');
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
  }

  static post(req, res) {
    const { title, genres, year } = req.body; 
    if(!req.file){
        return res.status(400).json({
            status:false,
            message:'no file selected'
        })
    }
    const photo = req.file.path
    const dataMovie = {
        title, genres, year, photo 
    }

    Movies.post(dataMovie)
    .then(() => {
      res.send('Data movie berhasil diinput');
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
  }

  static edit(req, res) {
    const { title, genres, year } = req.body; 

    if(!req.file){
      return res.status(400).json({
          status:false,
          message:'no file selected'
      })
    }
    const photo = req.file.path

    const dataMovie = {
        title, genres, year, photo 
    }

    Movies.edit(req.params.id, dataMovie).then(() => {
      res.send('Data movie berhasil di update');
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
  }
}

module.exports = Controller;

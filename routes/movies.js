const express = require('express');
const router = express.Router();
const moviesController = require('../controller/moviesController');

router.get('/', moviesController.showAllMovies);
router.get('/:id', moviesController.showMoviesById);
router.delete('/:id', moviesController.delete);
router.post('/', moviesController.post);
router.put('/:id', moviesController.edit);


module.exports = router;

const express = require('express');
const router = express.Router();
const moviesController = require('../controller/moviesController');
const multer = require('../utils/multer')


router.get('/', moviesController.showAllMovies);
router.get('/:id', moviesController.showMoviesById);
router.delete('/:id', moviesController.delete);
router.post('/',multer().single('photo'), moviesController.post);
router.put('/:id',multer().single('photo'), moviesController.edit);


module.exports = router;

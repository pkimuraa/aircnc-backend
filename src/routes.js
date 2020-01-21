const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SesssionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SesssionController.store );

routes.post('/spots', upload.single('thumbnail'), SpotController.store );

module.exports = routes;
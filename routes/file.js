'use strict'

var express = require('express');
var multer = require('multer');
var filecontroller = require('../controllers/fileController');

var application = express.Router();

var storageConfig = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb){
        var prefijo = Date.now() + '-' + Math.round(Math.random() * 1E10);
        cb(null, prefijo + '-' + file.originalname);
    }
});

var upload = multer({storage: storageConfig});

application.post('/image', upload.single('imagen'), filecontroller.subirImagen);

application.get('/image/:imagename', filecontroller.retornarImagen);

module.exports = application;
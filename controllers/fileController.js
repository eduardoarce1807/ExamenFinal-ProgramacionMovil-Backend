'use strict'

function subirImagen(req, resp){
    console.log(req.body);
    resp.status(200).send(
        {fileUploaded: req.file.filename,
        descripcion: req.body.descripcion,
        longitud: req.body.longitud, 
        latitud: req.body.latitud, 
        altitud: req.body.altitud}
        );
}

function retornarImagen(req, resp){
    resp.sendFile('uploads/'+req.params.imagename, {root:'.'});
}

module.exports = {
    subirImagen,
    retornarImagen
};
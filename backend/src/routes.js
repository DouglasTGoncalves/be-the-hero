const express = require('express');

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/* pegar parametros nomeados ("query") passados por "?" na chamada da rota
        const pars = request.query;
        console.log(pars);
    */
    /* pegar parametros route, passados por exemplo /user/1
        const pars = request.params;
        console.log(pars);
    */

    /* pegar parametros passados pelo body.
        const pars = request.body;
        console.log(pars);
    */

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);


routes.post('/sessions', SessionController.create);
routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
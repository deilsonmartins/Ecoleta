import express from 'express';

import pointsController from './controllers/pointsController';

import itemsController from './controllers/itemsController';

import multer from 'multer';

import multerConfig from './config/multer';

import {celebrate, Joi} from 'celebrate';

const upload =multer(multerConfig);

const routes = express.Router();

routes.get('/items', itemsController.index)

routes.post('/points', 
upload.single('image'), 
celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsaap: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
    })
}, 
{
    abortEarly: false,
}),
pointsController.create)

routes.get('/points/:id', pointsController.show)

routes.get('/points', pointsController.index)

export default routes;
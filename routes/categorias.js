const categoriasRouter = require('express').Router();
const controller = require('../../controllers/categoria');

categoriasRouter.get('/', controller.getAll);
categoriasRouter.get('/:id', controller.getById);
categoriasRouter.post('/create', controller.create);
categoriasRouter.put('/update', controller.update);
categoriasRouter.delete('/delete', controller.delete);

module.exports = categoriasRouter;
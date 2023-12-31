const ingredientesRouter = require('express').Router();
const controller = require('../controllers/ingrediente');
const authMiddleware = require('../middlewares/auth');

ingredientesRouter.use(authMiddleware);

ingredientesRouter.get('/', controller.getAll);
ingredientesRouter.get('/:id', controller.getById);
ingredientesRouter.post('/create', controller.create);
ingredientesRouter.put('/update', controller.update);
ingredientesRouter.delete('/delete/:id', controller.delete);

module.exports = ingredientesRouter;
const categoriasRouter = require('express').Router();
const controller = require('../controllers/categoria');
const authMiddleware = require('../middlewares/auth');

categoriasRouter.use(authMiddleware);

categoriasRouter.get('/', controller.getAll);
categoriasRouter.get('/:id', controller.getById);
categoriasRouter.post('/create', controller.create);
categoriasRouter.put('/update', controller.update);
categoriasRouter.delete('/delete/:id', controller.delete);

module.exports = categoriasRouter;
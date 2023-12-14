const receitasRouter = require('express').Router();
const controller = require('../controllers/receita');

receitasRouter.get('/', controller.getAll);
receitasRouter.get('/:id', controller.getById);
receitasRouter.post('/create', controller.create);
receitasRouter.put('/update', controller.update);
receitasRouter.delete('/delete', controller.delete);

module.exports = receitasRouter;
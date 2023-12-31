const receitasRouter = require('express').Router();
const controller = require('../controllers/receita');
const authMiddleware = require('../middlewares/auth');

receitasRouter.use(authMiddleware);

receitasRouter.get('/', controller.getAll);
receitasRouter.get('/:id', controller.getById);
receitasRouter.post('/create', controller.create);
receitasRouter.put('/update', controller.update);
receitasRouter.delete('/delete/:id', controller.delete);

module.exports = receitasRouter;
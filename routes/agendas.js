const agendasRouter = require('express').Router();
const controller = require('../controllers/agenda');
const authMiddleware = require('../middlewares/auth');

agendasRouter.use(authMiddleware);

agendasRouter.get('/', controller.getAll);
agendasRouter.get('/:id', controller.getById);
agendasRouter.post('/create', controller.create);
agendasRouter.put('/update', controller.update);
agendasRouter.delete('/delete/:id', controller.delete);

module.exports = agendasRouter;
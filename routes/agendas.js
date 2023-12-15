const agendasRouter = require('express').Router();
const controller = require('../controllers/agenda');

agendasRouter.get('/', controller.getAll);
agendasRouter.get('/:id', controller.getById);
agendasRouter.post('/create', controller.create);
agendasRouter.put('/update', controller.update);
agendasRouter.delete('/delete/:id', controller.delete);

module.exports = agendasRouter;
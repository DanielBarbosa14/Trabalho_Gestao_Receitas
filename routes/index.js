const router = require('express').Router();
const agendaRouter = require('./agendas');
const categoriaRouter = require('./categorias');
const ingredienteRouter = require('./ingredientes');
const receitaRouter = require('./receitas');

router.use('/agendas', agendaRouter);
router.use('/categorias', categoriaRouter);
router.use('/ingredientes', ingredienteRouter);
router.use('/receitas', receitaRouter);

module.exports = router;
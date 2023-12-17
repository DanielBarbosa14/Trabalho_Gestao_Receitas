const router = require('express').Router();
const agendaRouter = require('./agendas');
const categoriaRouter = require('./categorias');
const ingredienteRouter = require('./ingredientes');
const receitaRouter = require('./receitas');
const authRouter = require('./auth');

router.use('/agendas', agendaRouter);
router.use('/categorias', categoriaRouter);
router.use('/ingredientes', ingredienteRouter);
router.use('/receitas', receitaRouter);
router.use('/auth', authRouter);

module.exports = router;
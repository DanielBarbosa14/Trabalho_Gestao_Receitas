const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//return all receitas
exports.getAll = async (req, res) => {
    try {
        //read all from database
        const response = await prisma.receitas.findMany( {include: {categoria: true}});
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//return receita by his id (receita id)
exports.getById = async (req, res) => {
    //get receita id requested
    const id = req.params.id;
    try {
        //finds receita by his id (id)
        const response = await prisma.receitas.findUnique({
            where: {
                id: Number(id),
            },
        })
        //return receita
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

//creates receita
exports.create = async (req, res) => {
    //get requested receita properties
    const { nome, tempo, graus, categoriaId } = req.body;
    try {
        //creates new receita
        const receita = await prisma.receitas.create({
            data: {
                nome: nome,
                tempo: tempo,
                graus: graus,
                categoriaId: categoriaId
            },
        })
        //return receita created
        res.status(201).json(receita)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//updates receita
exports.update = async (req, res) => {
    const { id, nome, tempo, graus, categoriaId } = req.body;

    try {
        //find receita to update their data
        const receita = await prisma.receitas.update({
            where: {
                id: Number(id),
            },
            data: {
                id: id,
                nome: nome,
                tempo: tempo,
                graus: graus,
                categoriaId: categoriaId
            },
        })
        //return receita updated
        res.status(200).json(receita)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//delete receita by his id (receita id)
exports.delete = async (req, res) => {
    //get receita id requested
    const id = req.params.id;
    try {
        //delete receita
        await prisma.receitas.delete({
            where: {
                id: Number(id),
            },
        })
        //just return ok
        res.status(200).send("ok");
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
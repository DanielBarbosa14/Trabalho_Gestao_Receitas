const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//return all categorias
exports.getAll = async (req, res) => {
    try {
        //read all from database
        const response = await prisma.categorias.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//return categoria by his id (categoria id)
exports.getById = async (req, res) => {
    //get categoria id requested
    const id =  req.params.id;
    try {
        //finds categoria by his id (id)
        const response = await prisma.categorias.findUnique({
            where: {
                id: Number(id),
            },
        })
        //return categoria
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

//creates categoria
exports.create = async (req, res) => {
    //get requested categoria properties
    const { descricao } = req.body;
    try {
        //creates new categoria
        const categoria = await prisma.categorias.create({
            data: {
                descricao: descricao
            },
        })
        //return categoria created
        res.status(201).json(categoria)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//updates categoria
exports.update = async (req, res) => {
    const { id, descricao } = req.body;

    try {
        //find categoria to update their data
        const categoria = await prisma.categorias.update({
            where: {
                id: Number(id),
            },
            data: {
                descricao: descricao
            },
        })
        //return categoria updated
        res.status(200).json(categoria)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//delete categoria by his id (categoria id)
exports.delete = async (req, res) => {
    //get categoria id requested
    const id = req.params.id;
    try {
        //delete categoria
        await prisma.categorias.delete({
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

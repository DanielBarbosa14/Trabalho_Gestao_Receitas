const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//return all ingredientes
exports.getAll = async (req, res) => {
    try {
        //read all from database
        const response = await prisma.ingredientes.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//return ingrediente by his id (ingrediente id)
exports.getById = async (req, res) => {
    //get ingrediente id requested
    const id = req.params.id;
    try {
        //finds ingrediente by his id (id)
        const response = await prisma.ingredientes.findUnique({
            where: {
                id: Number(id),
            },
        })
        //return ingrediente
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

//creates ingrediente
exports.create = async (req, res) => {
    //get requested ingrediente properties
    const { nome, quantidade } = req.body;
    try {
        //creates new ingrediente
        const ingrediente = await prisma.ingredientes.create({
            data: {
                nome: nome,
                quantidade: quantidade
            },
        })
        //return ingrediente created
        res.status(201).json(ingrediente)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//updates ingrediente
exports.update = async (req, res) => {
    const { id, nome, quantidade } = req.body;

    try {
        //find ingrediente to update their data
        const ingrediente = await prisma.ingredientes.update({
            where: {
                id: Number(id),
            },
            data: {
                id: id,
                nome: nome,
                quantidade: quantidade
            },
        })
        //return ingrediente updated
        res.status(200).json(ingrediente)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//delete ingrediente by his id (ingrediente id)
exports.delete = async (req, res) => {
    //get ingrediente id requested
    const id = req.params.id;
    try {
        //delete ingrediente
        await prisma.ingredientes.delete({
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
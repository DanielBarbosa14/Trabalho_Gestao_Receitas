const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//return all agendas
exports.getAll = async (req, res) => {
    try {
        //read all from database
        const response = await prisma.agendas.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//return agenda by his id (agenda id)
exports.getById = async (req, res) => {
    //get agenda id requested
    const id = req.params.id;
    try {
        //finds agenda by his id (id)
        const response = await prisma.agendas.findUnique({
            where: {
                id: Number(id),
            },
        })
        //return agenda
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

//creates agenda
exports.create = async (req, res) => {
    //get requested agenda properties
    const { dia, mes, ano, diasemana } = req.body;

    console.log(dia);

    try {
        //creates new agenda
        const agenda = await prisma.agendas.create({
            data: {
                dia: dia,
                mes: mes,
                ano: ano,
                diasemana: diasemana
            },
        })
        //return agenda created
        res.status(201).json(agenda)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//updates agenda
exports.update = async (req, res) => {
    const { id, dia, mes, ano, diasemana } = req.body;

    try {
        //find agenda to update their data
        const agenda = await prisma.agendas.update({
            where: {
                id: Number(id),
            },
            data: {
                id: id,
                dia: dia,
                mes: mes,
                ano: ano,
                diasemana: diasemana
            },
        })
        //return agenda updated
        res.status(200).json(agenda)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//delete agenda by his id (agenda id)
exports.delete = async (req, res) => {
    //get agenda id requested
    const id = req.params.id;
    try {
        //delete agenda
        await prisma.agendas.delete({
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
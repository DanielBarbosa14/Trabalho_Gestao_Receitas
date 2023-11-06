const fs = require('fs');

//return all agendas
exports.getAll = async (req, res) => {
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //returns agendas array
    return res.send(data.agendas);
}

//return agenda by his id (agenda id)
exports.getById = async (req, res) => {
    //get agenda id requested
    const id = req.params.id;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //finds agenda by his id
    const agenda = data.agendas.filter(agenda => agenda.id == id);
    //return agenda
    res.send(agenda);
}

//creates agenda
exports.create = async (req, res) => {
    //get requested agenda properties
    const {id, dia, mes, ano, diasemana} = req.body;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //add to agendas array
    data.agendas.push(req.body);
    //add to agendas array
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return new agenda
    return res.status(201).send(req.body);
}

//updates agenda
exports.update = async (req, res) => {
    const { id, dia, mes, ano, diasemana } = req.body;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse to json
    const data = JSON.parse(datajson);
    //find agenda to update
    const agenda = data.agendas.find(agenda => agenda.id == id);
    //update properties
    agenda.id = id;
    agenda.dia = dia;
    agenda.mes = mes;
    agenda.ano = ano;
    agenda.diasemana = diasemana;
    //update local database
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return updated agenda
    return res.send({ id, dia, mes, ano, diasemana });
}

//delete agenda by his id (agenda id)
exports.delete = async (req, res) => {
    //get agenda id requested
    const id = req.params.id;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //find agenda to delete
    const agenda = data.agendas.filter(agenda => agenda.id == id);
    //delete agenda
    data.agendas.splice(agenda, 1);
    //update local database
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return ok
    return res.status(200).send("ok");
}
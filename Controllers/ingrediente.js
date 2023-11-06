const fs = require('fs');

//return all ingredientes
exports.getAll = async (req, res) => {
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //returns ingredientes array
    return res.send(data.ingredientes);
}

//return ingrediente by his id (ingrediente id)
exports.getById = async (req, res) => {
    //get ingrediente id requested
    const id = req.params.id;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //finds ingrediente by his id
    const ingrediente = data.ingredientes.filter(ingrediente => ingrediente.id == id);
    //return ingrediente
    res.send(ingrediente);
}

//creates ingrediente
exports.create = async (req, res) => {
    //get requested ingrediente properties
    const {id, nome, quantidade} = req.body;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //add to ingredientes array
    data.ingredientes.push(req.body);
    //add to ingredientes array
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return new ingrediente
    return res.status(201).send(req.body);
}

//updates ingrediente
exports.update = async (req, res) => {
    const {id, nome, quantidade} = req.body;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse to json
    const data = JSON.parse(datajson);
    //find ingrediente to update
    const ingrediente = data.ingredientes.find(ingrediente => ingrediente.id == id);
    //update properties
    ingrediente.id = id;
    ingrediente.nome = nome;
    ingrediente.quantidade = quantidade;
    //update local database
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return updated ingrediente
    return res.send({id, nome, quantidade});
}

//delete ingrediente by his id (ingrediente id)
exports.delete = async (req, res) => {
    //get ingrediente id requested
    const id = req.params.id;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //find ingrediente to delete
    const ingrediente = data.ingredientes.filter(ingrediente => ingrediente.id == id);
    //delete ingrediente
    data.ingredientes.splice(ingrediente, 1);
    //update local database
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return ok
    return res.status(200).send("ok");
}
const fs = require('fs');

//return all receitas
exports.getAll = async (req, res) => {
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //returns receitas array
    return res.send(data.receitas);
}

//return receita by his id (receita id)
exports.getById = async (req, res) => {
    //get receita id requested
    const id = req.params.id;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //finds receita by his id
    const receita = data.receitas.filter(receita => receita.id == id);
    //return receita
    res.send(receita);
}

//creates receita
exports.create = async (req, res) => {
    //get requested receita properties
    const {id, nome, tempo, graus} = req.body;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //add to receitas array
    data.receitas.push(req.body);
    //add to receitas array
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return new receita
    return res.status(201).send(req.body);
}

//updates receita
exports.update = async (req, res) => {
    const {id, nome, tempo, graus} = req.body;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse to json
    const data = JSON.parse(datajson);
    //find receita to update
    const receita = data.receitas.find(receita => receita.id == id);
    //update properties
    receita.id = id;
    receita.nome = nome;
    receita.tempo = tempo;
    receita.graus= graus;
    //update local database
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return updated receita
    return res.send({id, nome, tempo, graus});
}

//delete receita by his id (receita id)
exports.delete = async (req, res) => {
    //get receita id requested
    const id = req.params.id;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //find receita to delete
    const receita = data.receitas.filter(receita => receita.id == id);
    //delete receita
    data.receitas.splice(receita, 1);
    //update local database
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return ok
    return res.status(200).send("ok");
}
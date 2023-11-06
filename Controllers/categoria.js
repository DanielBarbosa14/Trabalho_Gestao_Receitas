const fs = require('fs');

//return all categorias
exports.getAll = async (req, res) => {
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //returns categorias array
    return res.send(data.categorias);
}

//return categoria by his id (categoria id)
exports.getById = async (req, res) => {
    //get categoria id requested
    const id = req.params.id;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //finds categoria by his id
    const categoria = data.categorias.filter(categoria => categoria.id == id);
    //return categoria
    res.send(categoria);
}

//creates categoria
exports.create = async (req, res) => {
    //get requested categoria properties
    const {id, quente, frio, rapido, assado, frito, cuzido, grelhado} = req.body;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //add to categorias array
    data.categorias.push(req.body);
    //add to categorias array
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return new categoria
    return res.status(201).send(req.body);
}

//updates categoria
exports.update = async (req, res) => {
    const {id, quente, frio, rapido, assado, frito, cuzido, grelhado} = req.body;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse to json
    const data = JSON.parse(datajson);
    //find categoria to update
    const categoria = data.categorias.find(categoria => categoria.id == id);
    //update properties
    categoria.id = id;
    categoria.quente = quente;
    categoria.frio = frio;
    categoria.rapido = rapido;
    categoria.assado = assado;
    categoria.frito= frito;
    categoria.cuzido= cuzido;
    categoria.grelado= grelhado;
    //update local database
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return updated categoria
    return res.send({id, quente, frio, rapido, assado, frito, cuzido, grelhado});
}

//delete categoria by his id (categoria id)
exports.delete = async (req, res) => {
    //get categoria id requested
    const id = req.params.id;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //find categoria to delete
    const categoria = data.categorias.filter(categoria => categoria.id == id);
    //delete categoria
    data.categorias.splice(categoria, 1);
    //update local database
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return ok
    return res.status(200).send("ok");
}
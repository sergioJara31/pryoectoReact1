/* const bcrypt = require("bcrypt-nodejs");
const Champion_model = require("../models/champion.model")

function createChampion(req,res){
    const Champion =new Champion_model();
    const {name, surname, passive, race, role} = req.body;

  

    Champion.save((err,championStored)=>{
        if(err){
            res.status(500).send({message: "el personaje ya existe"});
        }else{
            if(!championStored){
                res.status(404).send({message: "error al crear el personaje"}); 
            }else{
                res.status(200).send({champion:championStored});
            }
        }
    });
}

module.exports={createChampion}; */
const express = require('express');

const Champion_route = express.Router();
const Champion_model = require('../models/champion.model');
const ChampionService = require('../services/champion.service');
const service_champion = new ChampionService();

/* http://localhost:5000/api/v1/Champions/Champion */
Champion_route.post('/Champion', async(req,res)=>{
  try {
    const newChampion = Champion_model(req.body);
    const data = await service_champion.createChampion(newChampion);
      res.status(201).json(data);
  } catch (error){
    res.status(404).json({ message: error });
  }
});

/* http://localhost:5000/api/v1/Champions */
Champion_route.get('/', async(req,res)=>{
  try {
    const data = await service_champion.listChampions();
      res.status(200).json(data);
  } catch (error){
    res.status(404).json( error );
  }
});

/* http://localhost:5000/api/v1/Champions/ChampionId */
Champion_route.get('/:ChampionId', async(req,res,next)=>{
  try {
    const {ChampionId} = req.params;
    const data = await service_champion.showChampion(ChampionId);
      res.status(302).json(data);
  } catch (error){
    next(error);
  }
});

/* http://localhost:5000/api/v1/Champions/ChampionId */
Champion_route.put('/:ChampionId', async(req,res, next) => {
  try {
    const {ChampionId} = req.params;
    const {name, surname, passive, race, role} = req.body;
    const data = await service_champion.updateChampion(
        ChampionId, 
        name, 
        surname, 
        passive, 
        race, 
        role)
      res.status(200).json(data);
  } catch (error){
    next(error);
  }
});

/* http://localhost:5000/api/v1/Champions/ChampionId */
Champion_route.delete('/:ChampionId', async(req,res,next)=>{
  try {
    const {ChampionId} = req.params;
    const data = await service_champion.removeChampion(ChampionId);
      res.status(200).json(data);
  } catch (error){
    next(error);
  }
});

module.exports = Champion_route;
const champion_Model = require('../models/champion.model');


class championService{

  async createChampion( newChampion){
    newChampion.save(newChampion);
    return newChampion;
  }

  async listChampions() {
    return champion_Model.find();
  }

  async showChampion(championId) {
    return champion_Model.findOne({ _id: championId }).then((championFind) => {
        if (!championFind) throw Boom.notFound('No se encontro el campeon buscado');
        return championFind;
      }
    );
  }

  async updateChampion(championId, name, surname, passive, race, role) {
    return champion_Model.findById({ _id: championId }).then((championFind) => {
      if (!championFind) throw Boom.notFound('No se encontro el campeon');
      return champion_Model.updateOne(
        {championId},
        {name, surname, passive, race, role}
      );
    });

  }

  async removeChampion(championId) {
    return champion_Model.findById({ _id: championId }).then (
      (championFind) => {
        if (!championFind) throw Boom.notFound('No se encontro el campeon');
        return champion_Model.deleteOne(championFind);
      }
    );
  }
}
module.exports = championService;
// en los controladores van las funciones que se encargan de ejemplo obtener los personajes y realizar filtros con dichos personajes

const axios = require("axios");
const db_mock_data = require("../../db_mock_data.json");
const { Character } = require("../db"); // hago un destructuring del modelo de la base de datos que necesito

//DATA BASE INFO - CHARACTER

const getAllInfoCharacter = async () => {
  try {
    //recorro el json harcodeado, una vez lo recorro guardo en la db en el modelo character todos los datos, que me pide el challenger
    db_mock_data.character.forEach(async (character) => {
      await Character.findOrCreate({
        where: {
          image: character.image,
          name: character.Name.toLocaleLowerCase(),
          age: character.Age,
          weight: character.weigth,
          history: character.Historia,
          associatedMovie: character.associatedMovie,
        },
      });
    });
    return await Character.findAll();
  } catch (error) {
    console.log(error);
  }
};

// ahora trabajar con la base de datos donde esta toda la info de los personajes
const getCharacter = async () => {
    const allInfo =  await Character.findAll(
) 
    const mapInfo =  await allInfo.map ( el => {
       return {
           id : el.id,
           nombre : el.name,
           image : el.image ,
        }
    })
    return mapInfo
}

const SearchCharacterByName = async (nameCharacter) =>{

  try {
    const character = await Character.findAll({
    where: { name: { [Op.substring]: nameCharacter } },
		});
    return character
    
  } catch (error) {
    console.log(error)
  }
  
}
module.exports = {
  getAllInfoCharacter,
  getCharacter,
  SearchCharacterByName
};

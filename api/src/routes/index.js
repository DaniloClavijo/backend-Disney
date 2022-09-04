const { Router } = require('express');

const characterRoute = require("./character")

const router = Router();

//POINT 3 CHALLENGE LIST OF CHARACTERS , I NEED SHOW IMAGE AND NAME , ENDPOINT /CHARACTERS
// que debo hacer para mostrar tanto nombre como imagen de un personaje? debo tener un mock de datos para poder mostrarlos. esos datos podria harcodearlos y guardarlos en un objeto. 

router.use("/character" , characterRoute)

module.exports = router;
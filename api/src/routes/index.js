const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios')
/* const {} = require('../db'); */
const db = require('../db')



const router = Router();

//POINT 3 CHALLENGE LIST OF CHARACTERS , I NEED SHOW IMAGE AND NAME , ENDPOINT /CHARACTERS
// que debo hacer para mostrar tanto nombre como imagen de un personaje? debo tener un mock de datos para poder mostrarlos. esos datos podria harcodearlos y guardarlos en un objeto. 

router.get('/characters' ,(req,res) =>{
    res.json({
        title : 'hellow worlddd'
    })
})



module.exports = router;
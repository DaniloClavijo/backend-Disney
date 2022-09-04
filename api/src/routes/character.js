const {Router} =require('express')
const router = Router();

const characterController = require('../controllers/Character')

//Ruta para cargar y obtener los personajes

router.get("/" , async (req,res,next) =>{
    try {
        const character = await characterController.getCharacter();
        res.json({
            status : "Api info loaded" , 
            results: character,
        })
        
    } catch (error) {
        console.log(error)
        
    }
})

module.exports = router

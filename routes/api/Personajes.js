const router = require('express').Router();

const {Personaje} = require('../../bd');

router.get('/',  async (req, res) => {
   const pers =  await Personaje.findAll({
            attributes: ['id','nombre', 'imagen']
   });

   res.json(pers);

});

router.post('/',  async (req, res) => {
    const pers =  await Personaje.create(req.body);
    res.json(pers);
 
 });

 router.put('/:id',  async (req, res) => {
    //validaciones si exite la id
    await Personaje.update(req.body , {
        where : {id: req.params.id}
    })
    res.json({succes:  'se ha modificado'});
 });

 router.delete('/:id',  async (req, res) => {
     //validaciones si exite la id
    await Personaje.destroy({
        where : {id: req.params.id}
    })
    res.json({succes:  `se ha eliminado por completo la id ${req.params.id}`});
 });

module.exports =  router;
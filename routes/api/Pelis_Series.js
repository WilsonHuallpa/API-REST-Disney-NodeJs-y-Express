const router = require('express').Router();

const {Peli_Serie} = require('../../bd');

router.get('/',  async (req, res) => {
   const peli_serie =  await Peli_Serie.findAll({

        attributes: ['id','imagen', 'titulo', 'createdAt']
    });
   res.json(peli_serie);

});

router.post('/',  async (req, res) => {
    const peli_serie =  await Peli_Serie.create(req.body);
    res.json(peli_serie);
 
 });

 router.put('/:id',  async (req, res) => {
    //validaciones si exite la id
    await Peli_Serie.update(req.body , {
        where : {id: req.params.id}
    })
    res.json({succes:  'se ha modificado'});
 });

 router.delete('/:id',  async (req, res) => {
     //validaciones si exite la id
    await Peli_Serie.destroy({
        where : {id: req.params.id}
    })
    res.json({succes:  `se ha eliminado por completo la id ${req.params.id}`});
 });

module.exports =  router;
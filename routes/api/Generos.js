const router = require('express').Router();

const {Genero} = require('../../bd');

router.get('/',  async (req, res) => {
   const genero =  await Genero.findAll();
   res.json(genero);

});

router.post('/',  async (req, res) => {
    const genero =  await Genero.create(req.body);
    res.json(genero);
 
 });

 router.put('/:id',  async (req, res) => {
    //validaciones si exite la id
    await Genero.update(req.body , {
        where : {id: req.params.id}
    })
    res.json({succes:  'se ha modificado'});
 });

 router.delete('/:id',  async (req, res) => {
     //validaciones si exite la id
    await Genero.destroy({
        where : {id: req.params.id}
    })
    res.json({succes:  `se ha eliminado por completo la id ${req.params.id}`});
 });

module.exports =  router;
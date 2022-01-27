
const Sequelize = require('sequelize');
const PersonaModel = require('./models/Personajes');
const PeliSerieModel = require('./models/PeliSerie');
const GeneroModel = require('./models/Genero');
const UserModel = require('./models/user');
require('dotenv').config();

//conexion
const sequelize =  new Sequelize(process.env.DBNAME, process.env.USSER, process.env.PASSWORD,{ host: 'remotemysql.com', dialect: 'mysql'});

const Personaje = PersonaModel(sequelize, Sequelize);
const Peli_Serie = PeliSerieModel(sequelize, Sequelize);
const Genero = GeneroModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false})
    .then(() => {
        console.log('Tablas sincronizadas')
    })

module.exports = {
    Personaje,
    Peli_Serie,
    Genero,
    User
}

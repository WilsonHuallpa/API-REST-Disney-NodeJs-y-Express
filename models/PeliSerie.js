module.exports = (sequelize, type) => {
    return sequelize.define('Peli_Serie', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imagen: type.STRING,
        titulo: type.STRING,
        calificacion: type.INTEGER,
        personajeAsociado: type.STRING
    })
}
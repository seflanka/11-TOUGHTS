const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
} )

try {
    sequelize.authenticate()
    console.log('Conecatamos com sucesso')
}catch(err) {
    console.log(`Não foi possicel conectar: ${err}`)
}

module.exports = sequelize 
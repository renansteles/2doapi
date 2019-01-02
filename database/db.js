const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('db','','',{
    host : 'localhost',
    operatorsAliases : false,
    dialect : 'sqlite',
    storage : ''

})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
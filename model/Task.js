const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
    'todos',
    {
        id : {
         type : Sequelize.INTEGER,
         primaryKey : true,
         autoIncrement : true   
        },
        task : {
            type : Sequelize.STRING
        },
        category : {
            type : Sequelize.INTEGER
        }
    },
    {
        timestamps : false
    }
)
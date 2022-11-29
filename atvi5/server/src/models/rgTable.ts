import {  } from 'mysql2';
const Sequelize = require('sequelize');

const database = require('./connect')
const usersId = require('./userTable')
 
const rgs = database.define('rgs', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    valor: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})
rgs.belongsTo(usersId, {
    constraint: true,
    foreignKey: 'usersId'
})

//rgs.sync({ alter: true });

module.exports = rgs;

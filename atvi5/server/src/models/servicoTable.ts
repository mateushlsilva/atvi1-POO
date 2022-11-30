import {  } from 'mysql2';
const Sequelize = require('sequelize');

const database = require('./connect')
 
const servicos = database.define('servicos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})


//servicos.sync({ alter: true });

module.exports = servicos;

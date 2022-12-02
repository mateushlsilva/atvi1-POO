import {  } from 'mysql2';
const Sequelize = require('sequelize');

const database = require('./connect')
 
const produtos = database.define('produtos', {
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
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    }
})


//produtos.sync({ alter: true });

module.exports = produtos;

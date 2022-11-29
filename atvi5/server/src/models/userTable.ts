import {  } from 'mysql2';
const Sequelize = require('sequelize');

const database = require('./connect')

 
const users = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nameSocial: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    }
})

users.sync({ alter: true });

module.exports = users;

import {  } from 'mysql2';
const Sequelize = require('sequelize');

const database = require('./connect')
const usersId = require('./userTable')
const produtoId = require('./produtoTable')

usersId.belongsToMany(produtoId, { through: 'usuarioProdutos' });
produtoId.belongsToMany(usersId, { through: 'usuarioProdutos' });

const usuarioProdutos = database.define('usuarioProdutos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usersId: {
        type: Sequelize.INTEGER,
        references: {
          model: usersId, 
          key: 'id'
        }
      },
      produtoId: {
          type: Sequelize.INTEGER,
          references: {
            model: produtoId, 
            key: 'id'
         }
      }
})

//usuarioProdutos.sync({ alter: true });

module.exports = usuarioProdutos;

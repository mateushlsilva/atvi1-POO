import {  } from 'mysql2';
const Sequelize = require('sequelize');

const database = require('./connect')
const userId = require('./userTable')
const produtoId = require('./produtoTable')

userId.belongsToMany(produtoId, { through: 'usuarioProdutos' });
produtoId.belongsToMany(userId, { through: 'usuarioProdutos' });

const usuarioProdutos = database.define('usuarioProdutos', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: userId, 
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

import {  } from 'mysql2';
const Sequelize = require('sequelize');

const database = require('./connect')
const userId = require('./userTable')
const servicoId = require('./servicoTable')

userId.belongsToMany(servicoId, { through: 'usuarioServicos' });
servicoId.belongsToMany(userId, { through: 'usuarioServicos' });

const usuarioServicos = database.define('usuarioServicos', {
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
    servicoId: {
        type: Sequelize.INTEGER,
        references: {
          model: servicoId, 
          key: 'id'
        }
    }
})

//usuarioServicos.sync({ alter: true });

module.exports = usuarioServicos;

import {  } from 'mysql2';
const Sequelize = require('sequelize');

const database = require('./connect')
const usersId = require('./userTable')
const servicoId = require('./servicoTable')

usersId.belongsToMany(servicoId, { through: 'usuarioServicos' });
servicoId.belongsToMany(usersId, { through: 'usuarioServicos' });

const usuarioServicos = database.define('usuarioServicos', {
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

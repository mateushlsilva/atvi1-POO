import {  } from 'mysql2';
const Sequelize = require('sequelize');

const database = require('./connect')
const usersId = require('./userTable')
const telefoneId = require('./telefoneTable')

usersId.belongsToMany(telefoneId, { through: 'usuarioServicos' });
telefoneId.belongsToMany(usersId, { through: 'usuarioServicos' });

const usuarioTelefone = database.define('usuarioTelefone', {
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
      telefoneId: {
          type: Sequelize.INTEGER,
          references: {
            model: telefoneId, 
            key: 'id'
         }
      }
})

//usuarioTelefone.sync({ alter: true });

module.exports = usuarioTelefone;

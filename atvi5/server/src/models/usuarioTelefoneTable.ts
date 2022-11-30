import {  } from 'mysql2';
const Sequelize = require('sequelize');

const database = require('./connect')
const usersId = require('./userTable')
const telefoneId = require('./telefoneTable')

usersId.belongsToMany(telefoneId, { through: 'usuarioTelefones' });
telefoneId.belongsToMany(usersId, { through: 'usuarioTelefones' });

const usuarioTelefone = database.define('usuarioTelefones', {
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

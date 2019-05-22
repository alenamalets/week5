const Sequelize = require('sequelize')
const sequelize = require('../db')

const Company = sequelize.define('companies', {
    name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  foundingYear: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },
}, {
  timestamps: false,
  tableName: 'companies'
})

module.exports = Company
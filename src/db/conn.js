const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemysql', 'root', 'P@ssword!', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize
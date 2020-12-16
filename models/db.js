const Sequelize = require("sequelize")

const sequelize = new Sequelize('celke', 'celkeone', 'digojales0205',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
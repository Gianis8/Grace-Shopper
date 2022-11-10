
const Sequelize  = require("sequelize")
const db = require('./database')
const order = require('./order')
const user = require('./user')
const order_shoe = require('./order-shoe')
const shoe = require('./shoe')

//establish associations between your models
order.belongsTo(user)
user.hasMany(order)

shoe.belongsToMany(order, { through: order_shoe })
order.belongsToMany(shoe, { through: order_shoe })

module.exports = {
  db,
  shoe,
  order,
  user,
  order_shoe
}

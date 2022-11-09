const Sequelize = require('sequelize')
const db = require('./database')

const order = db.define("order", {
    cost: {
        type: Sequelize.DECIMAL,
        defaultValue: 0
    },
    shippingAddress: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.ENUM('cart','complete'),
        allowNull: false,
        defaultValue: "cart"
    }
})

module.exports = order
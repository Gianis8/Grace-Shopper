const Sequelize = require("sequelize")
const db = require('./database')

const order_shoe = db.define("order_shoe", {
    // orderId: {
    //     type: Sequelize.INTEGER,

    // },
    unitPrice: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
            min: 0
        }
    },
    quantity: {
        type:Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
            min: 0
        }
    }
})

module.exports = order_shoe
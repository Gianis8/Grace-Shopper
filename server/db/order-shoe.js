const Sequelize = require("sequelize")
const db = require('./database')

const order_shoe = db.define("order_shoe", {
    unitPrice: {
        type: Sequelize.DECIMAL,
        defaultValue: 0,
        validate: {
            min: 0
        }
    },
    quantity: {
        type:Sequelize.INTEGER,
        defaultValue: 1,
        validate: {
            min: 0
        }
    }
})
module.exports = order_shoe
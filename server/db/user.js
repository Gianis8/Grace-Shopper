const Sequelize = require("sequelize")
const db = require("./database")

const user = db.define("user", {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    card: {
        type: Sequelize.STRING,
        validate: {
            isCreditCard:true
        }
    }
})

module.exports = user
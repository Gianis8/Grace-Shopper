const { loremIpsum } = require("lorem-ipsum")
const Sequelize = require("sequelize")
const db = require("./database")

const shoe = db.define("shoe", {
    name: {
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty:true
        }
    },
    size: {
        type:Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty:true,
            min: 1
        }
    },
    price: {
        type:Sequelize.DECIMAL,
        allowNull: false,
        validate: {
            min: 0,
            notEmpty: true
        }
    },
    brand: {
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: true
        }
    },
    type: {
        type:Sequelize.ENUM("casual","athletic"),
        allowNull:false,
        defaultValue:"casual"
    },
    color: {
        type:Sequelize.STRING,
        
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: loremIpsum(80)
    },
    imageUrl: {
        type: Sequelize.TEXT,
        allowNull:false,
        defaultValue: "https://cms-cdn.goat.com/1500/938b1ad59a16-f0e9-be11-4380-05378222.jpeg"
    }
})

module.exports = shoe
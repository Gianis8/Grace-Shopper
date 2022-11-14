const Sequelize = require("sequelize")
const db = require("./database")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 5;

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

/**
 * instanceMethods
 */
 user.prototype.correctPassword = function(candidatePwd) {
    //we need to compare the plain version to an encrypted version of the password
    return bcrypt.compare(candidatePwd, this.password);
  }
  
  user.prototype.generateToken = function() {
    return jwt.sign({id: this.id}, process.env.JWT)
  }
  
  /**
   * classMethods
   */
  user.authenticate = async function({ username, password }){
      const user = await this.findOne({where: { username }})
      if (!user || !(await user.correctPassword(password))) {
        const error = Error('Incorrect username/password');
        error.status = 401;
        throw error;
      }
      return user.generateToken();
  };
  
  user.findByToken = async function(token) {
    try {
      const {id} = await jwt.verify(token, process.env.JWT)
      const user = user.findByPk(id)
      if (!user) {
        throw 'nooo'
      }
      return user
    } catch (ex) {
      const error = Error('bad token')
      error.status = 401
      throw error
    }
  }
  
  /**
   * hooks
   */
  const hashPassword = async(user) => {
    //in case the password has been changed, we want to encrypt it with bcrypt
    if (user.changed('password')) {
      user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
    }
  }
  
  user.beforeCreate(hashPassword)
  user.beforeUpdate(hashPassword)
  user.beforeBulkCreate(users => Promise.all(users.map(hashPassword)))
'use strict';

const bcrypt = require('bcrypt');



module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    profilePic: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
      instanceMethods: {
        validatePassword(password) {
          return bcrypt.compareSync(password, this.password);
        },
      },

      hooks: {
        beforeCreate: (user, options) => {
          if (user.password) {
            return bcrypt.hash(user.password, 10).then(hash => user.password = hash);
          }
        }
      }
  });
  return User;
};
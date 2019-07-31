'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    Name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    UserName: {
      type:DataTypes.STRING,
      allowNull: false
    }
    Email: {
      type:DataTypes.STRING,
      allowNull: false
    }
    Password: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};

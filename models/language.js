'use strict';
module.exports = function(sequelize, DataTypes) {
  var Language = sequelize.define('Language', {
    name: DataTypes.STRING,
    imgPath: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Language.hasMany(models.Video,{ foreignKey: 'languageId'});
      }
    }
  });
  return Language;
};
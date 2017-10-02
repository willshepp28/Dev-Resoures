'use strict';
module.exports = function(sequelize, DataTypes) {
  var Video = sequelize.define('Video', {
    languageId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    vidPath: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Video.belongTo(models.Language, { foreignKey: 'languageId'});
      }
    }
  });
  return Video;
};
'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Languages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        required: true
      },
      imgPath: {
        type: Sequelize.STRING,
        defaultValue: 'https://68.media.tumblr.com/avatar_eb0da7ff692a_128.png'

      },
      description: {
        type: Sequelize.TEXT,
        required: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Languages');
  }
};


// https://68.media.tumblr.com/avatar_eb0da7ff692a_128.png
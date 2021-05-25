'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employees', {
      id: {
            allowNull:false,
            primaryKey:true,
            autoIncriment:true,
            type:Sequelize.INTEGER
      },

      name:{
            type:Sequelize.STRING
      },

      status:{
        type:Sequelize.STRING
      },

      selary:{
        type:Sequelize.STRING
      },

      phone:{
        type:Sequelize.STRING,
        unique:true
      },

      email:{
        type:Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }


    })
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable('employees')
  }
};

'use strict';
module.exports = (sequelize, DataType) => {
    const Employee = sequelize.define('employee', {

        id: {
            allowNull: false,
            primaryKey: true,
            autoIncriment: true,
            type: DataType.INTEGER
        },

        name: {
            type: DataType.STRING
        },

        status: {
            type: DataType.STRING
        },

        selary: {
            type: DataType.STRING
        },

        phone: {
            type: DataType.STRING,
            unique: true
        },

        email: {
            type: DataType.STRING
        },
          
    })

    Employee.associate=function(models){

    }

    return Employee
}
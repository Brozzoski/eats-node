// const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {

        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false

        },
    })
    return User;
}
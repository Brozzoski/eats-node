// const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('recipe', {

        title: {
            type: DataTypes.STRING,
            allowNull:false
        },
        entry: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // recipeID: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        owner: {
            type: DataTypes.INTEGER,
        
        }
    })
    return Recipe;
};
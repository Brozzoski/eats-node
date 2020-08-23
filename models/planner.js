// const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const planner = sequelize.define('planner', {

        breakfast: {
            type: DataTypes.INTEGER,  //recipe ID from API
            allowNull:false
        },
        lunch: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dinner: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        day: {
            type: DataTypes.STRING,
            allowNull: false
        },
           recipeID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER,
            
        }
    })
    return planner;
};
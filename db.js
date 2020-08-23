const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'Eats',
  'postgres',
  'runMoonmelon',
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);

sequelize.authenticate().then(
  function ( ) {
    console.log('Connected to Eats database');
  },
  function (err) {
    console.log(err);
  }
);

module.exports = sequelize;

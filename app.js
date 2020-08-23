
//! ENV
require('dotenv').config ( );

//! EXPRESS
const express = require ('express');
const app = express( );


//! CONTROLLERS
const recipe = require ('./controllers/recipecontroller');
const user = require ('./controllers/usercontroller');
const planner = require ('./controllers/plannercontroller');

//! DATABASE
const sequelize = require ('./db');
sequelize.sync( );
app.use(express.json( ) );
app.use(require('./middleware/header'));

//!ROUTES
app.use('/user', user);
app.use('/recipe', recipe);
app.use('/planner', planner);

//! LISTENING 

// app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}`))


// app.use('/test', function (req, res) {
//   res.send('This is a message from the test endpoint on the server!');
//   });
  
  app.listen(3000, () => {
      console.log('App listening on port 3000!');
  });
  
  
  // let express = require('express');
  // let app = express( );

// sequelize.sync({force: true})

// app.use(require( './middleware/headers' ) );


/* ********************
     * Exposed Route *
***********************/





/********Protected Route**************/




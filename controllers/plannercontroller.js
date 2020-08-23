const express = require('express');
const router = express.Router( );
const validateSession = require('../middleware/validate-session');
const planner = require('../db').import('../models/planner');
// const { TimeoutError } = require('sequelize/types');

router.get('/practice', function (req, res) 
  {
  res.send('Hey! This is a practice route!')
  });


// const express = require('express')
// const router = express.Router()



const Planner = require('../db').import('../models/planner');
// const validateSession = require('../middleware/validate-session');

// router.get('/', (req, res) => res.send('I love planners!'));

//! GET ALL 
// router.get('/', validateSession, (req, res) => {
router.get('/',  (req, res) => {
  Planner.findAll()
        .then(planner => res.status(200).json(planner))
        .catch(err => res.status(500).json({ error: err }))
})

//! POST 
router.post('/create',  (req, res) => {
    const plannerFromRequest = {

    breakfast: req.body.planner.breakfast,
    lunch: req.body.planner.lunch,
    dinner: req.body.planner.dinner,
    day: req.body.planner.day,
    recipeID: req.body.planner.recipeID,
    owner: req.user.id,
  }

    

    Planner.create(plannerFromRequest)
        .then(planner => res.status(200).json(planner))
        .catch(err => res.status(500).json({ error: err }))    
})

//! GET by Name
router.get('/:name', (req, res) => {  
  Planner.findOne({ where: { nameOfPlanner: req.params.name }})  
      .then(planner => res.status(200).json(planner))
      .catch(err => res.status(500).json({ error: err }))
  })
  
//! UPDATE by ID
router.put('/:id', (req, res) => {
  Planner.update(req.body, { where: { id: req.params.id }})  
      .then(planner => res.status(200).json(planner))
      .catch(err => res.status(500).json({error: err})) 
  })

//! DELETE
router.delete('/:id', (req, res) => {
    Planner.destroy({
        where: { id: req.params.id }
    })
    .then(planner => res.status(200).json(planner))
    .catch(err => res.status(500).json({ error: err }))
})   

module.exports = router;









  /*  ********PLANNER CREATE ***********/
//   router.post( '/create', validateSession, (req, res) => {
//   const recipeEntry = {
//     breakfast: req.body.planner.breakfast,
    // lunch: req.body.planner.lunch,
    // dinner req.body.planner.dinner,
//     day: req.body.planner.day,
//     owner: req.user.id
//   }
//   planner.create(plannerlEntry)
//   .then( planner=> res.status(200).json(planner ) )
//   .catch(err => res.status(500).json({ error: err } ) )
// })

// ****** GET ALL ENTRIES ******* 

// router.get("/", (req, res) => {
//   planner.findAll( )
//   .then(planners => res.status(200).json( planners ) )
//   .catch(err => res.status(500).json( { error: err } ) )
  
// });

// ****** GET ENTRIES BY USER *******
// router.get("/mine", validateSession, (req, res) => {
//   let userid = req.user.id
//   planner.findAll({
//     where: { owner: userid }
//   })
//   .then(planners => res.status(200).json( planners) )
//   .catch(err => res.status(500).json( { error: err } ) )

// });

// ****** GET ENTRIES BY TITLE *******
// router.get('/:title', function (req, res) {
//   let title = req.params.title;

//   planner.findAll( {
//     where: { title: title }
//   })
//   .then(planners => res.status(200).json( planners ) )
//   .catch(err => res.status(500).json({ error: err } ) );

// });

// ****** UPDATING A RECIPE ENTRY *******

// router.put("/update/:entryId", validateSession, function (req, res) {
//   const updateRecipeEntry = {
//     title: req.body.recipe.title,
//     date: req.body.recipe.date,
//     entry: req.body.recipe.entry,
//   };
//   const query = {where:{ id: req.params.entryId, owner:  req.user.id }  };

//   recipe.update(updateRecipeEntry, query)
//   .then( (jrecipes) => res.status(200).json( recipes ) )
//   .catch( (err) => res.status(500).json( { error: err } ) );
// });

// ****** DELETING A RECIPE ENTRY *******

// router.delete("/delete/:id", validateSession, function (req, res) {
//   const query = {where: { id: req.params.id, owner: req.user.id } };

//   recipe.destroy(query)
//   .then( () => res.status(200).json( { message: "Recipe Removed" } ) )
//   .catch( (err) => res.status(500).json( { error: err } ) );
// });




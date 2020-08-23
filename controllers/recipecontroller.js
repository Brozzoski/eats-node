// const express = require('express')
// const router = express.Router()

const router = require('express').Router();
const Recipe = require('../db').import('../models/recipe');





//! GET ALL 

router.get('/',  (req, res) => {
    Recipe.findAll()
        .then(recipe => res.status(200).json(recipe))
        .catch(err => res.status(500).json({ error: err }))
})

//! POST 
router.post('/create',  (req, res) => {
    const recipeFromRequest = {

        title: req.body.recipe.title,
        entry: req.body.recipe.entry,
        owner: req.body.recipe.owner
        // recipeID: req.body.recipeID

    }

    Recipe.create(recipeFromRequest)
        .then(recipe => res.status(200).json(recipe))
        .catch(err => res.status(500).json({ error: err }))    
})

//! GET by Name
router.get('/:name', (req, res) => {  
    Recipe.findOne({ where: { recipeTitle: req.params.name }})  
      .then(recipe => res.status(200).json(recipe))
      .catch(err => res.status(500).json({ error: err }))
  })
  
//! UPDATE by ID
router.put('/:id', (req, res) => {
    Recipe.update(req.body, { where: { id: req.params.id }})  
      .then(recipe => res.status(200).json(recipe))
      .catch(err => res.status(500).json({error: err})) 
  })

//! DELETE
router.delete('/:id', (req, res) => {
    Recipe.destroy({
        where: { id: req.params.id }
    })
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.status(500).json({ error: err }))
})   

module.exports = router;
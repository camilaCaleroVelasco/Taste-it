const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");
const Recipe = require('/../models/Recipes');
module.exports = router;
// get list of all items
router.get('/', (req, res) => {
    Recipe.find()
    .then((recipes) => res.json(recipes))
    .catch((err) => res.status(404).json({ norecipesfound: 'No Recipes found' }));
});
// get an item by id
router.get('/:id', (req, res) => {
    Recipe.findById(req.params.id)
    .then((recipe) => res.json(recipe))
    .catch((err) => res.status(404).json({ norecipefound: 'No Recipe found' }));
});
// add a new item
router.post('/', bodyParser.json(), (req, res) => {
    Recipe.create(req.body)
    .then((recipe)=> res.json({ msg: 'Recipe added successfully' }))
    .catch((err)=> res.status(400).json({ error: 'Error'}));
   });
// update an item
router.put('/:id', bodyParser.json(), (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body)
    .then((recipe) => res.json({ msg: 'Updated successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to update the Database' }));
});
// delete an item
router.delete('/:id', (req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
    .then((recipe)=> res.json({ msg: 'Recipe entry deleted successfully' }))
    .catch((err)=> res.status(404).json({ error: 'No such a recipe'}));
});


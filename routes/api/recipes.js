const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");
const Recipe = require('../../models/Recipes');
module.exports = router;

// get list of all items
router.get('/', async (req, res) => {
    await Recipe.find()
    .then((recipes) => res.json(recipes))
    .catch((err) => res.status(404).json({ norecipesfound: 'No Recipes found' }));
});
// get an item by id
router.get('/:id', (req, res) => {
    Recipe.findById(req.params.id)
    .then((recipe) => res.json(recipe))
    .catch((err) => res.status(404).json({ norecipefound: 'No Recipe found' }));
});

router.post('/', async (req, res) => {
    try {
        // Extract recipe data from the request body
        const { creator, title, description, link, ingredients, measurements, recommendedTools, media, directions } = req.body;

        // Create a new recipe document
        const newRecipe = new Recipe({
            creator,
            title,
            description,
            link,
            ingredients,
            measurements,
            recommendedTools,
            media,
            directions
        });

        // Save the new recipe to the database
        await newRecipe.save();

        // Respond with success message
        res.status(201).json({ message: 'Recipe created successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error creating recipe:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// update an item 
router.put('/:id', bodyParser.json(), (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body)
    .then((recipe) => res.json({ msg: 'Updated successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to update the Database' }));
});
// delete an item
router.delete('/:id', async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        const recipeId = req.params.id;
        console.log('Recipe ID to delete:', recipeId);
        if (!deletedRecipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.json({ message: 'Recipe deleted successfully', recipe: deletedRecipe });
    } catch (error) {
        console.error('Error deleting recipe:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


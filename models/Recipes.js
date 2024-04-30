const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
    },
    ingredients: {
        type: String,
    },
    measurements: {
        type: String,
    },
    tools: {
        type: String,
    },
    media: {
        type: String,
        required: true,
    },
    directions: {
        type: String,
    },
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);

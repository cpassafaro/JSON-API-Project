const mongoose = require('../db/connection')

const Schema = mongoose.Schema;

const recipeSchema = new Schema ({
    title: String,
    summary: String,
    readyInMinutes: Number,
    servings: Number,
    image: String,
    cuisines:[],
    vegetarian: Boolean,
    vegan: Boolean,
    dairyFree:Boolean,
    ingredients: [],
    instructions:[],
})

const Recipes = mongoose.model('Recipes', recipeSchema);
module.exports = Recipes
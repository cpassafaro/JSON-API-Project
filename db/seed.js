const Recipes = require('../models/Recipes');
const data = require('./data.json');


const recipeData = data.map(item => {
    let recipe = {};
    recipe.title= item.title;
    recipe.summary = item.summary;
    recipe.readyInMinutes= item.readyInMinutes;
    recipe.servings= item.servings;
    recipe.image = item.image;
    recipe.cuisines = item.cuisines;
    recipe.vegetarian= item.vegetarian;
    recipe.vegan= item.vegan;
    recipe.dairyFree= item.dairyFree;
    recipe.ingredients=  item.extendedIngredients;
    recipe.instructions= item.analyzedInstructions;
    return recipe;
})



Recipes.deleteMany({})
    .then(() => {
        Recipes.create(recipeData)
            .then(res => {
                console.log(res)
                process.exit()
            })
            .catch(err => {
                console.log(err)
            })
})
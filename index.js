const express = require('express');
const app = express();
const recipeController = require('./controllers/recipeController')
const Recipes = require('./models/Recipes');

app.get('/', recipeController.index);
app.get('/:name', recipeController.name)





app.listen(3000, () => console.log('Listening on port 3000'))


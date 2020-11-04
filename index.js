const express = require("express");
const app = express();
const recipeController = require("./controllers/recipeController");
// const Recipes = require('./models/Recipes');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", recipeController.index);
//find recipe by style of food
app.get("/:name", recipeController.name);
//create a new recipe
app.post("/new", recipeController.create);
//update a recipe
app.put("/recipe/:name", recipeController.edit);
//delete a recipe
app.delete("/remove/:name", recipeController.delete);

app.listen(3000, () => console.log("Listening on port 3000"));

const express = require("express");
const app = express();
const cors = require("cors");
const recipeController = require("./controllers/recipeController");
// const Recipes = require('./models/Recipes');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors());

app.get("/", recipeController.index);
//find recipe by style of food
app.get("/searchByStyle/:name", recipeController.name);
//find by the name
app.get('/searchByTitle/:name', recipeController.searchByTitle)
//create a new recipe
app.post("/new", recipeController.create);
//update a recipe
app.put("/recipe/:name", recipeController.edit);
//delete a recipe
app.delete("/remove/:name", recipeController.delete);

app.set("port", process.env.PORT || 8080);


app.listen(app.get("port"), () => {
    console.log(`Check Port: ${app.get('port')}`)
})




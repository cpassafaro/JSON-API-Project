const Recipes = require('../models/Recipes');


//this came from stack overflow https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  



module.exports = {
    index: (req,res) => {
        Recipes.find({})
            .then(recipes => {
                res.json(recipes)
            })
    },
    name: (req,res) => {
        Recipes.find({})
            .then(recipes => {
                let newRecipes = [];
                let correctGenre=false;
                //loop through each recipe in the data.json array
                recipes.forEach(element => {
                    let cuisineArray = element.cuisines
                    //capitalize the first letter of each genre because chrome automatically make it lowercase so it won't match the genres which are capitalized
                    let name = capitalizeFirstLetter(req.params.name)
                    //loop through the cuisines array and see if you can match a genre of cuisine
                    //includes returns a true or false
                    let correctGenre = cuisineArray.includes(name)
                    if(correctGenre == true){
                       return newRecipes.push(element)
                    }    
                })
                res.json(newRecipes)
            })
    }

}
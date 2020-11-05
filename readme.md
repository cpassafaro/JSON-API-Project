### JSON API PROJECT
________________

__Description__
_______________

API was created using the frameworks Node.js and express, and the database Mongodb in conjuction with the library mongoose. Testing was done with the application postman. This api provides information for recipes including title, summary, time to cook, servings, images, cuisine genre, ingredients, instructions, and whether or not the dish if vegetarian, vegan, or dairy free.

__Development Process__

__Date__ | __Progress__ | __Working On__ | 
----- | ---------- | --------- |
| 11/2/2020| API connection attempting to be established so that information can be seeded into mongodb database. | API connection giving some issues |
| 11/3/2020| API connection established and working. Filtered through a model and seeded into a local mongo database. Routes established through CRUD functinality. | Working on readme.


__API Accessibility__
_______________
- Users of this API can access a multitude of different recipes. They can be accessed in bulk or through searching by type of cuisine.
- User can also create more recipes, update existing ones, or delete through established routes.  


__Model__
```
recipeShema = {
    title = String,
    summary = String,
    readyInMinutes = Number,
    servings = Number,
    image = String,
    cuisines = [],
    vegetarian = Boolean,
    vegan = Boolean,
    dairyFree = Boolean,
    ingredients = [],
    instructions =[],
}
```


__Routes__
_____________

__Method__ | __Path__ | __Description__
| ---------- | ---------| --------------- |
| Get | localhost:3000/ | Gets all recipes in the user database | 
| Get | localhost:3000/:name | Place the style of cuisine you would like to retreive and they will populate below |
| Post | localhost:3000/new | This can create a new recipe via postman |
| Put | localhost:3000/recipe/:name | Place the name of the recipe behind the recipe backslash to find a recipe and edit it |
| Delete | localhost:3000/remove/:name | Place the name behind the remove backslach to find the recipe by name and remove that recipe |


__Tools used: Postman__




const axios = require('axios');
const unirest = require('unirest');
const API_KEY = "c40a9f3979dc415c9bedb13f41fb1449"
const fs = require('fs');

const url = 'https://api.spoonacular.com/recipes/informationBulk?ids=645348,645354,648279,648097,654327,642559,639557,1449643,651426,651407,663121,663144,663126,649048,649056,649062,647830,647799,647867,649300,653234,634751,649381,1098392,647675,632003,716298,653275,635263,636736,636743&apiKey=c40a9f3979dc415c9bedb13f41fb1449';

unirest.get(url)
    .header('X-RapidAPI-Key', API_KEY)
    .end(res => {
        if(res.status == 200){
            let jsonRecipes = JSON.stringify(res.body)
            fs.writeFile('data.json', jsonRecipes, err =>{
                if(err){
                    console.log(err)
                }else{
                    console.log('file created!')
                }
            })
        }
    })
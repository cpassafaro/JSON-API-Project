const axios = require('axios');
const unirest = require('unirest');
const API_KEY = "c40a9f3979dc415c9bedb13f41fb1449"
const fs = require('fs');

const url = 'https://api.spoonacular.com/recipes/complexSearch?query=Greek&apiKey=c40a9f3979dc415c9bedb13f41fb1449';

unirest.get(url)
    .header('X-RapidAPI-Key', API_KEY)
    .end(res => {
        if(res.status == 200){
            let jsonRecipes = JSON.stringify(res.body)
            fs.writeFile('/data.json', jsonRecipes, err =>{
                if(err){
                    console.log(err)
                }else{
                    console.log('file created!')
                }
            })
        }
    })
const axios = require('axios');
const unirest = require('unirest');
const API_KEY = "c40a9f3979dc415c9bedb13f41fb1449"
const fs = require('fs');

const url = 'https://api.spoonacular.com/recipes/informationBulk?ids=665379,637440,648910,716426,644826,716311,660231,663822,637099,637103,633754,640693,657933,662291,656817,1096208,649183,644482,660266,640134,640136,646034,652078,634710,648506,648460,795751,640062,715421,766453,716195,649411,633830,648565,658970,716217,642129,664830&apiKey=c40a9f3979dc415c9bedb13f41fb1449';

unirest.get(url)
    .header('X-RapidAPI-Key', API_KEY)
    .end(res => {
        if(res.status == 200){
            let jsonRecipes = JSON.stringify(res.body)
            fs.appendFile('data.json', jsonRecipes, err =>{
                if(err){
                    console.log(err)
                }else{
                    console.log('file created!')
                }
            })
        }
    })


// looking up more if you want to add
// unirest.get('https://api.spoonacular.com/recipes/complexSearch?cuisine=Vietnamese&apiKey=c40a9f3979dc415c9bedb13f41fb1449')
//     .header('X-RapidAPI-Key', API_KEY)
//     .end(res => {
//         // console.log(res)
//         let jsonRecipes = JSON.stringify(res.body)
//         fs.writeFile('experimental.json', jsonRecipes, err => {
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log('file created')
//             }
//         })
//     })
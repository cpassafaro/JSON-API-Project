const axios = require('axios');
const unirest = require('unirest');
const API_KEY = "c40a9f3979dc415c9bedb13f41fb1449"
const fs = require('fs');

const url = 'https://api.spoonacular.com/recipes/informationBulk?ids=715446,794349,782601,716426,715594,715497&apiKey=c40a9f3979dc415c9bedb13f41fb1449';

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


//looking up more if you want to add
// unirest.get('https://api.spoonacular.com/recipes/complexSearch?genre=Korean&apiKey=c40a9f3979dc415c9bedb13f41fb1449')
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
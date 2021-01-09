// async function getData(){
//     let APP_ID = "04d411ff";
//     let APP_KEY = "87a6a8b7fff76b8b11148c7c532f9cab"
//     let apiResponse = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
//     let apiData = apiResponse.json()
//     return apiData
// }
// getData().then(data=>{
//     console.log(data)
//     console.log(data.hits)
//     console.log(data.hits[0].recipe)
//     let image = data.hits[0].recipe.image
//     console.log(image)
//     let url = data.hits[0].recipe.url
//     console.log(url)
//     let healthLabels = data.hits[0].recipe.healthLabels
//     console.log(healthLabels)
//     let ingredientLines = data.hits[0].recipe.ingredientLines
//     console.log(ingredientLines)
//     let calories = data.hits[0].recipe.calories.toFixed(1)
//     console.log(calories)
//     let name = data.hits[0].recipe.label
//     console.log(name)
//     let nutrientsName = data.hits[0].recipe.totalNutrients
//     console.log(nutrientsName)
//     let vitaminsArray = []
//     vitaminsArray.push(nutrientsName.VITA_RAE,nutrientsName.VITB6A,nutrientsName.VITB12,nutrientsName.VITC,nutrientsName.VITD,nutrientsName.VITK1,nutrientsName.CHOLE,nutrientsName.FAT)
//     console.log(vitaminsArray)
// })
// .catch(err=>console.log((err)))


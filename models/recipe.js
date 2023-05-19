const mongoose = require('./connection.js')

///////////////////////////////
// MODELS
////////////////////////////////
const RecipeSchema = new mongoose.Schema({
    name: String,
    image: String,
    ingredients: String,
    instructions: String
})

const Recipe = mongoose.model('Recipe', RecipeSchema)
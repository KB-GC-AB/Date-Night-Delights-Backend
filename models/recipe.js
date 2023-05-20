const {mongoose} = require('./connection.js')

///////////////////////////////
// MODELS
////////////////////////////////
const RecipeSchema = mongoose.Schema({
    name: String,
    image: String,
    ingredients: String,
    instructions: String
})

const Recipe = mongoose.model('Recipe', RecipeSchema)
const recipesRouter = require("express").Router()
const Recipes = require("./recipes-model")


//at the moment can handle the name only, no steps yet
recipesRouter.post('/', (req, res) => {
    const name = {name:req.body.name}
    Recipes.addRecipe(name)
        .then(recipe => {
            res.status(200).json({data: recipe})
        })
        .catch(err => {
            res.status(500).json({data:req.body, err: err})
        })

})
module.exports = recipesRouter
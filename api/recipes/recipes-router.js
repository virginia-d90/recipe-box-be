const recipesRouter = require("express").Router()
const Recipes = require("./recipes-model")


//at the moment can handle the name only, no steps yet
recipesRouter.post('/', (req, res) => {
    //splits name from rest of body
    const name = {name:req.body.name}
    Recipes.addRecipe(name)
        .then(recipe => {
            //create array for steps once a recipe_id has been created
            const stepsMap = req.body.steps.map((step) => ({
                recipe_id: recipe.id,
                order: step.order,
                step: step.step
            }))
            Recipes.addSteps(stepsMap).then(() => {
                res.status(201).json({message: "recipe and steps added", data: recipe})
            });
            // res.status(200).json({data: recipe})
        })
        .catch(err => {
            res.status(500).json({data:req.body, err: err})
        })

})

recipesRouter.get('/:id', (req,res) => {
    const {id} = req.params;
    Recipes.findRecipeById(id)
        .then((evt) => {
            res.status(200).json(evt)
        })
})
module.exports = recipesRouter
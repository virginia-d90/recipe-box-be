const db = require("../../data/db-config");
const recipesRouter = require("./recipes-router");
const findById = (id) => {
    return db('recipes')
        .where({id})
        .first()

}

const findRecipeById = async(id) => {
    const recipe = await db('recipes').where({id}).first();
    const steps = await db('steps').where({ recipe_id: id}).select('*');

    const result = {...recipe, steps};
    return result
}
const addRecipe = async(obj) => {
    const [id] = await db('recipes').insert(obj).returning('id')
    return findRecipeById(id)
}

// function addSteps(arr){
//     return db('steps').insert(arr)
// }

const addSteps = async(arr) => {
    const [id] = await db('steps').insert(arr).returning('recipe_id')
    return findRecipeById(id)
}

module.exports = {
    findById,
    addRecipe,
    addSteps,
    findRecipeById
}
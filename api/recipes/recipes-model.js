const db = require("../../data/db-config");
const findById = (id) => {
    return db('recipes')
        .where({id})
        .first()
}
const addRecipe = async(obj) => {
    const [id] = await db('recipes').insert(obj).returning('id')
    return findById(id)
}

module.exports = {
    findById,
    addRecipe
}
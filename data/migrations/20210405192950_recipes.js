
exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
        tbl.increments();
        tbl.string("name", 255).notNullable();
        tbl.integer("creator_id").references(users.id).notNullable();
    })
    .createTable("steps", tbl => {
        tbl.increments();
        tbl.integer("recipe_id").references(recipes.id).notNullable();
        tbl.integer("step_order").notNullable();                                
        tbl.string("step").notNullable()
    })
    .createTable("ingredients", tbl => {
        tbl.increments();
        tbl.string("name", 255).notNullable();
    })                                                                                                                                                                                            
    .createTable("recipe_ingredients", tbl => {
        tbl.increments();
        tbl.integer("recipe_id").references(recipes.id).notNullable();
        tbl.integer("ingredient_id").references(ingredients.id);
        tbl.string("quantitiy", 255).notNullable();
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};

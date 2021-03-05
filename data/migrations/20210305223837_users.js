
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('username', 50).notNullable().unique().index();
      tbl.string('password', 50).notNullable();
      tbl.string('email', 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExixts('users');
};

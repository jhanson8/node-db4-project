/* jshint esversion:6 */

exports.up = function(knex) {
  // recipes table
  return (
    knex.schema
      .createTable("recipes", tbl => {
        tbl.increments();

        tbl
          .string("name")
          .notNullable()
          .index();
        // ingredients table
      })
      .createTable("ingredients", tbl => {
        tbl.increments();

        tbl
          .string("name")
          .notNullable()
          .index();
      })
      // recipe_ingredients table
      .createTable("recipe_ingredients", tbl => {
        tbl.increments();
        tbl
          .integer("recipe_id")
          .unique()
          .unsigned()
          .references("id")
          .inTable("recipes")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        tbl
          .integer("ingredient_id")
          .unique()
          .unsigned()
          .references("id")
          .inTable("ingredients")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        tbl.float("quantity").notNullable();
      })
      // instructions table
      .createTable("instructions", tbl => {
        tbl.increments();

        tbl
          .integer("recipe_id")
          .unique()
          .unsigned()
          .references("id")
          .inTable("recipes")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");

        tbl.string("instruction").notNullable();
      })
  );
};
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};

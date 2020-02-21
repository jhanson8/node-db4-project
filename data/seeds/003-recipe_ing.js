exports.seed = function(knex) {
  return knex("recipe_ingredients").insert([
    { recipe_id: 1, quantity: 1 },
    { recipe_id: 1, quantity: 2 },
    { recipe_id: 1, quantity: 3 },
    { recipe_id: 2, quantity: 4 },
    { recipe_id: 2, quantity: 5 },
    { recipe_id: 2, quantity: 6 }
  ]);
};

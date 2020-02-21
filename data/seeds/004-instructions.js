exports.seed = function(knex) {
  return knex("instructions").insert([
    { recipe_id: 1, instruction: "Cook ramen" },
    { recipe_id: 2, instruction: "Cook pho" }
  ]);
};

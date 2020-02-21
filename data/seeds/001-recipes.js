exports.seed = function(knex) {
  return knex("recipes").insert([{ name: "Ramen" }, { name: "Pho" }]);
};

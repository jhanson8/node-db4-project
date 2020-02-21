exports.seed = function(knex) {
  return knex("ingredients").insert([
    { name: "noodles" },
    { name: "chicken" },
    { name: "chicken broth" },
    { name: "vegetables" }
  ]);
};

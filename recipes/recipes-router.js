/*jshint esversion: 6 */
const express = require("express");

const Recipes = require("./recipes-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

module.exports = router;

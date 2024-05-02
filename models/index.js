// This file acts as a center point for all other models. Importing them and exporting them from one central location.

const User = require("./user");
const Thought = require("./thought");

module.exports = { User, Thought };

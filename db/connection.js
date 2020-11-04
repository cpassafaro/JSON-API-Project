const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/recipes", { useNewUrlParser: true });

module.exports = mongoose;
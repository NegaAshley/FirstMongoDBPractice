var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", {useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

//Add a new cat to the DB

//Retrieve all cats from the DB and console.log each one
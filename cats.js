var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", {useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

Cat.create

//Add a new cat to the DB

var meepo = new Cat({
    name: "Meepo",
    age: 5,
    temperament: "curious"
});

//Save cat to DB and have callback function once that is done

meepo.save(function(err, cat){
    if(err){
        console.log("Something went wrong!");
    }else{
        console.log("We just saved a cat to the DB!");
        console.log(cat);
    }
});

//Retrieve all cats from the DB and console.log each one
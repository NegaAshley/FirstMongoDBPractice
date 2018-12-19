var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", {useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

//Take cat schema and put it into a model

var Cat = mongoose.model("Cat", catSchema);

//Add a new cat to the DB

var meepo = new Cat({
    name: "Meepo",
    age: 5,
    temperament: "curious"
});

var mrPeaches = new Cat({
    name: "Mr. Peaches",
    age: 2,
    temperament: "energetic"
});

//Save cat to DB and have callback function once that is done

// meepo.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong!");
//     }else{
//         console.log("We just saved a cat to the DB!");
//         console.log(cat);
//     }
// });

// mrPeaches.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong!");
//     }else{
//         console.log("We just saved a cat to the DB!");
//         console.log(cat);
//     }
// });

//Another way to define and create a cat

Cat.create({
    name: "Speckles",
    age: 16,
    temperament: "sweet"
}, function(err, cat){
    if(err){
        console.log("Something went wrong!");
    }else{
        console.log("We just saved a cat to the DB!");
        console.log(cat);
    }
});

//Retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh no, error!");
        console.log(err);
    }else{
        console.log("All the cats:");
        console.log(cats);
    }
});
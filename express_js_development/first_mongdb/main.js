const mongoose = require("mongoose");

mongoose.connect(
 "mongodb://localhost:27017/recipe_db",
 {useNewUrlParser: true}
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const Subscriber = require("./models/subscriber")

var myQuery = Subscriber.findOne({
        name: "Malish Daniil"
    })
    .where("email", /daniil/);
myQuery.exec((error, data) => {
    if (data) console.log(data.name);
});
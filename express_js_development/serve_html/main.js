const port = 3000,
    express = require('express'),
    app = express();

const homeController = require('./controllers/homeController');
const errorController = require('./controllers/errorController');
const layouts = require("express-ejs-layouts")
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    {useNewUrlParser: true}
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});


const subscribersController = require("./controllers/subscribersController");

app.set("view engine", 'ejs')

app.get('/', (req, res) => {
    res.send("POST successfull!");
});

app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
    console.log(req.data);
    res.send(req.data);
});

app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);

app.get("/items/:vegetable", homeController.sendReqParam);
app.get("/name/:myName",homeController.respondWithName);

app.use(layouts);
app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
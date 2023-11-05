const express = require("express"),
    app = express(),
    errorController = require("./controllers/errorController"),
    homeController = require("./controllers/homeController"),
    subscribersController = require("./controllers/subscribersController"),
    layouts = require("express-ejs-layouts"),
    mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber");


mongoose.Promise = global.Promise;

mongoose.connect(
    "mongodb://localhost:27017/recipe_db"
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
    express.urlencoded({
    extended: false
    })
);
app.use(express.json());
app.use(homeController.logRequestPaths);

app.get("/name", homeController.respondWithName);
app.get("/items/:vegetable", homeController.sendReqParam);

app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
    res.render("subscribers", { subscribers: req.data });
});

app.get("/", homeController.index);
app.get("/courses", homeController.showCourses);

app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});


const Course = require("./models/course");
var testCourse, testSubscriber;
Course.create( {
    title: "Tomato Land",
    description: "Locally farmed tomatoes only",
    zipCode: 12345,
    vip: true,
    items: ["cherry", "heirloom"]
}).then(course => testCourse = course);
Subscriber.findOne({}).then(
    subscriber => testSubscriber = subscriber
);
testSubscriber.courses.push(testCourse);
testSubscriber.save();
Subscriber.populate(testSubscriber, "courses").then(subscriber =>
    console.log(subscriber)
);
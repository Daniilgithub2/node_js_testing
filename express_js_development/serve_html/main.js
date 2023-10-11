const port = 3000,
    express = require('express'),
    app = express();

const homeController = require('./controllers/homeController');
const errorController = require('./controllers/errorController');
const layouts = require("express-ejs-layouts")

app.set("view engine", 'ejs')

app.get('/', (req, res) => {
    res.send("POST successfull!");
});

app.get("/items/:vegetable", homeController.sendReqParam);
app.get("/name/:myName",homeController.respondWithName);

app.use(layouts);
app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
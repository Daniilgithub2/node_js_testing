const port = 3000,
    express = require('express'),
    app = express();

const homeController = require('./ocntrollers/homeController');


app.get("/items/:vegetable", homeController.sendReqParam);
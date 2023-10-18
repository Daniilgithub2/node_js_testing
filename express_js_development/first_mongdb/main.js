const port = 3000,
    express = require('express'),
    app = express();

const MongoDB = require("mongodb").MongoClient,
    dbURL = "mongodb://127.0.0.1:27017",
    dbName = "mongodb";


MongoDB.connect(dbURL, (error, client) => {
    if (error) throw error;
    let db = client.db(dbName);
    db.collection("contacts")
        .find()
        .toArray((error, data) => {
            if (error) throw error;
            console.log(data);
        }); 
    db.collection("contacts")
        .insert({
            name: "Freddie Mercury",
            email: "fred@queen.com"
        }, (error, db) => {
            if (error) throw error;
            console.log(db);
        });
});





app.get('/', (req, res) => {
    res.send("POST successfull!");
});


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

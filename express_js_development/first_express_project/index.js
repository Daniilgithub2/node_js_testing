const port = 3000,
    express = require('express'),
    app = express();

app.get('/', (req, res) => {
    res.send("Hello, Universe!");
})
.listen(port, () =>{
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
});
app.post('/contact', (req, res) => {
    res.send('Contact information submitted successfully.');
});
app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
});
app.get("/items/:vegetable", (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is a page for ${veg}`);
});
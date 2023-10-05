const port = 3000,
    express = require('express'),
    app = express();


app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
});

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
const routeResponceMap = {
    "/info" : "<h1>Info page</h1>",
    "/contact" : "<h1>Contact us</h1>",
    "/about" : "<h1>Learn more About us</h1>",
    "/hello" : "<h1>Say hello by emailing us here.</h1>",
    "/error" : "<h1>Sorry the page you are looking for is not here.</h1>"
} 


const port = 3000,
    http = require("http");
    httpStatus = require("http-status-codes"),
    app = http
        .createServer((req, res) => {
            res.writeHead(200, {
                "Content-Type" : "text/html"
            });
            if (routeResponceMap[req.url]) {
                setTimeout(() => res.end(routeResponceMap[req.url]), 2000);
            } else {
                res.end("<h1>Welcome</h1>");
            }
        });

app.listen(port);
console.log(`The server has started and is listening on port number:
${port}`);

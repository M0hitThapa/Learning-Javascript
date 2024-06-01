const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req,res) => {
    const log = `${Date.now()}: ${req.url} i have reached bro\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
   fs.appendFile("logdetails.txt", log, (err,) => {
    if (err) {
        console.log("failed to write to log file", err);
        res.writeHead(500,{"content-Type": "text/plain"});
        res.end("Internal Server Error");
        return;
    }
    res.writeHead(200, {"Content-Type": "text/html"});
    switch (myUrl.pathname) {
        case "/":
            res.end("HomePage");
            break;
            case "/about":
                const username = myUrl.query.myname

                res.end(`hi, ${username}`);
                break;
                default:
                    res.end("404 not Found");
    }
    

      
   });
});
myServer.listen(3000, () => console.log("Server Started man go to web"));
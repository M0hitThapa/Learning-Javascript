const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res) => {
    const log = `${Date.now()}: ${req.url} i have reached bro\n`;
   fs.appendFile("logdetails.txt", log, (err,data) => {
    

       res.end(`<html><body><input type="text" placeholder="type your name"></body></html>`);
   });
});
myServer.listen(3000, () => console.log("Server Started man go to web"));
const http = require("http");


const server = http.createServer(processRequest);
server.listen(80) 
function processRequest(req,resp){

    resp.write("<h1>This is my html page</h1>");
    resp.write("<label>Was up|</label>");

    resp.end();
}
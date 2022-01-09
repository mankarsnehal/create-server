const http = require("http");
const fs = require("fs");

const PORT = 4000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
  if(req.url === "/") {
    const home = fs.readFileSync("./home.html", "utf-8");
    return res.end(home);
    // res.end("<h1>HOME PAGE</h1>");
  }
  if(req.url === "/about") {
    const about = fs.readFileSync("./about.html", "utf-8");
    return res.end(about);
    // res.end("<h1>ABOUT PAGE</h1>");
  }
  if(req.url === "/contact") {
    const contact = fs.readFileSync("./contact.html", "utf-8");
    return res.end(contact);
    // res.end("<h1>CONTACT PAGE</h1>");
  }
  if(req.url === "/service") {
    const service = fs.readFileSync("./service.html", "utf-8");
    return res.end(service);
    // res.end("<h1>SERVICE PAGE</h1>");
  }
  else {
    return res.end("<h1>Error 404: Page Not Found!</h1>");
  }
});

server.listen(PORT, hostname, () => {
  console.log(`Server is working at http://${hostname}:${PORT}`);
})



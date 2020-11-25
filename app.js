
const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
//routes
app.get("/", function (req, res) {
   res.render("index.html");
   });
   
app.get("/form", function(req, res) {
    res.render("form.html");
});

// courses
app.get("/courses", function(req, res) {
    res.render("courses.html");
});
// reference
app.get("/reference", function(req, res) {
    res.render("reference.html");
});
//login
app.get("/login", function(req, res) {
    res.render("login.html");
});

app.get("/more", function(req, res) {
    res.render("more.html");
});
//request info
app.get("/requestinfo", function(req, res) {
    res.render("requestinfo.html");
});

var fakeData = require("faker");
var randomName = fakeData.name.findName()
console.log(randomName); 

//starting server 
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server is running....");
}); 


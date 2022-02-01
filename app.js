const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "./Public")
app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, () => (
    console.log("El servidor esta funcionando ok")
));

app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname, "./Views/home.html"))
})

app.get("/login", function(req, res){
    res.sendFile(path.resolve(__dirname, "./Views/login.html"))
})

app.get("/register", function(req, res){
    res.sendFile(path.resolve(__dirname, "./Views/register.html"))
})
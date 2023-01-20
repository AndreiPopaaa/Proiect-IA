var express = require("express");
var path = require("path");

var app = express();
var port = 3000;




app.get('/', function (req, res) {
  res.sendFile('home.html',{root:path.join(__dirname,'./')});
});

app.use(express.static('./public'))

app.listen(port, function () {
  console.log('Your server is ready at port 3000 please open your project using a new terminal and "npm open" ');
});

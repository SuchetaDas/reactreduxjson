// const express = require('express');
// const app = express();

// app.locals.data = require('../data.json');
// console.log(data);
// app.get('/',function(req,res){
//     res.setHeader('Content-Type','application/json');
//     res.send(JSON.stringify(''));
// })

// app.listen(3000,function(){
//     console.log('Example app listening on port 3000!')
// })

//  var http = require('http');
//  var fs = require('fs');

//  http.createServer(function (req, res) {
//    fs.readFile('../data.json', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.write(data);
//     //console.log(data);
//     res.end();
//   });
// }).listen(8080);

// var express = require("express");
// var bodyParser = require("body-parser");
// var app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// var routes = require("./routes/routes.js")(app);

// var server = app.listen(8080, function () {
//     console.log("Listening on port %s...", server.address().port);
// });

const app = require('express')();
const routes = require('./routes');

app.use('/',routes);

app.listen(8080,() => {
    console.log('App listening on port 8080');
})
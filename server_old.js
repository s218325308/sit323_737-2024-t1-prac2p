//Web server code based on Week 2 online workshop session


var express = require("express")
var app = express()
var port = process.env.port || 3000;

//Web server listens on port 3000, when a request is received, will repsond with html page.
app.listen(port,()=>{
  console.log("App listening to: "+port)
})





//Alternate code below based on LinkedIn learnign training package
/*
var express = require('express');
var app = express();

// Define a route to serve your HTML file
app.use(express.static(__dirname ));

// Start the server
var port = 3000; // port number
var server = app.listen(port, () => {
  console.log('Server is listning on port:', server.address().port);
});
*/


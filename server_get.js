
const express= require("express");
//const res = require("express/lib/response");
const app= express();

// Function to add two numbers
const addTwoNumber= (n1,n2) => {
    return n1+n2;
}

// Route to handle GET request for adding two numbers
app.get("/addTwoNumber", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2= parseInt(req.query.n2);
    const result = addTwoNumber(n1,n2);
    res.json({statuscocde:200, data: result }); 
});

// a Console output to test the addTwoNumber function - should log 10 in the console.
console.log (addTwoNumber(5,5));

// Define a route to serve your HTML file
app.use(express.static(__dirname ));

// setting webserver to port 3400
const port=3040;

// Starting the server - listen on assinged port
app.listen(port,()=> {
    //console log - status of server.
    console.log("hello i'm listening to port "+port);
})

// Navigate to http://localhost:3040/ for full experince.

// To test query to test functionalit of sever. change figuires of n1 and n2 before submission for differt values.
// Default values n1=10 and n2=10 should return 20.
// http://localhost:3040/addTwoNumber?n1=10&n2=10
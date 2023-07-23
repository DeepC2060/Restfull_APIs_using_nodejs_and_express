const express = require("express");


const app = express();

app.use(express.json())

app.use(myMidWare);

function myMidWare  (req, res, next){
    console.log("Inside the Middleware I created ");
    next(); //it will pass on the control to the next step 
}

// stich the routs to the server

require("./routes/idea.routes")(app);

// starting server
app.listen(8081, ()=>{
    console.log("server started");
})
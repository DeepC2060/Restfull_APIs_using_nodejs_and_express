const ideaController = require("../controllers/Idea.controller");




// URI define route for the calls like 


//GET 127.0.0.1:8081/ideaApp/v1/ideas 

module.exports = (app) =>{
    app.get("/ideaApp/v1/ideas", ideaController.fetchAllIdeas );
    // post call
    app.post("/ideaApp/v1/ideas", ideaController.createIdea);

    //put call 
    app.put("/ideaApp/v1/ideas/:id", ideaController.updatesIdea);

    //delete call 
    app.delete("/ideaApp/v1/ideas/:id",ideaController.deleteIdea)
}
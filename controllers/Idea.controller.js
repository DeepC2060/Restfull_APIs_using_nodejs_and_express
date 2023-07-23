const ideas = require("../models/idea.model");


// search all idea
exports.fetchAllIdeas = (req, res) =>{
res.status(200).send(ideas);
}

let idCount = 1 ;

// create new idea 
exports.createIdea = (req, res) =>{
    // Read the request body 
    const idea = req.body ;

    // need to generate the next idea id
    idea.id = ++idCount;

    //save it in the list of existing idea 
    ideas[idCount] = idea ;

    //return the response
    res.status(201).send(ideas[idCount]);
}


// update all idea

exports.updatesIdea = (req, res) =>{
    //I need to read the id passed in  the path
    // 127.0.0.1:8081/ideaApp/v1/ideas/1
    const ideaId = req.params.id;

    //if the idea  is present -  modify else return error

    if(ideas[ideaId]){
        ideas[ideaId] = req.body;
        res.status(200).send(ideas[ideaId]);
    }else{
        res.status(400).send({
            message:'idea Id passed was not correct'
        })
    }
}



// delete idea

exports.deleteIdea = (req, res ) =>{
    // check if present - yes delete , no return erro message  
if(idea[req.params.id]){
    delete ideas[req.params.id];
    res.status(200).send({
        message : "successfully deleted"
    })
}else{
    res.status(400).send({
        massege : "wrong idea id"
    })
}



}
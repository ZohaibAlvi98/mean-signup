const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true , useUnifiedTopology: true}, (err) =>{
    if(!err){
        console.log("mongoDB is connected")}
        else{ console.log("Error in mongoDB connection"+ JSON.stringify(err,undefined,2))}
})

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

require('../api/user.model')
const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type: String,
        required:true

    },
    cat:{
        type:String,
        required:true
    }
    ,
    tags:[Array]
  
});
module.exports = mongoose.model('recipe', recipeSchema)
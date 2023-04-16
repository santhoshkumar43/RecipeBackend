const RecipeModel = require('../models/RecipeModel.js')


module.exports.getRecipe = async (req, res) =>{
    const recipe = await RecipeModel.find();
    console.log(recipe)

    res.send(recipe);cd
}

module.exports.saveRecipe = async(req,res)=>{
    const {title,description,cat,tags} =req.body;

    RecipeModel.create({title, description,cat,tags})
    .then((data)=>{
        console.log("added to DB")
        console.log(data)
        res.send(data)
    })
    .catch((err)=>console.log(err))
}
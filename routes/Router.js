const {Router} = require("express");
const { getRecipe,saveRecipe } = require("../controller/RecipeController");

const router = Router()
router.get('/',getRecipe);
router.post('/save',saveRecipe)


module.exports = router;
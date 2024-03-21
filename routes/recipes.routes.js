import { Router } from "express";
import { addRecipe, deleteRecipe, getAllRecipes, getRecipe, updateRecipe } from "../controllers/recipes.controller.js";

//Create a route
const router = Router();

//Define routes
router.post('/', addRecipe);

router.get('/', getAllRecipes);

router.get('/:id', getRecipe);

router.patch('/:id', updateRecipe);

router.delete('/:id',deleteRecipe);

//Export router
export default router;
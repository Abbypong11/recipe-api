import { RecipeModel } from "../models/recipes.js";

export const addRecipe = async (req, res)  => {
    //Add recipe to database
    const createResult = await RecipeModel.create(req.body);
    //Return response
    res.status(201).json(createResult);
  }

export const  getAllRecipes = async (req, res) => {
    // Get all recipes from database
    const findResult = await RecipeModel.find();
    // Return response
    res.status(200).json(findResult);
}

export const getRecipe = (req, res) => {
    res.send(`Get single recipe with id: ${req.params.id}`);
}

export const updateRecipe = (req,res)=>{
    res.send(`Update single recipe with id: ${req.params.id}`);
}

export const deleteRecipe = (req,res)=> {
    res.send(`Delete single recipe with id: ${req.params.id}`);
}
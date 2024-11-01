
"use server";

import Recipe from "../database/models/recipe.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import { revalidatePath } from "next/cache";

// CREATE
export async function createRecipe(recipe: CreateRecipeParams) {
  try {
    await connectToDatabase();

    const newRecipe = await Recipe.create(recipe);

    return JSON.parse(JSON.stringify(newRecipe));
  } catch (error) {
    handleError(error);
  }
}
//FIX
export async function getRecipe(name: string) {
  try {
    await connectToDatabase();
    const recipe = await Recipe.find({ "name": name });
    
    return JSON.parse(JSON.stringify(recipe));
  } catch(error) {
    handleError(error);
  }
}

export async function getAllRecipes() {
  try {
    const courses = await Recipe.find();
    
    return JSON.parse(JSON.stringify(courses));
  } catch(error) {
    handleError(error);
  }
}


// UPDATE
// export async function updateRecipe(clerkId: string, recipe: UpdateRecipeParams) {
//   try {
//     await connectToDatabase();

//     const updatedRecipe = await Recipe.findOneAndUpdate({ clerkId }, recipe, {
//       new: true,
//     });

//     if (!updatedRecipe) throw new Error("User update failed");
    
//     return JSON.parse(JSON.stringify(updatedRecipe));
//   } catch (error) {
//     handleError(error);
//   }
// }

// DELETE
export async function deleteRecipe(recipeId: string) {
  try {
    await connectToDatabase();

    // Find task to delete
    // const taskToDelete = await Task.findOne({ taskId });

    // if (!taskToDelete) {
    //   throw new Error("User not found");
    // }

    // Delete task
    const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);
    revalidatePath("/");

    return deletedRecipe ? JSON.parse(JSON.stringify(deletedRecipe)) : null;
  } catch (error) {
    handleError(error);
  }
}

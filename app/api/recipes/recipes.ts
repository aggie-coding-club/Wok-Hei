"use server"
import { createRecipe } from "@/lib/actions/recipe.actions";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
// import { v4 } from "uuid";


export async function checkUser() {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in')
  return userId;
}
export async function sendRecipe(name: string, instructions: string, ingredients: string[], calories: number, fat: number, protein: number, carbs: number, servings: number, time: number, rating: number, picture: string) {
  try {
    const { userId } = await auth();
    if (!userId)
      throw new Error("User not found");
    const user = await getUserById(userId);
    const username = user?.username;
    const recipe = await {
      clerkId: userId,
      author: username,
      name: name,
      instructions: instructions,
      ingredients: ["eggs", "flour", "sugar"],
      calories: calories,
      fat: fat,
      protein: protein,
      carbs: carbs,
      servings: servings,
      time: time,
      rating: rating,
      picture: picture,
    }
    const newRecipe = await createRecipe(recipe);
    return newRecipe;
  } catch (error) {
    console.log(error);
  }
}

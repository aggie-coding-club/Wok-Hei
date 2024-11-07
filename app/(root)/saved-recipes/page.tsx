"use server"
import RecipeRender from '@/components/RecipeRender'
import { getAllRecipes } from '@/lib/actions/recipe.actions'
import React from 'react'

const SavedRecipes = async () => {
  const recipes = await getAllRecipes();
  return (
    <RecipeRender recipes={recipes} />
  )
}

export default SavedRecipes


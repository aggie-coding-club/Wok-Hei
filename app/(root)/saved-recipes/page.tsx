"use server"
import DropdownList from '@/components/Dropdown'
import RecipeRender from '@/components/RecipeRender'
import { getAllRecipes } from '@/lib/actions/recipe.actions'
import React from 'react'
const sortOptions = ["Calories", "Cook Time", "Ingredients"];

const SavedRecipes = async () => {
  const recipes = await getAllRecipes("Calories");
  return (
    <div>
      <h2 className="text-2xl px-3 border-slate-200 border-b-2 py-3">
        Saved Recipes
      </h2>
      <div>
        <DropdownList options={sortOptions} />
      </div>
      <RecipeRender recipes={recipes} />
    </div>

  )
}

export default SavedRecipes


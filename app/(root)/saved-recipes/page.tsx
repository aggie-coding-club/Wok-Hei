"use client";
import React from "react";
import Recipe from "@/components/Recipe";
import Dropdown from "@/components/Dropdown";
const sortOptions = ["Calories", "Cook Time", "Ingredients"];

const SavedRecipes = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl px-3 border-slate-200 border-b-2 py-3">
          Saved Recipes
        </h2>
        <div>
          <Dropdown options={sortOptions} />
        </div>
        <div className="flex flex-row gap-10 mx-10">
          <div className="basis-1/4">
            <Recipe
              name="Cookies"
              link=""
              cooktime={314}
              cal={290}
              ingredient={["flour, eggs, choco, dog"]}
              protein={10}
              carb={20}
              fat={0}
              expanded={false}
            ></Recipe>
          </div>
          <div className="basis-1/4">
            <Recipe
              name="Brownies"
              link=""
              cooktime={314}
              cal={290}
              ingredient={["flour, eggs, choco, dog"]}
              protein={10}
              carb={20}
              fat={0}
              expanded={false}
            ></Recipe>
          </div>
          <div className="basis-1/4">
            <Recipe
              name="Recipe"
              link=""
              cooktime={314}
              cal={290}
              ingredient={["flour, eggs, choco, dog"]}
              protein={10}
              carb={20}
              fat={0}
              expanded={false}
            ></Recipe>
          </div>
          <div className="basis-1/4">
            <Recipe
              name="Recipe"
              link=""
              cooktime={314}
              cal={290}
              ingredient={["flour, eggs, choco, dog"]}
              protein={10}
              carb={20}
              fat={0}
              expanded={false}
            ></Recipe>
          </div>
        </div>
        <div className="flex flex-row gap-10 mx-10">
          <div className="basis-1/4">
            <Recipe
              name="Recipe"
              link=""
              cooktime={314}
              cal={290}
              ingredient={["flour, eggs, choco, dog"]}
              protein={10}
              carb={20}
              fat={0}
              expanded={false}
            ></Recipe>
          </div>
          <div className="basis-1/4">
            <Recipe
              name="Recipe"
              link=""
              cooktime={314}
              cal={290}
              ingredient={["flour, eggs, choco, dog"]}
              protein={10}
              carb={20}
              fat={0}
              expanded={false}
            ></Recipe>
          </div>
          <div className="basis-1/4">
            <Recipe
              name="Recipe"
              link=""
              cooktime={314}
              cal={290}
              ingredient={["flour, eggs, choco, dog"]}
              protein={10}
              carb={20}
              fat={0}
              expanded={false}
            ></Recipe>
          </div>
          <div className="basis-1/4">
            <Recipe
              name="Recipe"
              link=""
              cooktime={314}
              cal={290}
              ingredient={["flour, eggs, choco, dog"]}
              protein={10}
              carb={20}
              fat={0}
              expanded={false}
            ></Recipe>
          </div>
        </div>
      </div>
      <div>
        <a href="/search">
          <button className="fixed bottom-16 right-16 py-5 rounded-full bg-green-200 text-green-800 font-bold px-10">
            Add Recipes
          </button>
        </a>
      </div>
    </div>
  );
};

export default SavedRecipes;

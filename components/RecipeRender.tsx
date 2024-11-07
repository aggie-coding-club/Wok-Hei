"use client";
import React, { useState } from "react";
import Recipe from "@/components/Recipe";
import Dropdown from "@/components/Dropdown";
import { Button } from "@/components/ui/button";
import Modal from "@/components/Modal";
const sortOptions = ["Calories", "Cook Time", "Ingredients"];

const RecipeRender = ({recipes} : {recipes:any}) => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e:any) => { //eslint-disable-line @typescript-eslint/no-explicit-any
    setShowModal(true);
    e.preventDefault();
  }
  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl px-3 border-slate-200 border-b-2 py-3">
          Saved Recipes
        </h2>
        <div>
          <Dropdown options={sortOptions} />
        </div>
        {/* {console.log(recipes)} */}
        {recipes && recipes.map((recipe : any) => ( //eslint-disable-line @typescript-eslint/no-explicit-any
        // onSubmit={(event) => handleSubmit(event, task._id)}
        <Recipe
              key={recipe._id}
              name={recipe.name}
              link=""
              cooktime={recipe.time}
              cal={recipe.calories}
              ingredient={["flour, eggs, choco, dog"]}
              protein={10}
              carb={20}
              fat={0}
              expanded={false}
            />
      ))}
        {/* <div className="flex flex-row gap-10 mx-10">
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
        </div> */}
      </div>
        {/* <Button  className="fixed bottom-16 right-16 py-5 rounded-full bg-green-200 text-green-800 font-bold px-10">
          Add Recipes
        </Button> */}
      <form onSubmit={(event) => handleSubmit(event)} >
        <Button type="submit"  variant="outline" size="icon" className="fixed bottom-16 right-16 py-8 px-24 rounded-full bg-green-200 text-green-800 font-bold text-2xl">
          Add Recipes
        </Button>
      </form>
      <div>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      </div>
    </div>
  );
};

export default RecipeRender;

import { Heart, X } from "lucide-react";

interface recipeStats {
  name: string;
  link: string;
  cooktime: number;
  cal: number;
  ingredient: string[];
  protein: number;
  carb: number;
  fat: number;
  expanded: boolean;
}

const Recipe = ({
  name,
  cooktime,
  cal,
  ingredient,
  // protein,
  carb,
  // fat,
  // expanded,
}: recipeStats) => {
  return (
    <div className="bg-slate-300 h-96 rounded-xl">
      <div className="grid grid-rows-7 h-full">
        <img
          className="row-span-3 object-cover w-full h-full rounded-t-xl"
          src="https://www.verybestbaking.com/sites/g/files/jgfbjl326/files/srh_recipes/4bc5edb86285aadc28069f51d9e98974.jpg"
          alt="Dish"
        />
        <ul className="row-span-4 px-2 border-t-black border-t-2 space-y-1">
          <li className="font-bold">{name}</li>
          <li>Cook Time: {cooktime}</li>
          <li>Ingredients: {ingredient}</li>
          <li>Calories: {cal}</li>
          <li>Carb: {carb}</li>
          <li className="justify-center items-center flex">
            <div className=" w-1/2 flex flex-row rounded-full justify-center items-center px-2">
              <button className="border-black border-2 rounded-l-full h-7 m-2 px-2 text-blue-800">
                <Heart size={20} />
              </button>
              <button className="grow text-center border-black border-2 h-7 px-2 text-green-800">
                Cook
              </button>
              <button className="border-black border-2 rounded-r-full h-7 m-2 px-2 text-red-800">
                <X size={20} />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Recipe;

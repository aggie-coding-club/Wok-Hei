import React from 'react'
import { Button } from './ui/button';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { sendRecipe } from '@/app/api/recipes/recipes';

const schema = z.object({
  name: z.string(),             // The 'name' field must be a string
  // author: z.string(),            // The 'author' field must be a string
  instructions: z.string(),
  ingredients: z.string(), // CHANGE LATER to z.array(z.string())
  // calories: z.number(),
  // // fat: z.number(),
  // // protein: z.number(),
  // // carbs: z.number(),
  // // servings: z.number(),
  // // time: z.number(),
  // // rating: z.number(),
  calories: z.string(),
  fat: z.string(),
  protein: z.string(),
  carbs: z.string(),
  servings: z.string(),
  time: z.string(),
  // rating: z.string(),
});

type FormFields = z.infer<typeof schema>;

const Modal = ({ isVisible, onClose } : {isVisible:boolean, onClose:any}) => { //eslint-disable-line @typescript-eslint/no-explicit-any
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      // rating: "0",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data:any) => { //eslint-disable-line @typescript-eslint/no-explicit-any
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // console.log(data);
      sendRecipe(data.name, data.instructions, data.ingredients, data.calories, data.fat, data.protein, data.carbs, data.servings, data.time, 0, "https://via.placeholder.com/150");
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  if (!isVisible) return null

  const handleClose = (e:any) => { //eslint-disable-line @typescript-eslint/no-explicit-any
    if (e.target === e.currentTarget)
      onClose();
  }
  return (
    <div className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
      <div className="w-6/12 flex flex-col">
        <Button className="text-white text-xl place-self-end" onClick={()=>onClose()}>
          X
        </Button>
        <div className="bg-white p-2 rounded">
          <form className="tutorial flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
            <label>Recipe Name</label>
            <input {...register("name")} type="text" placeholder="Spaghetti" />
            {errors.name && <div className="text-red-500">{errors.name.message}</div>}
             <label>Instructions</label>
            <textarea 
              {...register('instructions')}
              placeholder="Crack an egg!" 
              rows={10}  // Adjust rows to make it bigger vertically
              className="w-full p-2 border border-gray-300 rounded" // Add styling for width and appearance
            />
            {errors.instructions && <div className="text-red-500">{errors.instructions.message}</div>}
          
            <label>Ingredients</label>
            <input {...register("ingredients")} type="text" placeholder="Egg" />
            {errors.ingredients && <div className="text-red-500">{errors.ingredients.message}</div>}
            
            <div className="grid grid-cols-2 gap-4"> 
        <div>
          <label>Calories</label>
          <input 
            {...register("calories")} 
            type="number" 
            placeholder="100" 
            className="w-full p-2 mb-2 border border-gray-300 rounded block"
          />
          {errors.calories && <div className="text-red-500">{errors.calories.message}</div>}
        </div>
    
        <div>
          <label>Fat</label>
          <input 
            {...register("fat")} 
            type="number" 
            placeholder="10" 
            className="w-full p-2 mb-2 border border-gray-300 rounded block"
          />
          {errors.fat && <div className="text-red-500">{errors.fat.message}</div>}
        </div>

        <div>
          <label>Protein</label>
          <input 
            {...register("protein")} 
            type="number" 
            placeholder="10" 
            className="w-full p-2 mb-2 border border-gray-300 rounded block"
          />
          {errors.protein && <div className="text-red-500">{errors.protein.message}</div>}
        </div>

        <div>
          <label>Carbs</label>
          <input 
            {...register("carbs")} 
            type="number" 
            placeholder="10" 
            className="w-full p-2 mb-2 border border-gray-300 rounded block"
          />
          {errors.carbs && <div className="text-red-500">{errors.carbs.message}</div>}
        </div>

        <div>
          <label>Servings</label>
          <input 
            {...register("servings")} 
            type="number" 
            placeholder="10" 
            className="w-full p-2 mb-2 border border-gray-300 rounded block"
          />
          {errors.servings && <div className="text-red-500">{errors.servings.message}</div>}
        </div>

        <div>
          <label>Time (min)</label>
          <input 
            {...register("time")} 
            type="number" 
            placeholder="10" 
            className="w-full p-2 mb-2 border border-gray-300 rounded block"
          />
          {errors.time && <div className="text-red-500">{errors.time.message}</div>}
        </div>
      </div> 



          </form>
          <Button disabled={isSubmitting} type="submit" onClick={handleSubmit(onSubmit)} className="">
            {isSubmitting ? "Loading..." : "Submit"}
          </Button>
          {errors.root && <div className="text-red-500">{errors.root.message}</div>}
        </div>
      </div>
      
    </div>
  )
}

export default Modal;
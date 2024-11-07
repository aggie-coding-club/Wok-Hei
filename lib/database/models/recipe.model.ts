import { Schema, model, models } from "mongoose";

const RecipeSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  calories: {
    type: Number,
  },
  fat: {
    type: Number,
  },
  protein: {
    type: Number,
  },
  carbs: {
    type: Number,
  },
  servings: {
    type: Number,
  },
  time: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  picture: {
    type: String,
  },

})

const Recipe = models?.Recipe || model("Recipe", RecipeSchema);

export default Recipe;
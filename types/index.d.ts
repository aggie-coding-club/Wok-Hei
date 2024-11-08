// ====== USER PARAMS -> indicates what needs to be passed in parameter
declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
};

declare type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

declare type CreateRecipeParams = {
  clerkId: string;
  author: string;
  name: string;
  instructions: string;
  ingredients: string[];
  calories: number;
  fat: number;
  protein: number;
  carbs: number;
  servings: number;
  time: number;
  rating: number;
  picture: string;
};

declare type UpdateRecipeParams = {
  clerkId: string;
  author: string;
  name: string;
  instructions: string;
  ingredients: string[];
  calories: number;
  fat: number;
  protein: number;
  carbs: number;
  servings: number;
  time: number;
  rating: number;
  picture: string;
};

// examples
// declare type CreateTaskParams = {
//   taskId: string,
//   clerkId: string;
//   name: string;
//   date: Date;
//   recurring: boolean;
// }


// declare type UpdateTaskParams = {
//   name: string;
//   date: number;
//   month: number;
//   year: number;
//   recurring: boolean;
// };
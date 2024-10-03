// clerkId, email, username, photo, firstName, lastName, planId (for potential payments?)

import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  photo: {
    type: String,
    required: true,
  },
  planId: {
    type: Number,
    default: 1,
  },
});

const User = models?.User || model("User", UserSchema);

export default User;
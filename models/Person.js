//  Name, Email, beide req
// Route People mit beiden routes

import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Person = model('Person', schema);

export default Person;

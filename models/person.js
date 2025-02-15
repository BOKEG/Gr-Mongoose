const mongoose = require('mongoose');

//  Person schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name is required
  age: Number,
  favoriteFoods: [String], // Array of strings
});

// Create the model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;

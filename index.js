require('./Config/database'); 
const Person = require('./models/person');

//  Creating a Person
const createPerson = async () => {
  const person = new Person({
    name: "Joseph chacha",
    age: 30,
    favoriteFoods: ["Pizza", "Burger"],
  });

  try {
    const data = await person.save();
    console.log("✅ Person saved:", data);
  } catch (err) {
    console.error("❌ Error saving person:", err);
  }
};

// Creating Multiple People
const createManyPeople = async () => {
  const arrayOfPeople = [
    { name: "Alice", age: 25, favoriteFoods: ["Pasta", "Salad"] },
    { name: "Bob", age: 28, favoriteFoods: ["Steak", "Sushi"] },
    { name: "Mary", age: 22, favoriteFoods: ["Burrito", "Tacos"] },
  ];

  try {
    const data = await Person.create(arrayOfPeople);
    console.log("✅ People added:", data);
  } catch (err) {
    console.error("❌ Error adding people:", err);
  }
};

// Find People by Name
const findPeopleByName = async (personName) => {
  try {
    const data = await Person.find({ name: personName });
    console.log("✅ People found:", data);
  } catch (err) {
    console.error("❌ Error finding people:", err);
  }
};

// Find One Person by Favorite Food
const findOneByFavoriteFood = async (food) => {
  try {
    const data = await Person.findOne({ favoriteFoods: food });
    console.log("✅ Found person:", data);
  } catch (err) {
    console.error("❌ Error finding person:", err);
  }
};

// Find a Person by ID
const findPersonById = async (personId) => {
  try {
    const data = await Person.findById(personId);
    console.log("✅ Found person by ID:", data);
  } catch (err) {
    console.error("❌ Error finding person by ID:", err);
  }
};

//  Update a Person by Adding "Hamburger" to favoriteFoods
const updateFavoriteFoods = async (personId) => {
  try {
    const person = await Person.findById(personId);
    if (!person) return console.log("❌ No person found");

    person.favoriteFoods.push("Hamburger");
    const updatedPerson = await person.save();
    console.log("✅ Updated person:", updatedPerson);
  } catch (err) {
    console.error("❌ Error updating person:", err);
  }
};

// Update Person's Age Using `findOneAndUpdate`
const updatePersonAge = async (personName) => {
  try {
    const data = await Person.findOneAndUpdate(
      { name: personName },
      { age: 20 },
      { new: true }
    );
    console.log("✅ Updated person's age:", data);
  } catch (err) {
    console.error("❌ Error updating person's age:", err);
  }
};

// Delete One Person by ID
const deletePersonById = async (personId) => {
  try {
    const data = await Person.findByIdAndDelete(personId);
    console.log("✅ Deleted person:", data);
  } catch (err) {
    console.error("❌ Error deleting person:", err);
  }
};

// Delete Many People Named "Mary"
const deletePeopleByName = async () => {
  try {
    const result = await Person.deleteMany({ name: "Mary" });
    console.log("✅ People deleted:", result);
  } catch (err) {
    console.error("❌ Error deleting people:", err);
  }
};

// Chain Query Helpers (Find people who like "Burrito", sort by name, limit results, and hide age)
const searchAndFilterPeople = async () => {
  try {
    const data = await Person.find({ favoriteFoods: "Burrito" })
      .sort({ name: 1 })
      .limit(2)
      .select("-age")
      .exec();
    console.log("✅ Filtered search results:", data);
  } catch (err) {
    console.error("❌ Error searching and filtering people:", err);
  }
};

// Run a function here for testing
// createPerson();
// createManyPeople();
findPeopleByName("Grace Boke");
// findOneByFavoriteFood("Tacos");
// findPersonById("67b03eec3d6f6e276166f2fe"); 
// updateFavoriteFoods("67b03eec3d6f6e276166f2fc"); 
// updatePersonAge("Mary");
// deletePersonById("67b03eec3d6f6e276166f2fc"); 
// deletePeopleByName();
// searchAndFilterPeople();

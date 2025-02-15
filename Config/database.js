require('dotenv').config(); 
const mongoose = require('mongoose');

// Connecting to MongoDB using the URI save in dotenv
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ Database connected successfully"))
.catch(err => console.error("❌ Database connection error:", err));

module.exports = mongoose;

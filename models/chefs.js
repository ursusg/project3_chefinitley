const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const chefSchema = new Schema({
  chefName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  city: {type: String, required: true},
  bio: {type: String},
  date: { type: Date, default: Date.now},
  availability: { type: String},
  range: { type: Number},
  menu: {type: String},
  foodimg: {type: String},
  profilepic:{type: String}
  // firstname: { type: String, required: true },
  // lastname: { type: String, required: true },
  // email: { type: String, required: true },
  // password: { type: String, required: true},
  // city: { type: String, required: true },
  // bio: String,
  // date: { type: Date, default: Date.now },
  // servingMin: {type: Number, required: true},
  // servingMax: {type: Number,required: true},
  // phone: String,
  // meals: { dinner: String, 
  //          lunch: String,
  //          breakfast: String }
});

// Adding a function definition to the model that allows us to generate hashes
chefSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

// Adding a function definition to the model that validates the password for the login page
chefSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}

const Chef = mongoose.model("Chef", chefSchema);

module.exports = Chef;

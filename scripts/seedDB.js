const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/chefinately"
);

const chefSeed = [
  {
    chefName: "Chef Luciano",
    email: 'chefluciano@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:""
  },
  {
    chefName: "Desmond Williams",
    email: 'desmondwill@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:""
  },
  {
    chefName: "Sam Wright",
    email: 'chefluciano@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:""
  },
  {
    chefName: "Jamal Wright",
    email: 'chefluciano@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:""
  },
  {
    chefName: "Jerry Stevens",
    email: 'chefluciano@gmail.com',
    password: "Moments",
    city: "Evanston",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:""
  },
  {
    chefName: "Chris Howard",
    email: 'chefluciano@gmail.com',
    password: "Moments",
    city: "Evanston",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:""
  },
  {
    chefName: "Hughes Jones",
    email: 'chefluciano@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:""
  },
  {
    chefName: "Chef Scotty",
    email: 'chefluciano@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:""
  },
  {
    chefName: "Anthony Greene",
    email: 'chefluciano@gmail.com',
    password: "Moments",
    city: "Evanston",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:""
  },
  {
    chefName: "Howard Beasley",
    email: 'chefluciano@gmail.com',
    password: "Moments",
    city: "Orland Park",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:""
  },
  {
    chefName: "Christine May",
    email: 'chefluciano@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:""
  },
  {
    chefName: "Derrick Wence",
    email: 'chefluciano@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:""
  },
  {
    chefName: "Jasmine Faith",
    email: 'chefluciano@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:""
  },
  {
    chefName: "Micheal Wallace",
    email: 'chefluciano@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:""
  },
  {
    chefName: "Debra Luise",
    email: 'chefluciano@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:""
  },
  {
    chefName: "Mary Matz",
    email: 'chefluciano@gmail.com',
    password: "Moments",
    city: "Chicago",
    bio: "Southside Legend",
    date: new Date(Date.now()),
    availability: true,
    range: 15,
    foodimg: "",
    profilepic:""
  }
];

db.chef
  .remove({})
  .then(() => db.chefs.collection.insertMany(chefSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

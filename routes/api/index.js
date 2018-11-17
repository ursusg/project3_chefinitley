const router = require("express").Router();
const chefRoutes = require("./chefs");
const userRoutes= require("./users");
const cuisineRoutes = require("./cuisines")
// Book routes
router.use("/chefs", chefRoutes);
router.use("/users", userRoutes);
router.use("/cuisines", cuisineRoutes);

module.exports = router;

const router = require("express").Router();
// const { check, validationResult } = require('express-validator');
const chefController = require("../../controllers/chefController");
const Chef = require("../../models/chefs")

// Matches with "/api/chef/signup"
router.route("/signup")
  .get(chefController.findAll)
  .post(chefController.create);

// Matches with "/api/chef/login"
router.route("/login")
  .post((req, res, next) => {
    const { body } = req;
    let { password, email} = body;

    email = email.toLowerCase();

    chefController.find({
      email: email
    }, (error, chefs) => {
      if (error) {
        return res.send({
          success: false,
          message: "Something went wrong."
        })
      }
      else if (chefs.length != 1) {
        return res.send({
          success: false,
          message: "Invalid email"
        })
      }
      
      const user = chefs[0]
      
    })

    if (!password) {

    }
  })

// Matches with "/api/chef/:id"
router
  .route("/:id")
  .get(chefController.findById)
  .put(chefController.update)
  .delete(chefController.remove);

// router
//   .route("/api/chefs")
//   .get(chefController.findAll)


module.exports = router;
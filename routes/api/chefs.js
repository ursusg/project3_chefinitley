const router = require("express").Router();
const chefController = require("../../controllers/chefController");

// Matches with "/api/chef"
router.route("/")
  .get(chefController.findAll)
  .post(chefController.create);

// Matches with "/api/chef/:id"
router
  .route("/:id")
  .get(chefController.findById)
  .put(chefController.update)
  .delete(chefController.remove);

// Routes with "/signup"
router
  .route("/signup")
  .post(chefController.create);

router
  .route("/api/chef")
  .get(chefController.findAll);


module.exports = router;
const db = require("../models");

// Defining methods for the chefController
module.exports = {
  findAll: function(req, res) {
    db.Chef
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Chef
      .findById(req.params.id)
      .then(Chef => res.json(Chef))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    // // Update the password with the hash.
    // req.body.password = bcrypt.hashSync(req.body.password)
    // req.body.email = req.body.email.toLowerCase();

    // Destructure the body from the request and set it as a 'const' at the same time
    const { body } = req;
    // Do the same from within the body. This way we don't have to keep writing req.body.<field>
    let {
      chefName,
      email,
      password,
      bio,
      availability,
      city,
      range
    } = body;

    // Checks to see if these fields exist from the request.
    if (!chefName)
      return res.send({
        success: false,
        message: "Name required!"
      })
    if (!email)
      return res.send({
        success: false,
        message: "Invalid e-mail address!"
      })
    if (!password)
      return res.send({
        success: false,
        message: "Invalid or Missing password!"
      })

    // Email address is set to lowercase and trimmed.
    email = email.toLowerCase().trim();

    // Check if any other users exist before signup is complete! This means multiple people can't make the same account
    db.Chef.find({
      email: email
    }, (err, previousChefs) => {
      if (err)
        return res.send({
          success: false,
          message: "Error finding previous Chefs"
        })
      else if (previousChefs.length > 0) {
        return res.send({
          success: false,
          message: "Email already exists"
        })
      }
    })

    // NOW if none of these fail, we'll create a new Chef in our database.
    // and set each part of the forms based off our validations here
    let newChef = new db.Chef();

    newChef.chefName = chefName;
    newChef.email = email;
    newChef.password = newChef.generateHash(password);
    newChef.bio = bio;
    newChef.availability = availability;
    newChef.city = city;
    newChef.range = range;

    console.log(newChef);

    db.Chef
      .create(newChef)
      .then(Chef => res.json(Chef))
      .then(json => {
        console.log(`RES.JSON RESPONSE ${json}`);
        if (json.success) {
          this.setState({
            chefName: "",
            email: "",
            password: "",
            city: "",
            bio: "",
            availability: "",
            range: ""
          })
        } else {
          this.setState({
            signupError: json.message,
            isLoading: false
          })
        }
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Chef
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Chef
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

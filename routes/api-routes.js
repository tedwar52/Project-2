// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log("testPost"),
      console.log(req.body);
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {

        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        phone: req.user.phone,
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // app.get("/api/users", function (req, res) {
  //   console.log("testApiUsers");

  // });

  // app.get("/api/doctors", function (req, res) {
  //   console.log("testApiDoctors")
  //   console.log(req.body)
  //   db.Doctor.findAll()
  //     .then(function (dbDoctor) {
  //       console.log(dbDoctor);
  //       // res.json(dbDoctor);
  //     });

  // });

  app.get("/api/schedules", function (req, res) {
    console.log("testApiSchedules")

  });

  app.get("/api/doctor_data", function (req, res) {
    console.log("testApiDoctor_Data")

    db.Doctor.findAll({
      where: {
        orgName: '%' + req.body.query + '%'
      }
    })
      .then(function (dbDoctor) {
        res.json(dbDoctor);
      }).catch(function (error) {
        console.log(error);
      });
  });


  // app.get("/api/doctor_data", (req, res) => {
  //   // console.log(req.body)
  //   console.log("testApiDoctorData_body")
  //   if (!req.doctor) {
  //     // The user is not logged in, send back an empty object
  //     res.json({});
  //   } else {
  //     // Otherwise send back the user's email and id
  //     // Sending back a password, even a hashed password, isn't a good idea
  //     res.json({

  //       firstName: req.doctor.firstName,
  //       id: req.doctor.id
  //     });
  //     console.log("testJSONResponse");
  //   }
  // });

};

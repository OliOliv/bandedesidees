"use strict";
// Import dependencies
var passport = require("passport");
var express = require("express");
// Set up middleware
var requireAuth = passport.authenticate("jwt", { session: false });

// Export the routes for our app to use
module.exports = function (app) {
  // API Route Section

  // Initialize passport for use
  app.use(passport.initialize());
  // Bring in defined Passport Strategy
  require("../config/passport")(passport);

  // Create API group routes
  var apiRoutes = express.Router();
  var userRoutes = require("./api/users/users.controller");
  var eventsRoutes = require("./api/events/events.controller");
  var speakersRoutes = require("./api/speakers/speakers.controller");
  var editionsRoutes = require("./api/editions/editions.controller");
  var booksRoutes = require("./api/books/books.controller");
  var photographyRoutes = require("./api/photography/photography.controller");
  var illustrationsRoutes = require("./api/illustrations/illustrations.controller");

  //Protected authenticated route with JWT
  apiRoutes.get("/dashboard", requireAuth, function (request, response) {
    response.send(
      "It worked User id is: " +
        request.user.user_id +
        ", Email id is: " +
        request.user.user_email +
        "."
    );
  });

  // Set url for API group routes
  app.use("/api", apiRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/events", eventsRoutes);
  app.use("/api/speakers", speakersRoutes);
  app.use("/api/editions", editionsRoutes);
  app.use("/api/books", booksRoutes);
  app.use("/api/photography", photographyRoutes);
  app.use("/api/illustrations", illustrationsRoutes);
};

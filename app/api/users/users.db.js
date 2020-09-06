"use strict";
var crypt = require("../../helpers/crypt");
var usersdb = {};
var connection = require("../../helpers/connection");

usersdb.createUser = function (user, successCallback, failureCallback) {
  var passwordHash;
  crypt.createHash(
    user.password,
    function (res) {
      passwordHash = res;

      connection.query(
        "INSERT INTO `users` (`user_email`, `password`) VALUES ('" +
          user.email +
          "', '" +
          passwordHash +
          "');",
        function (err, rows, fields, res) {
          if (err) {
            failureCallback(err);
            return;
          }
          successCallback();
        }
      );
    },
    function (err) {
      failureCallback();
    }
  );
};

usersdb.findUser = function (user, successCallback, failureCallback) {
  var sqlQuery =
    "SELECT * FROM `users` WHERE `user_email` = '" + user.email + "';";
  connection.query(sqlQuery, function (err, rows, fields, res) {
    if (err) {
      failureCallback(err);
      return;
    }
    if (rows.length > 0) {
      successCallback(rows[0]);
    } else {
      failureCallback("User not found.");
    }
  });
};

module.exports = usersdb;

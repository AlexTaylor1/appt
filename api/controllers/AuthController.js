/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: function (req, res) {
      if (req.body.username == "username" && req.body.password == "password") {
        // Use
        var jwt = require('jsonwebtoken');
        const token = jwt.sign({ id: 1, username: "username" }, "mysecret"); // Should be an in .env
        res.json({key: token});
      } else {  
        res.json({Error: "Invalid credentials"});
      }
  }};


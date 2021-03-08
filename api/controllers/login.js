module.exports = {


  friendlyName: 'Login',


  description: 'Handel the login for users',


  inputs: {
    username: {
      description: "The users username",
      type: "string",
      required: true
    },
    password: {
      description: "The users password",
      type: "string",
      required: true
    }
  },

  fn: async function ({username, password}) {
    if (username == "username" && password == "password") {
      // Use
      const token = require('jsonwebtoken').sign({ id: 1, username: "username" }, "mysecret"); // Should be an in .env
      return {key: token};
    }
    return {Error: "Invalid password or email."};
  }


};

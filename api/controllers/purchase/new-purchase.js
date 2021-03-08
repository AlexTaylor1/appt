const { TokenExpiredError } = require("jsonwebtoken");

module.exports = {


  friendlyName: 'New purchase',


  description: 'Allow a logged in user to create a new purchase',


  inputs: {
    amount: {
      type: 'number',
      description: 'The cost of the purchase exclusive of vat.',
      required: true
    }, 
    description: {
      type: 'string',
      description: 'Description of the purchase.',
      required: true
    }
  },

  fn: async function (inputs) {
    try {
      const data = {...inputs, ...{uid: (await sails.helpers.getToken(this.res)).id}};
      await Purchase.create(data);
    } catch(err) {
      return {Error: err};
    }
  }


};

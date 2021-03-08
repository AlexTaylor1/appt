module.exports = {


  friendlyName: 'Get the json webtoken',


  description: 'Get the json webtoken',


  inputs: {
    res: {
      type: 'ref',
      description: 'The response object of the action',
      example: 'this.res',
      required: true
    }
  },


  fn: async function ({res}) {
    return res.locals.token;
  }


};


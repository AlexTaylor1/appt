module.exports = {

  friendlyName: 'Purchase information',


  description: 'Show the information related to the users purchases: \
    - number of orders\
    - total value of orders\
    - average value of orders\
    - total amount of vat for the orders',

  inputs: {

  },
  
  exits: {
    serverError: {
      responseType: 'serverError'
    }
  },

  fn: async function (inputs) {
    try {
      const id = (await sails.helpers.getToken(this.res)).id;
      const orderCount = await Purchase.count({ where: { uid: id } });
      const totalOrderValue = await Purchase.count({ where: { uid: id } });
      const avgCost = orderCount / totalOrderValue;
      const vat = orderCount / 100 * 20;

      return {
        OrderCount: orderCount,
        OrderTotal: totalOrderValue,
        AverageOrder: avgCost,
        TotalVat: vat
      }
    } catch (err) {
      console.log(err);
      throw 'serverError';
    }
  }

};

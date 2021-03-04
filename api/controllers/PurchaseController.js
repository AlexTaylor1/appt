/**
 * PurchaseController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Purchase = require("../models/Purchase");

module.exports = {
    newPurchase: async (req, res) => {
        // Combine the body and add the missing uid parameter
        var params = {...req.body, ...{ uid: res.locals.token.id }};
        
        // Never used this and not sure how to get this to work.
        Purchase.create(params, (err, purchase) => {
            if (err) {
                return res.badRequest({error: err});
            } else {
                return res.json({data: purchase});
            }

        })
    }

};


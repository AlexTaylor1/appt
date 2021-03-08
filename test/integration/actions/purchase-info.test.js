var supertest = require('supertest');
const assert = require('assert');

describe('purchase/info action', function () {
    const uid = 1;
    const token = require('jsonwebtoken').sign({ id: uid, username: "username" }, "mysecret");
    before(async () => {
        await Purchase.create({ uid: uid, amount: 1, description: "desc" });
        await Purchase.create({ uid: uid, amount: 10, description: "desc" });
        await Purchase.create({ uid: uid, amount: 20, description: "desc" });
    });

    after(async () => {
        await Purchase.destroy({ where: { uid: uid } });
    });

    it('checkInfo', async () => {
        const res = await supertest(sails.hooks.http.app)
            .get('/purchase/info')
            .set('Authorization', 'Bearer ' + token)
            .expect(200);
        assert.strictEqual(JSON.stringify(res.body), JSON.stringify({
            "OrderCount": 3,
            "OrderTotal": 3,
            "AverageOrder": 1,
            "TotalVat": 0.6
        }));
    });
    
    it('Forbidden', async () => {
        const res = await supertest(sails.hooks.http.app)
            .get('/purchase/info')
            .set('Authorization', 'Bearer ' + token+1)
            .expect(403);
    });
});
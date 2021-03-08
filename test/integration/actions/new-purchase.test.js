var supertest = require('supertest');
const assert = require('assert');

describe('purchase action', function () {
    const uid = 1;
    const token = require('jsonwebtoken').sign({ id: uid, username: "username" }, "mysecret");

    after(async () => {
        await Purchase.destroy({ where: { uid: uid } });
    });

    it('create', async () => {
        await supertest(sails.hooks.http.app)
            .post('/purchase')
            .set('Authorization', 'Bearer ' + token)
            .send({
                amount: 1,
                description: "test"
            })
            .expect(200);
        const purchases = await Purchase.find({where: { uid: uid }});
        
        assert.strictEqual(purchases.length, 1);
        assert.strictEqual(purchases[0].amount, 1);
        assert.strictEqual(purchases[0].id, 1);
        assert.strictEqual(purchases[0].description, "test");
    });
    
    it('Forbidden', async () => {
        await supertest(sails.hooks.http.app)
            .post('/purchase')
            .set('Authorization', 'Bearer ' + token + 1)
            .expect(403);
    });
});
var supertest = require('supertest');
const assert = require('assert');

describe('login action', function () {
    it('Good', function (done) {
        supertest(sails.hooks.http.app)
            .post('/login')
            .send({ username: 'username', password: 'password' })
            .expect(200)
            .then(response => {
                assert(response.body.key);
                done();
            });
    });
    it('Error', function (done) {
        supertest(sails.hooks.http.app)
            .post('/login')
            .send({ username: 'username1', password: 'password' })
            .expect(200)
            .then(response => {
                assert(response.body.Error);
                done();
            });
    });
});
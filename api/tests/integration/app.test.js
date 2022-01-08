const request = require('supertest');
const app = require('../../app.js');

const axios = require('axios');
// jest.mock('axios'); // ここでNode.jsのmodule（今回はaxios）をmock化している

const name = 'nakano';

describe(`http://0.0.0.0:8080`, () => {
    // 参考: https://qiita.com/yuta-katayama-23/items/2ee51d41153359e56335
    test(`GET /:name`, (done) => {
        // const resp = {
        //     statusCode: 200,
        //     data: { success: true, params: 'nakano' },
        // };
        // axios.get.mockResolvedValue(resp);

        axios
            .get(`http://0.0.0.0:8080/${name}`)
            .then((res) => {
                expect(res.status).toBe(200);
                expect(res.data).toEqual({ params: 'nakano', success: true });
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    test(`POST /`, (done) => {
        const data = {
            name: name,
        };
        request(app)
            .post(`/`)
            .send(data)
            .then((res) => {
                expect(res.statusCode).toBe(200);
                expect(res.text).toBe(
                    '{"success":true,"body":{"name":"nakano"}}'
                );
                done();
            })
            .catch((err) => {
                done(err);
            });
    });
});

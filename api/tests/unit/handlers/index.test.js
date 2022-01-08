// Jest で ECMAScript modules を使用する
const handlerIndex = require('../../../handlers/index.js');

test('GET /:name', async () => {
    const req = {
        params: { name: 'nakano' },
    };
    const res = {
        status: jest.fn(),
        send: jest.fn(),
    };

    await handlerIndex.get(req, res);

    expect(res.send.mock.calls.length).toBe(1);
    expect(res.send.mock.calls[0]).toEqual([
        { success: true, params: 'nakano' },
    ]);
});

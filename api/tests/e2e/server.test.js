const port = 8080;
const name = 'nakano';

describe(`表示確認`, () => {
    beforeAll(async () => {
        await page.goto(`http://localhost:${port}/${name}`);
    });

    it(`レスポンスのJSONが表示される`, async () => {
        const body = await page.evaluate(() => document.body.textContent);
        expect(body).toContain('{"success":true,"params":"nakano"}');
    });
});

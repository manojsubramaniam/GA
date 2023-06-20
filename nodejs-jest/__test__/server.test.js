const axios = require('axios');
const url = 'http://127.0.0.1:3000';
  

//Test1
describe('Get method', () => {
    test('Test 1', async () => {
        const res = await axios.get(url)

        expect(res.status).toBe(200)
        expect(res.data).toEqual('Hello World!')
    })
})
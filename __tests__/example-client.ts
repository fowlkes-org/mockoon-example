import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/v2',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  /* simplified client to show mockoon examples - in more practical applications the client would be
   either a web or mobile client making API calls to the mockoon mock server. */
describe('make example api calls to mockoon client', ()=> {
    test('example test for finding pets by a status /pet/findByStatus?status=available&status=available', async ()=> {
        let response = await instance.get('/pet/findByStatus?status=available&status=available');
        expect(response.status).toBe(200);
    });
});
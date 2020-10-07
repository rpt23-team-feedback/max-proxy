const request = require('supertest');
const app = require('../server/index');

describe('test basic routing', () => {
  afterAll((done) => {
    done();
  })

  test('it should respond to a GET to \'/\' with a 200', (done) => {
    return request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      })
      .then(app.close())
      .then(done());
  });
});

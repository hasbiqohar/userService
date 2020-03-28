const request = require('supertest')
const app = require('../src/server.js')

describe('GET Endpoints', () => {
  it('response json', async () => {
   const response = await request(app)
                .get('/')
                .set('Accept','application/json')
                .expect('Content-Type', /json/)
                .expect(200);
    expect(response.body.get).toBe("OK")
  })
})

describe('POST Endpoints', () => {
  it('response json', async () => {
   const response = await request(app)
                .post('/')
                .send({
		  name : "john"
		})
                .set('Accept','application/json')
                .expect('Content-Type', /json/)
                .expect(200);
    expect(response.body.name).toBe("john")
  })
})

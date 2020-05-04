const request = require('supertest');
const server = require('../api/server.js');

describe("jokes-router.js", () => {
  describe("GET /api/jokes", () => {
    it("This will return a 400 status code when no username or password is entered.", () => {
      return request(server).get("/api/jokes").expect(401);
    });
  });
});

describe("jokes-router.js", () => {
  describe("GET /api/jokes", () => {
    it("Is JSON present ?", () => {
      return request(server)
        .get("/api/jokes")
        .then((result) => {
          expect(result.type).toMatch(/json/i);
        });
    });
  });
});
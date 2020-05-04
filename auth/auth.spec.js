const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");

beforeEach(async () => {
    await db("users").truncate()
})


describe("auth-router.js", () => {
  describe("POST /api/auth/login", () => {
    it("Returns 200 when logged in.", () => {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "Conary", password: "12345" })
        .expect(200);
    });
  });
});

describe("auth-router.js", () => {
  describe("POST /api/auth/login", () => {
    it("Returns 401 when information does not match", () => {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "notMe", password: "password" })
        .expect(401);
    });
  });
});

//REGISTER ENDPOINT TESTS

describe("auth-router.js", () => {
  describe("POST /api/auth/register", () => {
    it("Registration returns 201", () => {
      return (
        request(server)
          .post("/api/auth/register")
          .send({ username: "newUser", password: "password" })
          .expect(201)
      );
    });
  });
});

describe('Add User', ()=>{
    it(' Returns a token', async ()=>{
        const res = await request(server)
        .post("/auth/register")
        .send({username: "Conary", password: "12345"})
        .expect(res.body.token).toBeTruthy()
        const token = res.body.token

        const userRestricted = await request(server)
        .get("/users")
        .set({"Authorization": token})
        .expect(userRestricted.status).toBe(200)

    })
})

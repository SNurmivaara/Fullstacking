const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const User = require("../models/user")
const helper = require("./test_helper")
const mongoose = require("mongoose")

describe("When there is initially one user at db", async () => {
  beforeEach(async () => {
    await User.deleteMany({})
    let user = new User({ username: "root", passwordHash: "sekret" })
    await user.save()
  })

  test("creation succeeds with a fresh username", async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: "test",
      name: "tester",
      password: "supertestingsecret",
    }

    await api
      .post("/api/users")
      .send(newUser)
      .expect(200)
      .expect("Content-Type", /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd.length).toBe(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })

  test("creation fails with proper statuscode and message if username already taken", async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: "root",
      name: "superuser",
      password: "secrets",
    }

    const result = await api
      .post("/api/users")
      .send(newUser)
      .expect(400)
      .expect("Content-Type", /application\/json/)

    expect(result.body.error).toContain("`username` to be unique")

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd.length).toBe(usersAtStart.length)
  })

  test("creation fails with proper statuscode and message if username too short", async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: "ro",
      name: "superuser",
      password: "secrets",
    }

    const result = await api
      .post("/api/users")
      .send(newUser)
      .expect(400)
      .expect("Content-Type", /application\/json/)

    expect(result.body.error).toContain("shorter than the minimum allowed length (3).")

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd.length).toBe(usersAtStart.length)
  })

  test("creation fails with proper statuscode and message if password too short", async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: "root",
      name: "superuser",
      password: "se",
    }

    const result = await api
      .post("/api/users")
      .send(newUser)
      .expect(400)
      .expect("Content-Type", /application\/json/)

    expect(result.body.error).toContain("assword shorter than minimum 3 characters")

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd.length).toBe(usersAtStart.length)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
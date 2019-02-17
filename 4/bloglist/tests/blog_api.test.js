const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const Blog = require("../models/blog")
const mongoose = require("mongoose")

const initialBlogs = [
  {
    title: "blogit on parasta",
    author: "mr. president",
    url: "nurmivaara.fi",
    likes: 666,
  },
  {
    title: "blogit on pahinta",
    author: "suuri johtaja",
    url: "nurmivaara.fi",
    likes: 333,
  },
]

beforeEach(async () => {
  await Blog.deleteMany({})

  let blogObject = new Blog(initialBlogs[0])
  await blogObject.save()

  blogObject = new Blog(initialBlogs[1])
  await blogObject.save()
})

test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/)
})

test("blog id is named correctly and is an actual string", async () => {
  const response = await api.get("/api/blogs")

  expect(response.body[0].id).toBeDefined
})

test("a valid blog can be added ", async () => {
  const newBlog = {
    title: "blogien lisääminen toimii",
    author: "Kone Kalle",
    url: "www.yle.fi",
    likes: 22,
  }

  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/)

  const response = await api.get("/api/blogs")

  const titles = response.body.map(r => r.title)

  expect(response.body.length).toBe(initialBlogs.length + 1)
  expect(titles).toContain(
    "blogien lisääminen toimii"
  )
})

test("a blog without likes defined gets 0 assigned", async () => {
  const newBlog = {
    title: "blogien ilman tykkäystä lisääminen toimii",
    author: "Kallis Kurko",
    url: "www.mtv.fi",
  }

  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/)

  const response = await api.get("/api/blogs")

  expect(response.body[initialBlogs.length].likes).toBe(0)
})

test("an invalid blog doesn't get created", async () => {
  const newBlog = {
    author: "Kaija Koo",
    likes: 22
  }

  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(400)
    .expect("Content-Type", /application\/json/)

  const response = await api.get("/api/blogs")

  expect(response.body.length).toBe(initialBlogs.length)
})

afterAll(() => {
  mongoose.connection.close()
})

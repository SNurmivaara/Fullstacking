const blogsRouter = require("express").Router()
const Blog = require("../models/blog")
const User = require("../models/user")
const jwt = require("jsonwebtoken")

/* MOVED INTO MIDDLEWARE
  const getTokenFrom = request => {
  const authorization = request.get("authorization")
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7)
  }
  return null
} */

blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog
    .find({})
    .populate("user", { username: 1, name: 1 })

  response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.post("/", async (request, response, next) => {
  const body = request.body

  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    if(!request.token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" })
    }

    const user = await User.findById(decodedToken.id)

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes || 0,
      user: user._id
    })

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    response.json(savedBlog.toJSON())
  } catch(exception) {
    next(exception)
  }
})

blogsRouter.delete("/:id", async (request, response, next) => {
  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    if(!request.token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" })
    }

    const user = await User.findById(decodedToken.id)

    const blog = await Blog.findById(request.params.id)

    if (blog.user.toString() === user.id.toString()) {
      const deletedBlog = await blog.delete()
      response.json(deletedBlog)
    } else {
      return response.status(401).json({ error: "token missing or invalid" })
    }
  } catch(exception) {
    next(exception)
  }

  /* Blog.findByIdAndRemove(request.params.id)
    .then(() => response.status(204).end)
    .catch(error => next(error)) */
})

blogsRouter.put("/:id", async (request, response, next) => {
  const body = request.body

  try {
    const blog = await Blog.findById(request.params.id)
    blog.likes = body.likes
    const updated = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    response.json(updated.toJSON())
  } catch(exception) {
    next(exception)
  }

  /* Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then(updatedBlog => {
      response.json(updatedBlog.toJSON())
    })
    .catch(error => next(error)) */
})

module.exports = blogsRouter
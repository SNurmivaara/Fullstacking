import React, { useState, useEffect } from "react"
import Blog from "./components/Blog"
import blogService from "./services/blogs"
import loginService from "./services/login"
import LoginForm from "./components/LoginForm"
import BlogForm from "./components/BlogForm"
import useField from "./hooks/useField"

const App = () => {
  const [blogs, setBlogs] = useState([])
  const username = useField("text")
  const password = useField("password")
  const [user, setUser] = useState(null)
  const title = useField("text")
  const author = useField("text")
  const url = useField("text")
  const [notification, setNotification] = useState("")
  const [blogFormVisible, setBlogFormVisible] = useState(false)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogAppUser")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  })

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const userObject = {
        username: username.value,
        password: password.value
      }

      const user = await loginService.login(userObject)

      window.localStorage.setItem(
        "loggedBlogAppUser", JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      username.empty()
      password.empty()
    } catch (exception) {
      alert("Password or login incorrect")
      username.empty()
      password.empty()
    }
  }

  const handleLogout = async (event) => {
    event.preventDefault()
    try {
      window.localStorage.clear()
      setUser(null)
    } catch (exception) {
      alert("Logout failed")
    }
  }

  const handleBlogCreate = async (event) => {
    event.preventDefault()
    try {
      const blogObject = {
        title: title.value,
        author: author.value,
        url: url.value,
        user: window.localStorage.getItem("loggedBlogAppUser")
      }
      const created = await blogService.create(blogObject)
      setBlogs(blogs.concat(created))
      title.empty()
      author.empty()
      url.empty()
      setNotification("Blog creation successful")
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    } catch (exception) {
      setNotification("Blog creation failed")
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
  }

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    return (
      <div className="notification">
        {message}
      </div>
    )
  }

  const loginForm = () => (
    <div>
      <LoginForm
        username={username}
        password={password}
        //handleUsernameChange={({ target }) => setUsername(target.value)}
        //handlePasswordChange={({ target }) => setPassword(target.value)}
        handleLogin={handleLogin}
      />
    </div>
  )

  const blogListing = () => (
    <div>
      <form onSubmit={handleLogout}>
        <button type="submit">logout</button>
      </form>
      <p>Welcome back {user.username}!</p>
      <h1>Blogs</h1>
      {blogForm()}
      {blogs
        .sort((a,b) => a.likes < b.likes)
        .map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
    </div>
  )

  const blogForm = () => {
    const hideWhenVisible = { display: blogFormVisible ? "none" : "" }
    const showWhenVisible = { display: blogFormVisible ? "" : "none" }

    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setBlogFormVisible(true)}>create new blog</button>
        </div>
        <div style={showWhenVisible}>
          <BlogForm
            title={title}
            author={author}
            url={url}
            //handleTitleChange={({ target }) => setTitle(target.value)}
            //handleAuthorChange={({ target }) => setAuthor(target.value)}
            //handleUrlChange={({ target }) => setUrl(target.value)}
            handleBlogCreate={handleBlogCreate}
          />
          <button onClick={() => setBlogFormVisible(false)}>cancel</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Notification message={notification} />
      {user === null ?
        loginForm() :
        blogListing()
      }
    </div>
  )
}

export default App
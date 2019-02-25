import React, { useState } from 'react'
import blogService from "../services/blogs"

const Blog = ({ blog }) => {
  const [expanded, setExpanded] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const user = window.localStorage.getItem("loggedBlogAppUser")

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5
  }

  const handleLike = async (event) => {
    event.preventDefault()
    try {
      const blogObject = {
        user: blog.user.id,
        likes: blog.likes + 1,
        author: blog.author,
        title: blog.title,
        url: blog.url,
      }
      const updated = await blogService.update(blog.id, blogObject)
      blog.likes = updated.likes
    } catch (exception) {
      alert("blog like failed!")
    }
  }

  const handleRemove = async (event) => {
    event.preventDefault()
    if (window.confirm(`Remove blog "${blog.title}"?`)) {
      try {
        await blogService.remove(blog.id)
        setDeleted(true)
      } catch (exception) {
        alert("blog delete failed!")
      }
    } 
  }

  const likeButton = (
    <button onClick={handleLike}>like</button>
  )

  const removeButton = (
    <button onClick={handleRemove}>remove</button>
  )

  const smallBlog = (
    <div>
      {blog.title}<br/>
      Author: {blog.author}
    </div>
  )

  const expandedBlog = (
    <div>
      {blog.title}<br/>
      Author: {blog.author}<br/>
      Url: {blog.url}<br/>
      {blog.likes} likes {likeButton}<br/>
      added by {blog.user.name}<br/>
      {blog.user.name === JSON.parse(user).name ? 
        removeButton :
        null
      }
    </div>
  )

  if (deleted !== true) {
    return (
      <div style={blogStyle}>
        <div>
          {expanded === true ?
            expandedBlog :
            smallBlog
          }
          <button onClick={() => setExpanded(!expanded)}>
            {expanded === true ?
              "collapse" :
              "expand"}
          </button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Blog
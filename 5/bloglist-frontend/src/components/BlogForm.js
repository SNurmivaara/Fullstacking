import React from "react"

const BlogForm = ({
  handleBlogCreate,
  title,
  author,
  url,
  //handleTitleChange,
  //handleAuthorChange,
  //handleUrlChange,
}) => {
  return (
    <div>
      <form onSubmit={handleBlogCreate}>
        <div>
          Title:
          <input {...title} empty=""/>
        </div>
        <div>
          Author:
          <input {...author} empty=""/>
        </div>
        <div>
          url:
          <input {...url} empty=""/>
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default BlogForm
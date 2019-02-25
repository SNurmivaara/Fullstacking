import React from 'react'

const BlogForm = ({
  handleBlogCreate,
  title,
  author,
  url,
  handleTitleChange,
  handleAuthorChange,
  handleUrlChange,
}) => {
  return (
    <div>
      <form onSubmit={handleBlogCreate}>
        <div>
          Title:
          <input
            type="text"
            value={title}
            name="Title"
            onChange={handleTitleChange}//({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Author:
          <input
            type="text"
            value={author}
            name="Author"
            onChange={handleAuthorChange}//({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          url:
          <input
            type="text"
            value={url}
            name="URL"
            onChange={handleUrlChange}//({ target }) => setUrl(target.value)}
          />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default BlogForm
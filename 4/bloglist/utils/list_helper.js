const lodash = require('lodash')

const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }

  return blogs.length === 0
  ? 0
  : blogs.reduce(reducer, 0)
}

const favoriteBlog = blogs => {
  const max = Math.max.apply(Math, blogs.map(blog => blog.likes))
  return blogs.find(blog => blog.likes === max)
}

const mostBlogs = blogs => {
  const authors = lodash.map(blogs, 'author')
  const mostCommonAuthor = lodash.chain(authors).countBy().toPairs().max(lodash.last).head().value()
  return blogs.find(blog => blog.author === mostCommonAuthor)
}

const mostLikesAuthor = blogs => {
  const authors = lodash.uniq(lodash.map(blogs, 'author'))
  const likes = {}
  for (var i = 0; i < authors.length; i++) {
    likes[authors[i]] = 0
  }
  for (var i = 0; i < blogs.length; i++) {
    likes[blogs[i].author] =+ blogs[i].likes
  }
  
  return lodash.maxBy(lodash.keys(likes), function (o){return likes[o]})
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikesAuthor
}
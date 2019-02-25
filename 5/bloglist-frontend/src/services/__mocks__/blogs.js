const blogs = [
  {
    id: "1239u2riofjwdc9u1032ej",
    title: "best tests EU",
    date: "2019-01-28T16:38:15.541Z",
    author: "Steve Bobs",
    url: "www.appel.com",
    user: {
      _id: "0912u3jiofjew09j32",
      username: "stewewoz",
      name: "Stewe Wozniak"
    }
  },
  {
    id: "30294ur32io4fjd902j3r",
    title: "best tests WEST",
    date: "2018-01-28T16:38:15.541Z",
    author: "Steve Cops",
    url: "www.appel.com",
    user: {
      _id: "0912u3jiofjew09j32",
      username: "stewewoz",
      name: "Stewe Wozniak"
    }
  },
]

const getAll = () => {
  return Promise.resolve(blogs)
}

export default { getAll }
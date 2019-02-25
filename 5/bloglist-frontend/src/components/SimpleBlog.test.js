import React from "react"
import "jest-dom/extend-expect"
import { render, cleanup, fireEvent } from "react-testing-library"
import SimpleBlog from "./SimpleBlog"

afterEach(cleanup)

test("renders content", () => {
  const blog = {
    title: "testing title for react-testing",
    author: "test dude",
    likes: 0
  }

  const component = render(
    <SimpleBlog blog={blog}/>
  )

  expect(component.container).toHaveTextContent(
    "testing title for react-testing",
    "test dude",
    0
  )
})

test("clicking the like button twice calls the event handler twice", async () => {
  const blog = {
    title: "likes galore",
    author: "mr. popular",
    likes: 0
  }

  const mockHandler = jest.fn()

  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  )

  const button = getByText("like")
  fireEvent.click(button)
  fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(2)
})
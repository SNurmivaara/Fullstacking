import React from "React"
import { render, waitForElement } from "react-testing-library"
jest.mock("./services/blogs")
import App from "./App"

describe("<App />", () => {
  it("if no user logged, blogs are not rendered", async () => {
    const component = render(
      <App />
    )

    await waitForElement(
      () => component.getByText("login")
    )
  })
  /* it("blogs are gotten from backend and rendered if logged in", async () => {
    const user = {
      username: "tester",
      token: "1231231234",
      name: "Tom the Tester"
    }

    localStorage.setItem("loggedBlogAppUser", JSON.stringify(user))

    const component = render(
      <App />
    )
    component.rerender(<App />)

    await waitForElement(
      () => component.container.querySelector(".blog")
    )

    const blogs = component.container.querySelectorAll(".blog")
    expect(blogs.length).toBe(2)

    expect(component.containber).toHaveTextContent(
      "Best tests EU"
    )
  }) */
})
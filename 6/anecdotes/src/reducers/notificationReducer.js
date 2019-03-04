export const notificationChange = (content) => {
  return {
    type: "SET_NOTIFICATION",
    content
  }
}

export const resetNotification = () => {
  return {
    type: "RESET"
  }
}

const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      state = action.content
      return state
    case "RESET":
      return null
    default:
      return state
  }
}

export default notificationReducer
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

export const setNotification = ({ text, timer }) => {
  return async dispatch => {
    dispatch({
      type: "SET_NOTIFICATION_TIMED",
      text: text,
      timer: timer
    })
  }
}

const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      state = action.content
      return state
    case "RESET":
      return null
    case "SET:NOTIFICATION_TIMED":
      state = action.text
      setTimeout(() => {
        state = null
      }, action.timer*100)
      return state
    default:
      return state
  }
}

export default notificationReducer
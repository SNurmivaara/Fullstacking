const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
  total: 0,
  average: 0,
  positive: 0,
}

const counterReducer = (state = initialState, action) => {
  const calculateAverage = ({ operation }) => {
    return (state.good - state.bad + operation) / (state.total + 1)
  }

  const calculatePositivePercentage = ({ operation }) => (
    ((state.good + operation) / (state.total+1))*100
  )

  switch (action.type) {
    case 'GOOD':
      state = {
        good: state.good + 1,
        ok: state.ok,
        bad: state.bad,
        total: state.total + 1,
        average: calculateAverage({operation: 1}),
        positive: calculatePositivePercentage({operation: 1})
      }
      return state
    case 'OK':
      state = {
        good: state.good,
        ok: state.ok + 1,
        bad: state.bad,
        total: state.total + 1,
        average: calculateAverage({operation: 0}),
        positive: calculatePositivePercentage({operation: 0})
      }
      return state
    case 'BAD':
      state = {
        good: state.good,
        ok: state.ok,
        bad: state.bad + 1,
        total: state.total + 1,
        average: calculateAverage({operation: -1}),
        positive: calculatePositivePercentage({operation: 0})
      }
      return state
    case 'ZERO':
      state = {
        good: 0,
        ok: 0,
        bad: 0,
        total: 0,
        average: 0,
        positive: 0
      }
      return state
    default: return state
  }
  
}

export default counterReducer
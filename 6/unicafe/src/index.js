import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  const neutral = () => {
    store.dispatch({
      type: 'OK'
    })
  }

  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }

  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  const getStats = () => (
    <div className="stats">
      <div>hyvä {store.getState().good}</div>
      <div>neutraali {store.getState().ok}</div>
      <div>huono {store.getState().bad}</div>
      <div>yhteensä {store.getState().total}</div>
      <div>keskiarvo {store.getState().average}</div>
      <div>positiivisia {store.getState().positive}%</div>
    </div>
  )

  return (
    <div>
      <h2>Anna palautetta</h2>
      <button onClick={good}>hyvä</button> 
      <button onClick={neutral}>neutraali</button> 
      <button onClick={bad}>huono</button>
      <button onClick={zero}>nollaa tilastot</button>
      <h2>Statitiikka</h2>
      {store.getState().total > 0 ? getStats() : <p>Ei yhtään palautetta annettu</p>}
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)

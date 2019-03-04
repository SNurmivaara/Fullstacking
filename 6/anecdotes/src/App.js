import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteListing from './components/AnecdoteListing'
import Notification from './components/Notification'

const App = (props) => {
  return (
    <div>
      <Notification store={props.store} />
      <h2>Anecdotes</h2>
      <AnecdoteListing store={props.store} />
      <AnecdoteForm store={props.store} />
    </div>
  )
}

export default App

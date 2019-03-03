import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteListing from './components/AnecdoteListing'

const App = (props) => {
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteListing store={props.store} />
      <AnecdoteForm store={props.store} />
    </div>
  )
}

export default App

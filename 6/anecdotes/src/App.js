import React from 'react';
import Filter from "./components/Filter"
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteListing from './components/AnecdoteListing'
import Notification from './components/Notification'

const App = (props) => {
  return (
    <div>
      {props.store.getState().notification === null ? 
        null : 
        <Notification store={props.store}/>
      }
      <h2>Anecdotes</h2>
      <Filter store={props.store} />
      <AnecdoteListing store={props.store} />
      <AnecdoteForm store={props.store} />
    </div>
  )
}

export default App

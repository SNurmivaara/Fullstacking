import React from 'react';
import Filter from "./components/Filter"
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteListing from './components/AnecdoteListing'
import Notification from './components/Notification'

const App = (props) => {
  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteListing />
      <AnecdoteForm />
    </div>
  )
}

export default App

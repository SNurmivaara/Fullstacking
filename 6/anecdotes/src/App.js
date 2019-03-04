import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Filter from "./components/Filter"
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteListing from './components/AnecdoteListing'
import Notification from './components/Notification'
import { initializeAnecdotes } from "./reducers/anecdoteReducer"

const App = (props) => {
  useEffect(() => {
    props.initializeAnecdotes()
  },[])

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

export default connect(null, { initializeAnecdotes })(App)

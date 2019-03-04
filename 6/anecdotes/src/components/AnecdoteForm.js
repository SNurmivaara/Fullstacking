import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange, resetNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ store }) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    store.dispatch(
      createAnecdote(event.target.anecdote.value)
    )

    store.dispatch(
      notificationChange("New anecdote \"" + event.target.anecdote.value + "\" added!")
    )

    setTimeout(() => {
      store.dispatch(
        resetNotification()
      )
    }, 5000)

    event.target.anecdote.value = ""
  }

  return (
      <div className="AnecdoteForm">
      <h2>create new</h2>
          <form onSubmit={addAnecdote}>
            <div><input name="anecdote"/></div>
            <button type="submit">create</button>
          </form>
      </div>
    )
  }

export default AnecdoteForm
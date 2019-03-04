import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import { notificationChange, resetNotification } from '../reducers/notificationReducer'

const AnecdoteListing = ({ store }) => {
  const anecdotes = store.getState().anecdotes
  const filter = store.getState().filter

  const anecdotesToShow = () => {
    if (filter === "") {
      return anecdotes
    }
    return anecdotes.filter((anecdotes) => anecdotes.content.toLowerCase().includes(filter.toLowerCase()))
  }
  
  const vote = (id, content) => {
    store.dispatch(
      addVote(id)
    )

    const notification = "You voted for \"" + content + "\""
    store.dispatch(
      notificationChange(notification)
    )

    setTimeout(() => {
      store.dispatch(
        resetNotification()
      )
    }, 5000)
  }

  return (
    <div className="AnecdoteList">
      {anecdotesToShow().map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteListing
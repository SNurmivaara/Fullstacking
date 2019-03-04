import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteListing = ({ store }) => {
  const anecdotes = store.getState().anecdotes
  
  const vote = (id) => {
    store.dispatch(
      addVote(id)
    )
  }

  return (
    <div className="AnecdoteList">
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteListing
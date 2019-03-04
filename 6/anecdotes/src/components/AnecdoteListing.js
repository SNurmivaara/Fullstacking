import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { notificationChange, resetNotification } from '../reducers/notificationReducer'

const AnecdoteListing = (props) => {
  const anecdotes = props.anecdotes
  const filter = props.filter

  const anecdotesToShow = () => {
    if (filter === "") {
      return anecdotes
    }
    return anecdotes.filter((anecdotes) => anecdotes.content.toLowerCase().includes(filter.toLowerCase()))
  }
  
  const vote = (id, content) => {
    props.addVote(id)

    const notification = "You voted for \"" + content + "\""
    props.notificationChange(notification)

    setTimeout(() => {
      props.resetNotification()
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  addVote,
  notificationChange,
  resetNotification
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteListing)

export default ConnectedAnecdotes
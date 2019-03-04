import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange, resetNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    props.createAnecdote(content)

    props.notificationChange("New anecdote \"" + event.target.anecdote.value + "\" added!")

    setTimeout(() => {
      props.resetNotification()
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

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = {
  createAnecdote,
  notificationChange,
  resetNotification
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/* const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
	  <div>
		  <p>
			  Hello {name}, you are {age} years old.
		  </p>
		  <p>So you were probably born {bornYear()}</p>
	  </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Arto" age={26+10} />
      <Hello name={nimi} age={ika} />
    </div>
  )
} */

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = (props) => {
  const [ counter, setCounter ] = useState(0)
  const setToValue = (value) => setCounter(value)  

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={() => setToValue(counter + 1)}
        text='plus'
      />
      <Button
        handleClick={() => setToValue(0)}
        text='zero'
      />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
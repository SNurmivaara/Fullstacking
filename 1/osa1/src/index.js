import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/* 

1.a

const Hello = ({ name, age }) => {
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


/*

1.b-c

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

*/

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        sovellusta käytetään nappeja painelemalla
      </div>
    )
  }

  return (
    <div>
      näppäilyhistoria: {props.allClicks.join(' ')}
    </div>
  )
}

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const[allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right+1)
  }

  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick}>vasen</button>
        <button onClick={handleRightClick}>oikea</button>
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
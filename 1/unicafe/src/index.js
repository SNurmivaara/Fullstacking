import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Title = props => {
  return (
    <h1>{props.title}</h1>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)

  const handleNeutralClick = () => setNeutral(neutral + 1)

  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Title title='Anna palautetta'/>
        <button onClick={handleGoodClick}>hyvä</button>
        <button onClick={handleNeutralClick}>neutraali</button>
        <button onClick={handleBadClick}>huono</button>
      <Title title='Statistiikka' />
      <p>Hyvä: {good}</p>
      <p>Neutraali: {neutral}</p>
      <p>Huono: {bad}</p>
      <p>Yhteensä: {good+neutral+bad}</p>
      <p>Keskiarvo: {(good-bad)/(good+neutral+bad)}</p>
      <p>Positiivisia: {good/(neutral+bad+good)}</p>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'));

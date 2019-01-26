import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Title = props => (
  <h1>{props.title}</h1>
)

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Statistic = ({ name, value, suffix}) => (
  <td>{name} {value} {suffix}</td>
)

const Statistics = ({good, neutral, bad}) => {
    if (good + neutral + bad === 0) {
      return (
        <div>
          <p>Ei yhtään palautetta annettu</p>
        </div>
      )
    }

    return (
      <div>
        <table>
          <tbody>
            <tr><Statistic name='Hyvä' value={good} /></tr>
            <tr><Statistic name='Neutraali' value={neutral}/></tr>
            <tr><Statistic name='Huono' value={bad} /></tr>
            <tr><Statistic name='Yhteensä' value={good+neutral+bad} /></tr>
            <tr><Statistic name='Keskiarvo' value={(good-bad)/(good+neutral+bad)} /></tr>
            <tr><Statistic name='Positiivisia' value={(good/(neutral+bad+good))*100} suffix='%'/></tr>
          </tbody>
        </table>
      </div>
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
        <Button handleClick={handleGoodClick} text='Hyvä' />
        <Button handleClick={handleNeutralClick} text='Neutraali' />
        <Button handleClick={handleBadClick} text='Huono' />
      <Title title='Statistiikka' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'));

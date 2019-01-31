import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const course = {
  name: 'Half Stack -sovelluskehitys',
  parts: [
    {
      name: 'Reactin perusteet',
      exercises: 10
    },
    {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
    },
    {
      name: 'Komponenttien tila',
      exercises: 14
    }
  ]
}

ReactDOM.render(<App course={course}/>, document.getElementById('root'))
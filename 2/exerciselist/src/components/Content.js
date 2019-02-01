import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
  console.log(parts)

  var initialValue = 0
  const total = parts.reduce( (s, p) => {
	  return s + p.exercises
  }, initialValue)

  const rows = () => parts.map(part =>
    <Part
      key={part.name}
      part={part}
    />
  )

	return (
		<div>
	    {rows()}
      <p>Yhteensä {total} tehtävää</p>
		</div>
	)
}

export default Content
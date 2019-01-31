import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
  console.log(parts)

  const rows = () => parts.map(part =>
    <Part
      key={part.name}
      part={part}
    />
  )

	return (
		<div>
      {rows()}
		</div>
	)
}

export default Content
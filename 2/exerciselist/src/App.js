import React from 'react'
import Course from './components/Course'
import Header from './components/Header'

const App = ({ courses }) => {
  const rows = () => courses.map(course =>
    <Course
      key={course.name}
      course={course}
    />
    )

  return (
    <div>
      <Header header="Opetusohjelma"/>
      {rows()}
    </div>
  )
}

export default App
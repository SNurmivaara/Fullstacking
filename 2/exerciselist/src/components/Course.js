import React from 'react'
import Header from './Header'
import Content from './Content'

// const Total = (props) => {
//     return (
//         <p>Yhteensä {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//     )
// }

const Course = ({ course }) => {
    return (
        <div>
            <Header header={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}

export default Course
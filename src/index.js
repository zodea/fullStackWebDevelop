import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  }

  return <Course course={course} />
}
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}
const Header = ({ course: { name } }) => {
  return <h1>{name}</h1>
}
const Content = ({ course: { parts } }) => {
  return (
    <div>
      <Part part={parts[0]}></Part>
      <Part part={parts[1]}></Part>
      <Part part={parts[2]}></Part>
    </div>
  )
}

const Part = ({ part: { name, exercises } }) => {
  return (
    <>
      <div>{name} {exercises}</div>
    </>
  )
}
const Total = props => {
  let total = 0
  props.course.parts.map(res => {
    total += res.exercises
    return res
  })
  return <div>all: {total}</div>
}

ReactDOM.render(<App />, document.getElementById('root'))

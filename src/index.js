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
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
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
      {parts.map(part => (
        <Part key={part.id} part={part}></Part>
      ))}
    </div>
  )
}

const Part = ({ part: { name, exercises } }) => {
  return (
    <>
      <div>
        {name} {exercises}
      </div>
    </>
  )
}
const Total = ({ course: { parts } }) => {
  const total = parts.reduce((prev, next) => prev + next.exercises, 0)
  return <div>all: {total}</div>
}

ReactDOM.render(<App />, document.getElementById('root'))

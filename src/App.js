import React from 'react'

const Note = ({ note }) => {
  return <li>{note.content}</li>
}

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => (
          <Note note={note} key={note.id}></Note>
        ))}
      </ul>
    </div>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    console.log('effect')
    const promise = axios.get('http://localhost:3001/persons')
    promise.then(response => {
      console.log(`response`, response)
      setNotes(response.data)
    })
  }, [])
  console.log('render', notes.length, 'notes')
  return <div>{JSON.stringify(notes)}</div>
}

export default App

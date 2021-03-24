import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const addToBook = event => {
    event.preventDefault()
    const repeatName = persons.filter(person => person.name === newName)
    if (repeatName && repeatName.length) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const newPerson = persons.concat({ name: newName })
    setPersons(newPerson)
    setNewName('')
  }

  const changeName = event => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addToBook}>
        <div>
          name: <input value={newName} onChange={changeName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => (
        <div key={index}>{person.name}</div>
      ))}
    </div>
  )
}

export default App

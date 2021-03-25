import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-1234567' }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const addToBook = event => {
    event.preventDefault()
    const repeatName = persons.filter(person => person.name === newName)
    if (repeatName && repeatName.length) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const newPerson = persons.concat({ name: newName, number: newNumber })
    setPersons(newPerson)
    setNewName('')
    setNewNumber('')
  }

  const filterBook = event => {
    event.preventDefault()
    const filterNames = persons.filter(person => person.name.toLowerCase().includes(filterName))
    setPersons(filterNames)
  }

  const changeName = event => {
    setNewName(event.target.value)
  }
  const changeNumber = event => {
    setNewNumber(event.target.value)
  }

  const changeFilterName = event => {
    setFilterName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={filterBook}>
        filter shown with
        <input type="text" value={filterName} onChange={changeFilterName} />
      </form>
      <h2>add a new</h2>
      <form onSubmit={addToBook}>
        <div>
          name: <input value={newName} onChange={changeName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={changeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => (
        <div key={index}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  )
}

export default App

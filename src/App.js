import React, { useEffect, useState } from 'react'
import phone from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [filterPersons, setFilterPersons] = useState([])

  useEffect(() => {
    phone.getAll().then(res => {
      setPersons(res)
    })
  }, [])

  const addToBook = event => {
    event.preventDefault()
    const repeatName = persons.filter(person => person.name === name)
    if (repeatName && repeatName.length) {
      alert(`${name} is already added to phonebook`)
      return
    }
    phone.create({ name, number }).then(res => {
      const newPerson = persons.concat(res)
      setPersons(newPerson)
      setName('')
      setNumber('')
    })
  }

  const deletePerson = person => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      phone.remove(person.id).then(status => {
        if (status === 200) {
          setPersons(persons.filter(data => data.id !== person.id))
        }
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <Input value={filterPersons} onChange={setFilterPersons} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addToBook}>
        <div>
          name <Input value={name} onChange={setName} />
        </div>
        <div>
          number <Input value={number} onChange={setNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={() => deletePerson(person)}>delete</button>
        </div>
      ))}
    </div>
  )
}

const Input = ({ value, onChange }) => {
  const changeHandle = event => {
    onChange(event.target.value)
  }
  return <input value={value} onChange={changeHandle}></input>
}

export default App

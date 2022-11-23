import { useState } from 'react'

const Numbers = ({persons, searchTerm}) => {
  let people = []
  if (searchTerm.length) {
    people = persons.filter(person => {
      return person.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    })
  } else {
    people = persons
  }
  return (
    <div>
    <h2>Numbers</h2>
    <table><tbody>
    {people.map(person => {
      return (
        <tr key={person.name}><td>{person.name}</td><td>{person.number}</td></tr>
      )
    })}
    </tbody></table>
    </div>
    )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const lookup = persons.filter(person => person.name === newName)
    if (lookup.length) {
      alert(`${newName} has already been added.`)
      return
    }
    const person = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(person))
    setNewName('')
    setNewNumber('')
  }

  const searchPerson = (event) => {
    event.preventDefault()
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Search the phonebook</h3>
      <form onSubmit={searchPerson}>
        <div>
          search: <input value={searchTerm} onChange={handleSearchChange} />
        </div>

      </form>
      <h3>Add a new person</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Numbers persons={persons} searchTerm={searchTerm} />

    </div>
  )

}

export default App

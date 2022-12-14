import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '+35850555555' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
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

      <h2>Numbers</h2>
      <table><tbody>
      {persons.map(person => {
        return (
          <tr key={person.name}><td>{person.name}</td><td>{person.number}</td></tr>
        )
      })}
      </tbody></table>
    </div>
  )

}

export default App

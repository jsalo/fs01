import { useState } from 'react'

const Person = ({key, name}) => {
  return (
    <tr key={key}><td>{name}</td></tr>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    console.log('addPreson', event)
    event.preventDefault()
    const person = {
      name: newName,
    }
    setPersons(persons.concat(person))
    setNewName('')
  }

  const handlePersonChange = (event) => {
    console.log('handlePersonChange', event)
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <table><tbody>
      {persons.map(person => {
        return (
        <Person key={person.name} name={person.name} />
        )
      })}
      </tbody></table>
    </div>
  )

}

export default App

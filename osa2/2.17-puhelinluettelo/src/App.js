import { useState, useEffect } from 'react'
import phoneBookService from './services/phoneBookService'
import Heading from './components/Heading'
import Numbers from './components/Numbers'
import AddNewPerson from './components/AddNewPerson'
import Search from './components/Search'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const getPhoneBook = () => {
    console.log('getPhoneBook loading...', phoneBookService)
    phoneBookService
      .getAll()
      .then(allPeople => {
        console.log('getPhoneBook response', allPeople)
        setPersons(allPeople)
      })
      .catch (error => {
        console.log('getPhoneBook failed', error)
      })
  }

  const updatePerson = (person) => {
    console.log('updatePerson update', person)
 
    phoneBookService
      .update(person.id, person)
      .then(updatedPerson => {
        console.log('updatePerson update response', updatedPerson)
        // this needs a fix:
        setPersons(persons.map(p => p.id !== person.id ? p : updatedPerson))
        setNewName('')
        setNewNumber('')
      }).catch (error => {
        console.log('updatePerson failed', error)
      })

  }

  const removePerson = (id) => {
    return () => {
      const who = persons.find( person => person.id === id ).name
      if (window.confirm(`Do you want to remove ${who}?`)) {
        phoneBookService
          .remove(id)
          .then(status => {
            const newPersons = persons.filter(person => person.id !== id)
            setPersons(newPersons)
            console.log('removePerson done', id, status)
          })
      }
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const lookup = persons.filter(person => person.name === newName)

    const person = {
      name: newName,
      number: newNumber
    }

    if (lookup.length) {
      person.id = lookup.id
      updatePerson({person})
      //alert(`${newName} has already been added.`)
      return
    }

    console.log('addPerson create', person)

    phoneBookService
      .create(person)
      .then(addedPerson => {
        console.log('addPerson create response', addedPerson)
        setPersons(persons.concat(addedPerson))
        setNewName('')
        setNewNumber('')
      })
      .catch (error => {
        console.log('addPerson failed', error)
      })

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

  // start by loading the phonebook
  useEffect(() => {
    getPhoneBook()
  }, [])

  return (
    <div>
      <Heading />
      <Search 
        searchPerson={searchPerson} 
        searchTerm={searchTerm} 
        handleSearchChange={handleSearchChange} 
      />
      <AddNewPerson 
        addPerson={addPerson} 
        newName={newName} 
        handlePersonChange={handlePersonChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
      />
      <Numbers persons={persons} searchTerm={searchTerm} removePerson={removePerson} />
    </div>
  )
}

export default App

import Person from './Person'

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
      <div>
      {people.map(person => {
        return (
          <Person person={person} />
        )
      })}
      </div>
      </div>
      )
  }

export default Numbers;

const Person = ({person}) => {
    return (
      <div key={person.name}>
      <b>{person.name}</b>  {person.number}
      </div>
    )
}

export default Person;
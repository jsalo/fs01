
const Header = ({course}) => {
  console.log('Header', course)
  return (
    <h1>{course}</h1>
  )
}

const Part = ({part}) => {
  console.log('Part', part.name, part.exercises)
  return (
    <p key={part.id}>
    <strong>{part.name}</strong>, {part.exercises} hours.
    </p>
  )
}

const Content = ({parts}) => {
  console.log('Content', typeof(parts), parts)

  const content = parts.map(part => {
    return (
    <Part part={part} />
    )
  })
  return (
    <div>{content}</div>
  )
}

const Total = ({parts}) => {
  console.log('Total', typeof(parts), parts)
  const hours = parts.reduce((total, part) => {
    return (total += part.exercises);
  }, 0)
  return (
    <p>
      Total {hours} hours.
    </p>
  )
}

const Course = ({parts, course}) => {
  console.log('Course', parts, course)
  return (
    <>
    <Header course={course} />
    <Content parts={parts} />
    <Total parts={parts} />
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
    name: 'Fundamentals of React',
    exercises: 10,
    id: 1
  },
  {
    name: 'Using props to pass data',
    exercises: 7,
    id: 2
  },
  {
    name: 'State of component',
    exercises: 14,
    id: 3
  }]
  return (
    <Course parts={parts} course={course} />
  )
}

export default App;


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

const Course = ({course}) => {
  console.log('Course', course)
  return (
    <div key={course.id}>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </div>
  )
}

export default Course;
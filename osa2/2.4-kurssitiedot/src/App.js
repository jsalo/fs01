
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

const Courses = ({courses}) => {
  console.log('Courses')
  const content = courses.map(course => {
    return (
    <Course course={course} />
    )
  })
  return (
    <div>{content}</div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
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
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <Courses courses={courses} />
  )
}

export default App;